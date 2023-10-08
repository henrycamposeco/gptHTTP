import fs from "fs/promises";
import {createCompletion, loadModel} from "gpt4all";
import {DEFAULT_PERSONA, DEFAULT_PROMPT, LOAD_MODEL_CONFIGURATION, MODEL_NAME} from "./constants.js";

async function doComplete(persona, prompt) {
    const model = await loadModel(MODEL_NAME, LOAD_MODEL_CONFIGURATION);
    const filePath = `./personas/${persona}.txt`
    try {
        model.config.promptTemplate = await fs.readFile(filePath, 'utf8');
        return createCompletion(model, [{
            role: 'user',
            content: prompt
        }], {systemPromptTemplate: ''});
    } catch (err) {
        throw err;
    }
}

const generateCompletion = async (prompt = DEFAULT_PROMPT, persona = DEFAULT_PERSONA) => {
    try {
        return doComplete(persona, prompt);
    } catch (err) {
        console.error("Error reading file:", err);
        return {error: "An error occurred"};
    }
}


export default generateCompletion;