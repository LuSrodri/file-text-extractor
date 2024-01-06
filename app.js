require('dotenv').config();
const express = require('express')
const app = express();
const cors = require('cors');
app.disable('x-powered-by');
app.use(cors());
const port = process.env.PORT || 3000;
const fs = require('fs').promises;

const upload = require('./upload/upload');
const fileTextExtractorMiddleware = require('./util/fileTextExtractorMiddleware');

const { DocumentProcessorServiceClient } = require('@google-cloud/documentai').v1;
const client = new DocumentProcessorServiceClient();

app.post('/file-text-extractor', upload.single('file'), fileTextExtractorMiddleware, async (req, res) => {
    const path = req.file.path;
    const data = req.body.data;
    const mimetype = req.file.mimetype;

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
    res.json({ text: text });
});

app.listen(port, () => {
    console.log(`App listening at ${port}`);
});