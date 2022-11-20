const path = require('path');
const multer = require('multer');
// storage engine for multer
const storageEngine = multer.diskStorage({
    destination: './uploads/productImages/',
    filename: function (req, file, callback) {
        callback(null, file.fieldname + '-' + file.originalname);
    },
});

const fileFilter = (req, file, callback) => {
    const pattern = /jpg|png|svg/; // regex

    if (pattern.test(path.extname(file.originalname))) {
        callback(null, true);
    } else {
        callback('Error: not a valid file');
    }
};

// initialize multer
const upload = multer({
    storage: storageEngine,
    fileFilter,
});

module.exports = upload;
