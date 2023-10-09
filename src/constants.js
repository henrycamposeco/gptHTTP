export const MODEL_NAME = 'orca-mini-3b.ggmlv3.q4_0';

export const MODEL_PATH = './src/models';

export const PERSONAS_PATH = './src/personas';

export const HISTORY_PATH = './src/history';

export const MODEL_INFERENCE_CONFIGURATION = {
    temp: 0.8,
    topK: 40,
    topP: 0.9,
    nBatch: 128,
    repeatPenalty: 1.0,
    repeatLastN: 64,
    nCtx: 1024,
}

export const LOAD_MODEL_CONFIGURATION = {
    verbose: true,
    modelPath: MODEL_PATH,
}

export const DEFAULT_PROMPT = 'tell me a joke';

export const DEFAULT_PERSONA = 'default';

export const PROMPT_TEMPLATE = '### Instruction:\n' +
    '%1\n' +
    '### Response:\n';