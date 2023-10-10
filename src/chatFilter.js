const unwantedText = [
    'an AI',
    'language model',
];

const chatFilter = (content) => {
    for (const text of unwantedText) {
        if (content.includes(text)) {
            return ":)";
        }
    }
    return content.trim();
}

export default chatFilter;