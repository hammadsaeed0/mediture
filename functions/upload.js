// const multer = require("multer");

// let path = "";
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         if (req.query.path) {
//             path = req.query.path;
//         }
//         // console.log(req.files);
//         cb(null, "public/uploads/" + path);
//     },
//     filename: function (req, file, cb) {
//         newFileName = new Date().toISOString().replace(/:/g, '-') + file.originalname;
//         cb(null, newFileName);
//         newFileName = "/uploads/" + path + "/" + newFileName;
//     },
//     fileFilter: function (req, file, cb) {

//     }
// });


// const upload = multer({
//     storage: storage
// });

// module.exports = {
//     upload,
//     // multipleUpload
// }




const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
    cloud_name: "dwudclzri",
    api_key: "932422657163832",
    api_secret: "2qNoE1TDe-v0v3rCrlHI3Bf9424"
});
const folder = "uploads";

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder,
        format: async (req, file) => 'auto', // You can change the file format here.
        public_id: function (req, file) {
            const newFileName2 = `${Date.now()}-${file.originalname}`;
            return newFileName2;
        }
    }
});
// file.original =
const upload = multer({ storage: storage });

const uploadCompressed = multer();
module.exports = {
    upload,
    // multipleUpload
    cloudinary,
    uploadCompressed
}
