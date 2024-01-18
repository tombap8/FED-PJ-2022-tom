const express = require('express');
const path = require('path');
const app = express();

const multer = require("multer");
const storage = multer.diskStorage({
  destination: "/upload/",
  filename: function(req, file, cb) {
    cb(null, "imgfile" + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 }
  });

app.listen(8080, function () {
  console.log('listening on 8080')
}); 

app.use(express.static(path.join(__dirname, '/build')));

app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname, '/build/index.html'));
});

app.post("/upload", upload.single("img"), function(req, res, next) {
    res.send({
      fileName: req.file.filename
    });
  });