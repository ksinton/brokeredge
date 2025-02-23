import express from "express";
import {whitelistFields, truncateString} from "./utils/whiteListing";

var bodyParser = require('body-parser');
import cors from "cors";
const db = require('./config/db');
const {addUser} = require("./services/persistUser");
const {addBusiness} = require("./services/persistBusiness");

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

const PORT = process.env.PORT || 8000;

app.get("/", (req: express.Request, res: express.Response) => {
        res.status(200).send("Welcome");
    }
)

app.post("/business", async (req: express.Request, res: express.Response) => {

        const data = req.body;

        const allowedFields:any = ['businessName', 'phone', 'email', 'password'];
        const cleanData = whitelistFields(data, allowedFields);

        cleanData.businessName = truncateString(cleanData.businessName);
        cleanData.phone = truncateString(cleanData.phone, 40);
        cleanData.email = truncateString(cleanData.email);
        cleanData.password = truncateString(cleanData.password);

        if (cleanData.businessName === "" || cleanData.phone === "" || cleanData.email === "" || cleanData.password === "") {
                res.json({success: false});
        }

        console.log("data",data);
        console.log("cleanData",cleanData);
        const userData = {email: cleanData.email, password: cleanData.password};
        const businessData = {businessName: cleanData.businessName, phone: cleanData.phone};
        const newUserId:number  =  await addUser(db, userData);
        const result = await addBusiness(db, businessData, newUserId);
        res.json(result);
    }
)

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})