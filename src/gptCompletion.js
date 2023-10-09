import fs from "fs/promises";
import {createCompletion, loadModel} from "gpt4all";
import {
    DEFAULT_PERSONA,
    DEFAULT_PROMPT,
    HISTORY_PATH,
    LOAD_MODEL_CONFIGURATION,
    MODEL_INFERENCE_CONFIGURATION,
    MODEL_NAME,
    PERSONAS_PATH,
    PROMPT_FOOTER,
    PROMPT_HEADER,
    PROMPT_TEMPLATE
} from "./constants.js";
import FileHistory from "./historyManagement.js";

async function doComplete(prompt = DEFAULT_PROMPT, persona = DEFAULT_PERSONA, flush = false) {
    const historyManager = new FileHistory(`${HISTORY_PATH}/${persona}.history.txt`);

    const model = await loadModel(MODEL_NAME, LOAD_MODEL_CONFIGURATION);
    const filePath = `${PERSONAS_PATH}/${persona}.txt`
    try {
        model.config.systemPrompt = await fs.readFile(filePath, 'utf8');

        model.config.promptTemplate = PROMPT_TEMPLATE;

        const history = await historyManager.getHistory();
        const newPromptEntry = [{
            role: 'user',
            content: prompt
        }];
        const response = await createCompletion(model, history.concat(newPromptEntry), {
            ...MODEL_INFERENCE_CONFIGURATION,
            promptHeader: PROMPT_HEADER,
            promptFooter: PROMPT_FOOTER,
        });
        if (flush) {
            await historyManager.clearHistory();
        } else {
            await historyManager.addToHistory(newPromptEntry.concat(response.choices[0].message));
        }
        return response;
    } catch (err) {
        throw err;
    }
}

const generateCompletion = async (prompt, persona, flush) => {
    try {
        return doComplete(prompt, persona, flush);
    } catch (err) {
        console.error("Error reading file:", err);
        return {error: "An error occurred"};
    }
}


export default generateCompletion;