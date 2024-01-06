const validMimeTypes = ["application/pdf", "image/gif", "image/tiff", "image/jpeg", "image/png", "image/bmp", "image/webp"];

const fileTextExtractorMiddleware = (req, res, next) => {
    if (!req.file) {
        res.status(400).send('No file uploaded.');
        return;
    }
    if (!validMimeTypes.includes(req.file.mimetype)) {
        res.status(400).send('Invalid file type.');
        return;
    }
    if (req.body.data) {
        try {
            const dataToExtract = JSON.parse(req.body.data);
            if (!Array.isArray(dataToExtract)) {
                throw new Error();
            }
        } catch (e) {
            res.status(400).send('Invalid data to extract.');
            return;
        }
    } else {
        res.status(400).send('No data to extract.');
        return;
    }

    next();
};

module.exports = fileTextExtractorMiddleware;