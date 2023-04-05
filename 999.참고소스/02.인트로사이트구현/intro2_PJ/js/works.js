$(function(){//jQB////////////////////////
		//이미지 설명글 배열에 셋팅
		var msg = [
			"고귀하고 엘레강스한 여자",
			"시크하고 도도한 여자",
			"여신같고 신비로운 여자",
			"환상속에 꿈을 꾸는 여자",
			"고풍스런 미를 지닌 여자"
		];
		
		
		
		// 포토박스 html생성 및 초기화 , 캡션글 셋팅
		for(var i=0; i<5; i++){
			$("#gallery").append('<div class="photobox"><img src="images/works/wj'+(i+1)+'.jpg" alt="패션"><div class="cover"></div><div class="txtbg"></div><div class="txt">'+msg[i]+'</div></div>')
		}///for문///
		
		
		
		
		/////포토박스에 마우스 오버시 이미지 효과 변경///
		$(".photobox").hover(
			function(){//over
				$(this).find("div").eq(0).stop().fadeOut(200);
				$(this).find("div").eq(1).stop()
					.animate({top:"60%"},300);//글자배경
				$(this).find("div").eq(2).stop()
					.animate({top:"70%"},300);//글자
			},
			function(){//out
				$(this).find("div").eq(0).fadeIn(200);
				$(this).find("div").eq(1).stop()
					.animate({top:"100%"},300);//글자배경
				$(this).find("div").eq(2).stop()
					.animate({top:"100%"},300);//글자
			});//hover///
		
		/////// 개별 포토박스를 클릭하면 큰 이미지 보이기///
		$(".photobox").click(function(){
			//배경보이기
			$("#dpbg").fadeIn(300);
			//이미지 박스 보이기
			var tg = $("img",this).attr("src");//클릭된 img src
			//alert(tg);
			$("#dpbox").html("<img src='"+tg+"' alt='big'>")
			.fadeIn(300);
		});///click/////
		
		/////닫기 버튼////
		$(".cbtn").click(function(){
			$("#dpbg, #dpbox").fadeOut(300);
		});///click///
		////닫기 버튼 오버시 회전////
		$(".cbtn").hover(
			function(){//over
				$(this).animate({rotate:"-90deg"},200);
			},
			function(){//out
				$(this).animate({rotate:"0deg"},200);
			});//hover
		
		//////다음, 이전 버튼 클릭시 이미지 순번 변경하기////
		$(".abtn").click(function(){
			var idx = $(this).index();
			var csrc = $("#dpbox img").attr("src");
			csrc = csrc.split("/")[2].split(".")[0].substr(2);//이미지번호만
			csrc = Number(csrc);//숫자화함(계산해야하니까)
//			alert(csrc);
			if(idx==1){//왼쪽버튼
				csrc--;
				if(csrc==0)csrc=5;//한계수
			}//if///
			else if(idx==2){//오른쪽 버튼
				csrc++;
				if(csrc==6)csrc=1;//한계수
			}///else if///
			
			//이미지 변경하여 넣어주기
			$("#dpbox")
			.html("<img src='images/works/wj"+csrc+".jpg' alt='big'>");
			
			
		});///click////
		
		
		
		
		
		
		
		
	});//jQb//////////////////////////////////