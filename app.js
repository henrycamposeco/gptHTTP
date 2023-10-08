import express from "express";
import bodyParser from "body-parser";
import generateCompletion from "./gptCompletion.js";

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


app.post("/gpt", async (req, res) => {
    const {prompt, persona} = req.body;

    try {
        const rawResponse = await generateCompletion(prompt, persona);
        const response = rawResponse.choices[0].message;
        res.send(response);
    } catch (err) {
        console.error("Error in main function:", err);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(3000, () => {
    console.log("Server is Running!");
});
