import multer from "multer";

const storage = multer.memoryStorage(); // file stored in buffer

const upload = multer({ storage });

export default upload;
