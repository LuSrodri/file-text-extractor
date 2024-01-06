const fs = require('fs').promises;

const { DocumentProcessorServiceClient } = require('@google-cloud/documentai').v1;
const client = new DocumentProcessorServiceClient();

const extractRawText = async (path, mimetype) => {
    const file = await fs.readFile(path);
    const encodedFile = file.toString('base64');

    const request = {
        name: client.processorPath(process.env.PROJECT_ID, "us", process.env.PROCESSOR_ID),
        rawDocument: {
            content: encodedFile,
            mimeType: mimetype,
        },
    };

    const [result] = await client.processDocument(request);
    const { text } = result.document;
    return text;
}

module.exports = extractRawText;