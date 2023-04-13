<?php
################################################
########## INSERT 처리 페이지 ####################
################################################

/// POST방식으로 넘어온 데이터를 php에서 받아서 처리한다!!!
// $_POST[폼요소의 name값] -> post방식으로 넘어온 값을 받는다!

$dname = $_POST["dname"];
$actors = $_POST["actors"];
$broad = $_POST["broad"];
$gubun = $_POST["gubun"];
$stime = $_POST["stime"];
$total = $_POST["total"];

//echo "1.드라마명: $dname<br>2.주연: $actors<br>3.제작사: $broad<br>4.구분: $gubun<br>5.방영시간: $stime<br>6.방영횟수: $total";

// 1. DB연결문자열 불러오기
include "../DBconn.inc";

// 2. 입력쿼리 만들기
// INSERT INTO 테이블명 (필드명) VALUES (값)

// 성공여부변수
$insSts;

// 쿼리변수
$sql = "INSERT INTO `drama_info`".
"(`dname`,`actors`,`broad`,`gubun`,`stime`,`total`)".
"VALUES".
"('$dname','$actors','$broad','$gubun','$stime','$total')";

//echo $sql;

// 3. 쿼리문 DB에 던지기~!
// 이것은 select가 아니라 insert이기 때문에 입력성공여부만 알면된다!
// $insSts변수에 담는다!
$insSts = $conn->query($sql);
// 연결객체에서 query()메서드로 쿼리를 날린다~!!!!

// 4. 결과검증하기!
if($insSts){
    echo '
        <script>
            alert("성공적으로 테이블에 레코드가 입력되었습니다!");
            location.replace("../dramaTable.php");
        </script>
    ';
} /////// if ///////////////
else{ // 입력실패시 $conn->error로 에러 메시지띄우기 ///
    echo $conn->error;
} ////// else //////////////




?>