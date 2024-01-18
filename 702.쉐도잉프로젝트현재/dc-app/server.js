const express = require("express");
const multer = require("multer");
const path = require('path');
const static = require('serve-static');

const app = express();
//디스크 저장소에 대한 객체 생성하기
const storage = multer.diskStorage({//디스크 저장소의 정의
  destination: function(req, file, cb){
      cb(null, 'build/uploads/')    //파일이 저장될 위치 정의하기
  },
  filename: function(req, file, cb){  //파일명 지정하기
      //cb(null, file.originalname) //cb 콜백함수를 통해 전송된 파일 이름 설정

      cb(null, file.originalname); //시스템 시간으로 파일 이름 설정

      // cb(null, new Date().valueOf() + '`' + file.originalname); //시스템 시간으로 파일 이름 설정

      // cb(null, new Date().valueOf() + path.extname(file.originalname)); //시스템 시간으로 파일 이름 설정

      // "multer": "^1.4.4", 이 버전으로 설치해야 한글 안깨짐!
      // -> 그냥 npm i multer 로 설치하면 1.5버전깔림(한글깨짐)
  }
})


app.use(express.urlencoded({extended:true})); // url : Uniform Resource 
app.use(express.json());

app.listen(8080, () => {
    //3000번 포트로 서버 실행
    console.log("Server started. port 8080.");
});

app.use(express.static(path.join(__dirname, '/build')));

app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname, '/build/index.html'));
});


const upload = multer({storage: storage}); //multer 객체 생성

//클라이언트로 전송된 파일을 multer 모델을 사용하여 업로드 처리하기
app.post('/upload', upload.single('file'), function (req, res, next){
    console.log(req.file);
    console.log(req.body);
    
})