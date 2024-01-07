require('dotenv').config();
const express = require('express')
const app = express();
const cors = require('cors');
app.disable('x-powered-by');
app.use(cors());
const port = process.env.PORT || 3000;

const upload = require('./upload/upload');
const fileTextExtractorMiddleware = require('./util/fileTextExtractorMiddleware');
const extractRawText = require('./util/extractRawText');
const structuredJSONOutput = require('./util/structuredJSONOutput');

app.post('/file-text-extractor', upload.single('file'), fileTextExtractorMiddleware, async (req, res) => {
    try {
        const path = req.file.path;
        const mimetype = req.file.mimetype;
        const structuredForm = JSON.parse(req.body.data);

        const rawText = await extractRawText(path, mimetype);

        const structuredInformation = await structuredJSONOutput(rawText, structuredForm);

        res.json({ structuredInformation, rawText });
    } catch (error) {
        res.status(400).json({ error: "Something went wrong..." });
    }
});

app.listen(port, () => {
    console.log(`App listening at ${port}`);
});