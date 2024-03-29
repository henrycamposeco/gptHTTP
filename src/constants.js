export const MODEL_NAME = 'orca-mini-3b.ggmlv3.q4_0';

export const MODEL_PATH = './src/models';

export const PERSONAS_PATH = './src/personas';

export const HISTORY_PATH = './src/history';

export const PROMPT_HEADER = 'Text transcript of a never-ending conversation between User and Assistant';

export const PROMPT_FOOTER = '';

export const PROMPT_TEMPLATE = '### Instruction:\n%1\n### Response:\n';

export const MODEL_INFERENCE_CONFIGURATION = {
    verbose: true,
    temp: 0.8,
    topK: 40,
    topP: 0.9,
    nBatch: 1024,
    repeatPenalty: 1.0,
    repeatLastN: 64,
    nCtx: 4096,
}

export const LOAD_MODEL_CONFIGURATION = {
    verbose: true,
    modelPath: MODEL_PATH,
}

export const DEFAULT_PROMPT = 'tell me a joke';

export const DEFAULT_PERSONA = 'default';