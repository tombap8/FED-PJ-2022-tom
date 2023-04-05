// JavaScript Document
/*window.onload=function(){
	setTimeout("loading(0)",1000);
	setTimeout("loading(1)",1000);
	setTimeout("loading(2)",1000);
	setTimeout("loading(3)",1000);
	setTimeout("loading(4)",1000);
	setTimeout("loading(5)",1000);
	}*/

var scNum=0; //페이지번호
$(window).load(function(){
	scNum=0;//초기화
	$("html,body").animate({scrollTop:"0"},400);
});

var sts=0, sts2=0, sts3=0, sts4=0;
$(window).scroll(function(){
	//scrollTop값을 알아야함 -> 스크롤바 트랙 상단에서 스크롤바 맨위까지의 거리
	//scrollLeft값 -> 아래쪽 스크롤바 트랙 왼쪽부터 왼쪽 끝까지의 거리
	var currT=$(window).scrollTop();
	//console.log(currT);
	
	//각페이지 높이값
	var Home=$("#Home").offset().top;//1
	var About=$("#About").offset().top;//2
	var Skill=$("#Skill").offset().top;//3
	var Portfolio=$("#Portfolio").offset().top;//4
	var Contact=$("#Contact").offset().top;//5
	
	//2번페이지랑 3번페이지 사이에 올 때 액션주기
	if(currT>=Home&&currT<About){
		//문막기!
		if(sts==1)return false;//돌아갓!
		sts=1;
			$("#About .content aside").delay(800).animate({"top":"10%"},700,"easeOutExpo",function(){
			$("#About .content>article").eq(0).animate({"right":"5%"},700,"easeOutExpo");
			$("#About .content>article").eq(1).animate({"left":"5%"},700,"easeOutExpo");
		});
	}
	//3번페이지랑 4번페이지 사이에 올 때 액션주기
	else if(currT>=About&&currT<Skill&&scNum==2){
	//문막기!
		if(sts2==1)return false;//돌아갓!
		sts2=1;
	setTimeout("loading(0)",1000);
	setTimeout("loading(1)",1000);
	setTimeout("loading(2)",1000);
	setTimeout("loading(3)",1000);
	setTimeout("loading(4)",1000);
	setTimeout("loading(5)",1000);
	}
	//4번페이지랑 5번페이지 사이에 올 때 액션주기
	/*else if(currT>=black){
	//문막기!
		if(sts3==1)return false;//돌아갓!
		sts3=1;
		
		$("#black").append("<div id='act3'>Coding is Wonderful</div>");
		$("#act3").css({"position":"absolute","width":"80%","top":"50%","left":"-100%","transform":"translate(-50%,-50%)",font:"bold 72px/100px verdana",color:"hotpink","text-align":"center"})
		.animate({"left":"50%"},500);
	}*/
});//scroll



$(document).ready(function(e) {
	$("#center>p, #center>div, #center>h3").hide();
	$("#center>aside").delay(100).animate({"top":"150px"},700,"easeOutExpo",function(){
		$("#center>p").fadeIn(1000);
		$("#center>div").fadeIn(1000);
		$("#center>h3").fadeIn(1000);
	});
	/*$("#center>div>img").click(function(){
		var about =$("#About").offset().top
		$(window).scrollTop($("#About").offset().top)
	});	*/
	/*$("#center>div").click(function(){
		$("#center>div>img").animate({"transform":"rotate(360deg)"},300);
	});*/
	//큐브 돌아가게
	setInterval(function(){
		var cclass=["show-front", "show-back ","show-right","show-left","show-top","show-bottom"]
		var num=Math.floor(Math.random()*6);
		//console.log(num);
		$("#cube").removeClass().addClass(cclass[num]);
	},2000);
	
	
	
	//메뉴 클릭했을 때 페이지 이동
    $("nav>ul>li>a").click(function(e){
		e.preventDefault(); //기본이동 막기
		var cp = $(this).attr("href");
		var idx = $(this).parent().index();
		//alert(idx);
		scNum = idx;//클릭해서 이동할 경우 전역페이지번호 일치!!!
		//console.log(cp);
		
		//메뉴색 변경
		$("nav>ul>li>a").css("opacity","1");
		$(this).css("opacity","0");
		
		var tp = $(cp).offset().top;
		$("html, body").stop().animate({
			scrollTop:tp+"px"
		},1000,"easeOutBack");
		
	});//click
	
	
	//*********자동스크롤
	var psts=0; //0은 스크롤 안함, 1은 스크롤중
	var mousewheelEvt=(/firefox/i.test(navigator.userAgent)?"DOMMouseScroll":"mousewheel");
		$("#wrap").on(mousewheelEvt,function(e){
			e.preventDefault();
			
			if(psts==1)return false;
			psts=1; //스크롤 중
			
			var evt = window.event || e; 
			var delta=evt.detail?evt.detail:evt.wheelDelta ;
			if( /Firefox/i.test(navigator.userAgent))delta=-evt.originalEvent.detail;
			
			
			if(delta>0){//윗방향
				scNum--;
				if(scNum==-1)scNum=0; //한계페이지고정
				//console.log(scNum);
			}
			else{
				scNum++;
				if(scNum==5)scNum=4;
				//console.log(scNum);
			}
			
			//메뉴색 변경
			$("nav>ul>li>a").css("opacity","1");
			$("nav>ul>li>a").eq(scNum).css("opacity","0");
			
			$("html, body").animate({
				scrollTop:$("#wrap>article").eq(scNum).offset().top+"px"
				},1000,"easeOutExpo",function(){//스크롤 애니메이션 끝난후
				psts=0;
			});//animate
			
		});//스크롤이벤트
		
		
		$(".site>li>div").click(function(){
			var idx = $(this).parent().index();
			console.log(idx);
		});
		
		$("#port li").hover(function(){
			
		},function(){});
		
});//jQb



	var num = [80,70,90,90,60,70];
	var startNum = [0,0,0,0,0,0];
function loading(seq){	
	startNum[seq]++;
	//if(seq==0)console.log(pers+"/");
		$(".site>li:eq("+seq+")>div").css({"width":startNum[seq]+"%"});
		$(".site>li:eq("+seq+")>div").find("h6").html(startNum[seq]+"%");
		if(startNum[seq]<num[seq])
		{
			setTimeout("loading("+seq+")",30);
		}
}
	
	