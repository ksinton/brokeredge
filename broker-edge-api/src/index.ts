import express from "express";
import { createClient } from 'redis';
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

// local project imports
import {whitelistFields, truncateString} from "./utils/whiteListing";
import { addBusiness, updateBusiness, getBusinessListings, getBusiness} from "./services/persistBusiness";
import { addUser, updateUser} from "./services/persistUser";
import { getLists } from "./services/persistLists";

import { newAuthorizationToken, authorize} from "./services/authorization";
import { db } from "./config/db";

import { listsInterface } from "./types/listsInterface";

// create the redis client
const client = createClient({
        url: 'redis://redis:6379'
});

const app = express();

let lists : listsInterface;

app.use(cookieParser()); // Add this middleware

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


const PORT = process.env.PORT || 8000;


(async () => {

        lists = await getLists(db);

        console.log("lists.industries", lists.industries);
        console.log("lists.subIndustries", lists.subIndustries);
        console.log("lists.reasonsForSelling", lists.reasonsForSelling);
        console.log("lists.sellerFinancing", lists.sellerFinancing);
        console.log("lists.successorOnboarding", lists.successorOnboarding);
        console.log("lists.sites777", lists.sites);

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

app.get("/businesses/:host", async (req: express.Request, res: express.Response) => {

        const host : string = req.params.host;
        const siteId = lists.sites[host];

        console.log("siteId %%%%%", siteId);
        console.log("host %%%%%", host);

        const businessListings = await getBusinessListings(db, siteId);

        if (businessListings) {
                res.json({success: true, data: businessListings});
        } else {
                res.json({success: false});
        }
})

app.get("/business/:route", async (req: express.Request, res: express.Response) => {

        const route : string = req.params.route;

        let businessData :any  = null;

        if (route) {
                businessData = await getBusiness(db, route, lists);
        }

        if (businessData) {
                res.json({success: true, data: businessData});
        } else {
                res.json({success: false});
        }
})

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