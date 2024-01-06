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

app.post('/file-text-extractor', upload.single('file'), fileTextExtractorMiddleware, async (req, res) => {
    const path = req.file.path;
    const mimetype = req.file.mimetype;
    const data = req.body.data;

    const text = await extractRawText(path, mimetype);

    res.json({ text });
});

app.listen(port, () => {
    console.log(`App listening at ${port}`);
});