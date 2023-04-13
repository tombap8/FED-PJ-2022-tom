<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>회원권한 수정하기</title>
    <style>
        body{
            text-align: center;
            font-size: 20px;
        }
        
        label{
            display: block;
            margin-top: 15px;
        }
        
        input, select{
            font-size: 20px;
        }
    </style>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script>
    $(function(){ /// jQB //////////////////
        $("#sbtn").click(function(e){
            
            // 전송기능막기!
            e.preventDefault();
            
            // 각 항목이 비었는지 검사하기
            let res=true;//검사결과
            // 흰손수건의 법칙! 한번만 false여도 false!
            
            $("input[type=text]").each(
                function(idx,ele){
                //console.log("순번:"+idx);
                    
                // 각 입력양식 값이 빈값여부체크
                if($(ele).val().trim()==="") 
                    res = false;
                                        
            });////// each /////////
            
            console.log("검사결과:"+res);
            
            /// 검사결과 모든 항목이 통과면 서브밋하기
            if(res){
                $("#dform").submit();
                // 서브밋하면 form요소에 action속성에 지정된 
                // 페이지로 데이터와 함께 이동한다!
                // 서브밋(submit)은 "데이터 전송"의 의미를 가짐!
            }/////// if //////////
            /// 불통과시 메시지 보이기 /////
            else{
                alert("모든항목이 필수입니다!");
            }/////// else ////////////
            
            
        });////// click //////////////
       
        
        /// 리스트로 돌아가기 버튼 //////
        $("#lbtn").click(function(){
            history.back();
            //이전 페이지로 돌아가기
            // 좀전에 보던 리스트 페이지로 가야함!
        });////////// click ////////////////
        ////////////////////////////////////
        
        
        
    });////////// jQB //////////////////////
    </script>
</head>
<body>
   <h1>회원권한 수정하기</h1>
   
   <?php 
        # 수정할 레코드는 GET방식으로 URL을 통해 전달된 키=값 쌍이다!
        # PHP에서 GET방식의 값을 받는 방법은 
        # $_GET[키이름]
        # 그리고 URL로 전달하지 않는 경우는 돌아가도록 처리
    
        # GET방식으로 특정키가 있는지 여부를 조사하는 메서드는?
        # isset(변수) - 변수에 할당되었으면 1을 리턴한다!
        # 이것을 if문에 사용하면 에러를 방지할 수 있다!
    
        # num 키가 있으면 처리!!!
        if(isset($_GET["num"])){ 
        
            // 1. DB연결 문자열 불러오기
            include "DBconn.inc";

            /// 2. 해당 테이블 데이터 불러오는 쿼리문 만들기
            # 쿼리문은 DB에서 직접확인한다!!!
            $sql = "SELECT * FROM `member` WHERE `idx`=".
                $_GET["num"];

            /// 3. 쿼리문을 DB에 실행 후 결과를 가져온다!
            $res = $conn->query($sql);            
            
            /// 4. 만약 데이터가 없으면 다시 돌아감!
            if($res -> num_rows === 0){
                echo '
                    <script>
                        location.href = "index.php";
                    </script>
                ';
            } ////// if ////////////////////////
            
            /// 5. 실행된 쿼리 결과집합에서 데이터 가져오기
            $row = $res -> fetch_assoc();
            // (데이터를) 뺏지! 어서! 
            // -> fetch_assoc() 컬럼명으로 가져옴!
            
            
        } /////////////// if ///////////////////
        
        # 없으면 돌아가! JS로 처리하여 되돌아감!
        else{
            echo '
                <script>
                    location.href = "index.php";
                </script>
            ';
        } /////////// else ///////////////////
    
        
     // 성별코드 글자표시변경
    $gen = 
        $row["gen"]==="m"?
        "남자" : "여자";
    // 3항연산자 -> 비?집:놀이동산;
    
    
    
    ?>
      
       <label for="mid">아이디</label>
       <input type="text" name="mid" id="mid" maxlength="100" value="<?=$row["mid"]?>" disabled>
       
       <label for="name">이름</label>
       <input type="text" name="name" id="name" maxlength="100" value="<?=$row["name"]?>" disabled>
       
       <label for="gen">성별</label>
       <input type="text" name="gen" id="gen" maxlength="50" value="<?=$gen?>" disabled>
       
       <label for="email">이메일</label>
       <input type="text" name="email" id="email" maxlength="10" value="<?=$row["email1"]?>@<?=$row["email2"]?>" disabled>
       
   <form action="process/mod.php" method="post" id="dform">
      <!--form요소로 싸고 있는 input요소의 값만 보낼 수 있다!-->
      
       <label for="auth">권한</label>
       <select name="auth" id="auth">
           <option value="S">최고관리자</option>
           <option value="A">관리자</option>
           <option value="M">일반회원</option>
       </select>
       
       <?php
        # 권한데이터값으로 select의 option선택변경하기!
        # 기존데이터값 변수에 넣기
        $auth = $row["auth"];
        
        # JS로 선택박스 선택값 변경하기
        echo "
            <script>
            
            $('#auth').val('$auth')
            .prop('selected',true);
            
            // prop(속성명,속성값)
            
            </script>
        ";
    
        ?>
       
       <!--히든필드!!! "idx"컬럼값 넣기(POST방식으로 함께보냄)-->
       <input type="hidden" name="num" id="num" value="<?=$_GET["num"]?>">
       
       <br><br>       
       <input type="submit" value="권한수정하기" id="sbtn">
       <!--
           form요소 내부의 submit버튼을 클릭하면
           form요소에 셋팅된 action속성의 페이지로
           전송된다!
       -->
       
       <br><br>
       <!--리스트로 돌아가기-->
       <input type="button" value="리스트로 돌아가기" id="lbtn">
   </form>
   
   
   
   
   
   
    
</body>
</html>