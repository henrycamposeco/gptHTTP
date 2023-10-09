import fs from 'fs/promises';

class FileHistory {
    constructor(filename) {
        this.filename = filename;
    }

    async getHistory() {
        try {
            const data = await fs.readFile(this.filename, 'utf8');
            return JSON.parse(data);
        } catch (error) {
            console.error('Error reading file:', error);
            return [];
        }
    }

    async addToHistory(newContent) {
        try {
            let existingContent = await this.getHistory();
            existingContent = existingContent.concat(newContent);
            await fs.writeFile(this.filename, JSON.stringify(existingContent, null, 2));
            console.log('Content added to the file successfully.');
        } catch (error) {
            console.error('Error writing to file:', error);
        }
    }

    async clearHistory() {
        try {
            await fs.writeFile(this.filename, '[]'); // Empty JSON array
            console.log('File content cleaned successfully.');
        } catch (error) {
            console.error('Error cleaning file content:', error);
        }
    }
}

export default FileHistory;
