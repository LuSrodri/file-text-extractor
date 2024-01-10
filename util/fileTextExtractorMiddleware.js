const validMimeTypes = ["application/pdf", "image/gif", "image/tiff", "image/jpeg", "image/png", "image/bmp", "image/webp"];

const fileTextExtractorMiddleware = (req, res, next) => {
    if (!req.file) {
        res.status(400).send({ error: 'No file uploaded.' });
        return;
    }

    if (!validMimeTypes.includes(req.file.mimetype)) {
        res.status(400).send({ error: 'Invalid file type.' });
        return;
    }

    if (!req.body.data) {
        res.status(400).send({ error: 'No data to extract.' });
        return;
    }
    
    try {
        JSON.parse(req.body.data);
    } catch (e) {
        res.status(400).send({ error: 'Invalid data to extract.' });
        return;
    }

    next();
};

module.exports = fileTextExtractorMiddleware;