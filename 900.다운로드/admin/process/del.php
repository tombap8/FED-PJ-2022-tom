<?php
################################################
########## DELETE 처리 페이지 ####################
################################################

/// GET방식으로 넘어온 데이터를 php에서 받아서 처리한다!!!

$num = $_GET["num"];

//echo "1.드라마명: $dname<br>2.주연: $actors<br>3.제작사: $broad<br>4.구분: $gubun<br>5.방영시간: $stime<br>6.방영횟수: $total";

// 1. DB연결문자열 불러오기
include "../DBconn.inc";

// 2. 입력쿼리 만들기
// DELETE FROM 테이블명 WHERE `idx`=값

// 성공여부변수
$insSts;

// 쿼리변수
// DB에서 직접 검증한다!!!
$sql = "DELETE FROM `drama_info` ".
    "WHERE `idx`=".$num;


echo $sql;

// 3. 쿼리문 DB에 던지기~!
// 이것은 select가 아니라 insert이기 때문에 입력성공여부만 알면된다!
// $insSts변수에 담는다!
$insSts = $conn->query($sql);
// 연결객체에서 query()메서드로 쿼리를 날린다~!!!!

// 4. 결과검증하기!
if($insSts){
    echo '
        <script>
            alert("성공적으로 테이블의 레코드가 삭제되었습니다!");
            location.replace("../dramaTable.php");
        </script>
    ';
} /////// if ///////////////
else{ // 입력실패시 $conn->error로 에러 메시지띄우기 ///
    echo $conn->error;
} ////// else //////////////




?>