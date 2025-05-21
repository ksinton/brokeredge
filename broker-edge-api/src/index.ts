import express from "express";
import { createClient } from 'redis';
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

// local project imports
import {whitelistFields, truncateString} from "./utils/whiteListing";
import { addBusiness, updateBusiness} from "./services/persistBusiness";
import { addUser, updateUser} from "./services/persistUser";
import { getIndustries, getSubIndustries, getReasonsForSelling, getSellerFinancing, getSuccessorOnboarding } from "./services/persistLists";
import { newAuthorizationToken, authorize} from "./services/authorization";
import { db } from "./config/db";

// create the redis client
const client = createClient({
        url: 'redis://redis:6379'
});

interface industryDataInterface {
        id: number;
        name: string;
}

interface subIndustryDataInterface {
        id: number;
        industryId: number;
        name: string;
}

interface reasonsForSellingDataInterface {
        id: number;
        name: string;
}

interface sellerFinancingDataInterface {
        id: number;
        name: string;
}

interface successorOnboardingDataInterface {
        id: number;
        name: string;
}

interface industry {
        name: string;
        subIndustries: string[];
}

interface industriesInterface { [key: number]: industry }
interface subIndustriesInterface { [key: number]: string }
interface reasonsForSellingInterface { [key: number]: string }
interface sellerFinancingInterface { [key: number]: string }
interface successorOnboardingInterface { [key: number]: string }

const app = express();

app.use(cookieParser()); // Add this middleware

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


const PORT = process.env.PORT || 8000;

let industryData: industryDataInterface[] | null = [];
let subIndustryData: subIndustryDataInterface[] | null = [];
let reasonsForSellingData: subIndustryDataInterface[] | null = [];
let sellerFinancingData: sellerFinancingDataInterface[] | null = [];
let successorOnboardingData: successorOnboardingDataInterface[] | null = [];

let industries : industriesInterface = {};
let subIndustries : subIndustriesInterface = {};
let reasonsForSelling : reasonsForSellingInterface = {};
let sellerFinancing : sellerFinancingInterface = {};
let successorOnboarding : successorOnboardingInterface = {};


(async () => {
        industryData = await getIndustries(db);

        if (industryData) {

                industryData.forEach((industryObj: industryDataInterface) => {
                        industries[industryObj.id] = { name: industryObj.name, subIndustries: []}
                })
        }

        subIndustryData = await getSubIndustries(db);

        if(subIndustryData) {
                subIndustryData.forEach((subIndustryObj: subIndustryDataInterface) => {
                        subIndustries[subIndustryObj.id] = subIndustryObj.name;
                        industries[subIndustryObj.industryId].subIndustries.push(subIndustryObj.name);

                })
        }

        reasonsForSellingData = await getReasonsForSelling(db);

        if(reasonsForSellingData) {
                reasonsForSellingData.forEach((reasonsForSellingObj: reasonsForSellingDataInterface) => {
                        reasonsForSelling[reasonsForSellingObj.id] = reasonsForSellingObj.name;
                })
        }

        sellerFinancingData = await getSellerFinancing(db);

        if(sellerFinancingData) {
                sellerFinancingData.forEach((sellerFinancingObj: sellerFinancingDataInterface) => {
                        sellerFinancing[sellerFinancingObj.id] = sellerFinancingObj.name;
                })
        }

        successorOnboardingData = await getSuccessorOnboarding(db);

        if(successorOnboardingData) {
                successorOnboardingData.forEach((successorOnboardingObj: successorOnboardingDataInterface) => {
                        successorOnboarding[successorOnboardingObj.id] = successorOnboardingObj.name;
                })
        }

        console.log("industries", industries);
        console.log("sub industries", subIndustries);
        console.log("reasonsForSelling", reasonsForSelling);
        console.log("sellerFinancing", sellerFinancing);
        console.log("successorOnboarding", successorOnboarding);

        app.listen(PORT, async () => {
                await client.connect();
                console.log('Redis Connected');
                console.log(`Server started on port ${PORT}`);
        });
})();


app.get("/", (req: express.Request, res: express.Response) => {
        res.status(200).send("Welcome");
    }
)

app.post("/business", async (req: express.Request, res: express.Response) => {


        console.log("Cookies received by backend 4444:", req.cookies);

        // grap the data from the forms http POST payload
        const data = req.body;

        const allowedFields:any = ['businessName', 'phone', 'email', 'password'];

        // STRIP make sure all the data coming from the form is cleaned and only allowed whitelised chars are allowed
        const cleanData = whitelistFields(data, allowedFields);

        // CLIP make sure we clip all incoming form data to max char lengths.  this improves security too.
        // the default truncatiuon value for truncateString() is 255 chars
        cleanData.businessName = truncateString(cleanData.businessName);
        cleanData.phone = truncateString(cleanData.phone, 40);
        cleanData.email = truncateString(cleanData.email);
        cleanData.password = truncateString(cleanData.password);

        // provide basic server side validation for this form data
        // more detailed validation is provided on the html form fields
        if (cleanData.businessName === "" || cleanData.phone === "" || cleanData.email === "" || cleanData.password === "") {
                res.json({success: false});
        }

        console.log("data",data);
        console.log("cleanData",cleanData);
        const userData = {id: null, email: cleanData.email, password: cleanData.password};
        const businessData = {id: null, businessName: cleanData.businessName, phone: cleanData.phone};

        // check if the application is already in progress
        const userTableIds :any = await authorize(req, client);

        console.log("userTableIds", userTableIds);

        // if the authorization method returns null then treate this as a new user
        if (userTableIds === null) {

                // save the user to the database
                const newUserId:number|null  =  await addUser(db, userData);

                const newBusinessId:number|null = await addBusiness(db, businessData, newUserId);

                // this will stay false unless the authorization token is created
                let result = {success: false};

                // this method stores the email and password in redis using a token as the key
                // the token is also added to a cookie for future authorization
                if (newUserId && newBusinessId) {
                        newAuthorizationToken(newUserId, newBusinessId , client , res );
                        result = {success: true}
                }

                res.json(result);
        // if the authorization returns userIds
        // then this application is in progress and make update queiries
        } else {
                //update the user table
                userData.id = userTableIds.userId
                businessData.id = userTableIds.businessId;
                const updatedUserTableRows = await updateUser(db, userData);

                //update the business table
                const updatedBusinessTableRows = await updateBusiness(db, businessData, userData.id);

                console.log("updatedBusinessTableRows",updatedBusinessTableRows);
                console.log("updatedUserTableRows",updatedUserTableRows);

                let result = {success: false};

                if (updatedUserTableRows && updatedUserTableRows > 0 && updatedBusinessTableRows && updatedBusinessTableRows > 0) {
                        result = {success: true};
                }

                res.json(result);
        }
    }
)