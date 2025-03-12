import express from "express";
import { createClient } from 'redis';
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from "body-parser";

// local project imports
import {whitelistFields, truncateString} from "./utils/whiteListing";
import { addBusiness } from "./services/persistBusiness";
import { addUser } from "./services/persistUser";
import { newAuthorizationToken } from "./services/authorization";
import { db } from "./config/db";

// create the redis client
const client = createClient();

const app = express();

app.use(cors({
        origin: "http://localhost:3000", // Allow frontend domain
        credentials: true, // Allows sending/receiving cookies
}))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

const PORT = process.env.PORT || 8000;

app.use(cookieParser()); // Add this middleware

app.get("/", (req: express.Request, res: express.Response) => {
        res.status(200).send("Welcome");
    }
)

app.post("/business", async (req: express.Request, res: express.Response) => {

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
        const userData = {email: cleanData.email, password: cleanData.password};
        const businessData = {businessName: cleanData.businessName, phone: cleanData.phone};

        // save the user to the database
        const newUserId:number  =  await addUser(db, userData);

        // this method stores the email and password in redis using a token as the key
        // the token is also added to a cookie for future authorization
        newAuthorizationToken(cleanData.email, cleanData.password , client , res );

        const result = await addBusiness(db, businessData, newUserId);
        res.json(result);
    }
)

app.listen(PORT, async() => {
        // connect to redis
        await client.connect(); // Explicitly connect Redis before using it
        console.log('Redis Connected');
        console.log(`Server started on port ${PORT}`);
})