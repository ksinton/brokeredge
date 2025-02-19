import express from "express";
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
        console.log("data",data);
        const userData = {email: data.email, password: data.password};
        const businessData = {businessName: data.businessName, phone: data.phone};
        const newUserId:number  =  await addUser(db, userData);
        const result = await addBusiness(db, businessData, newUserId);
        res.json(result);
    }
)

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})