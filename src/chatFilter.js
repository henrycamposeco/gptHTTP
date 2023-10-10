const unwantedText = [
    'Is there anything I can help you with?',
    'As an AI language model,',
    'As a language model',
    '. Is there anything else I can assist you with?',
    'As an AI,',
    'How can I assist you today?',
];

const chatFilter = (content) => {
    let curatedContent = content;
    unwantedText.forEach((text) => {
        curatedContent = curatedContent.replace(text, '');
    });

    return curatedContent.trim();
}

export default chatFilter;