import express from "express";
import bodyParser from "body-parser";
import generateCompletion from "./gptCompletion.js";
import chatFilter from "./chatFilter.js";
import {ADDITIONAL_CONTEXT_STRING} from "./constants.js";

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


app.post("/gpt", async (req, res) => {
    const {prompt, persona} = req.body;

    try {
        const prettyPrompt = prompt + ADDITIONAL_CONTEXT_STRING;
        const rawResponse = await generateCompletion(prettyPrompt, persona);
        const response = chatFilter(rawResponse.choices[0].message?.content);
        res.send({content: response});
    } catch (err) {
        console.error("Error in main function:", err);
        res.send({content: "...sorry I was distracted, can you repeat that?"});
    }
});

app.listen(3000, () => {
    console.log("Server is Running!");
});
