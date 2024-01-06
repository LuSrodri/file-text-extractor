require('dotenv').config();
const express = require('express')
const app = express();
const cors = require('cors');
app.disable('x-powered-by');
app.use(cors());
const port = process.env.PORT || 3000;

const upload = require('./upload/upload');

app.post('/file-text-extractor', upload.single('file'),  async (req, res) => {
    res.send("Pronto: " + req.file.path);
});

app.listen(port, () => {
    console.log(`App listening at ${port}`);
});