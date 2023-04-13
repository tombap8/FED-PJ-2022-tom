<?php

/// DB연결 문자열 ///
$servername = "localhost";//DB서버명
$username = "tombap8";//DB최고관리자권한
$password = "비번";//root에는 비번이 없음
$dbname = "tombap8";//사용DB명

/// DB서버와 연결하기 ///
$conn = new mysqli(
    $servername,$username,$password,$dbname);
// PHP의 DB연결 메서드
// mysqli(서버명,계정명,비번,DB명)

// mysqli메서드를 new키워드로 생성한 이유???
// - 서버의 메모리에 객체를 생성해서 DB서버와
// 연결하는 동안 상태를 유지해야한다!
// 따라서 이런 역할을 하는 객체는 메모리에
// 별도의 생성작업을 해야하는데 그것이 new키워드다!


// PHP에서 객체의 하위 속성이나 메서드로
// 들어가기 위해서 JS처럼 점(.)을 사용할 수 없다!
// 왜? 점(.)은 문자 더하기 연산자로 사용됨!
// 따라서 새로운 기호가 필요하게 되었다!
// 그것은 바로 -> 이것이 하위요소로 내려가는 기호임

// 아래의 예) $conn->connect_error
// mysqli 메서드에서 에러여부를 리턴해주는 속성임!
// true가 나오면 에러상태임! (에러메시지 포함!)

if ($conn->connect_error){
    die("DB연결에 실패하였습니다! : ".
       $conn->connect_error);
        //에러일 경우 die() 메서드 사용함
        // die() 메서드는 연결을 종료(죽음die)
        // 후 메시지를 출력할 수 있다!
} ///////// if문 /////////////
else{
    //echo "연결성공!!!";
}

//// 한글깨짐 방지 ////////////////
$conn->query("set session character_set_connection=utf8;");
$conn->query("set session character_set_results=utf8;");
$conn->query("set session character_set_client=utf8;");
////////////////////////////////


?>