// Import all libraries here
import express from "express";
import cors from "cors";
import dialogflow from '@google-cloud/dialogflow';

// Initialized App
const app = express();
app.use(cors())
app.use(express.json())

// PORT
const PORT = process.env.PORT || 4000;

// Dialogflow Snippet/Boiler Plate
const sessionClient = new dialogflow.SessionsClient();




// Boiler Plate Code
app.get("/", (req, res) => {
    res.send("here is your server");
})
app.get("/profile", (req, res) => {
    res.send("here is your profile");
})
app.get("/about", (req, res) => {
    res.send("some information about me");
})
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});