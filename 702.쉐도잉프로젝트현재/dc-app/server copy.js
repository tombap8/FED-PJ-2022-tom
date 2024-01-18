const express = require('express');
const path = require('path');
const app = express();

const multer = require('multer');

const upload = multer({ dest: 'build/uploads/' });
app.post('/upload', upload.single('file'), (req, res) => {
  console.log(req.file);
});

// const fileFilter = (req, file, cb) => {
//   // mime type 체크하여 원하는 타입만 필터링
//   if (file.mimetype == "video/mp4") {
//     cb(null, true);
//   } else {
//     cb({ msg: "mp4 파일만 업로드 가능합니다." }, false);
//   }
// };


// const multer = require('multer');
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, '/build/uploads/');
//   },
//   filename: (req, file, cb) => {
//     const newFileName = file.originalname;
//     cb(null, newFileName);
//   }
// });
// const upload = multer({ storage: storage });
// app.post('/upload', upload.single('file'), (req, res) => {
//   console.log(req.file);
// });

// const multer = require("multer");
// const storage = multer.diskStorage({
//   destination: "/upload/",
//   filename: function(req, file, cb) {
//     cb(null, "imgfile" + Date.now() + path.extname(file.originalname));
//   }
// });

// const upload = multer({
//     storage: storage,
//     limits: { fileSize: 1000000 }
//   });

app.listen(8080, function () {
  console.log('listening on 8080')
}); 

app.use(express.static(path.join(__dirname, '/build')));

app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname, '/build/index.html'));
});

// app.post("/upload", upload.single("img"), function(req, res, next) {
//     res.send({
//       fileName: req.file.filename
//     });
//   });

  