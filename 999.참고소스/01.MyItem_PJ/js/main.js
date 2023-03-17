// 메인페이지 JS - main.js //

$(function(){ /// jQB //////////////////////////
    
    /// 썸네일 이미지 클릭시 아이템 페이지로 이동하기 ///
    $(".thumbs a").click(function(){
        var idx = $(this).index(".thumbs a");
        console.log("아이템순번:"+idx);
        switch(idx){
            case 0: idx = "item.html?pno=1"; break;
            case 1: idx = "item.html?pno=3"; break;
            case 2: idx = "item.html?pno=6"; break;
            case 3: idx = "item.html?pno=5"; break;
            case 4: idx = "item.html?pno=4"; break;
        }////// switch case ////////////////////////
        
        /// 페이지 이동 ///
        location.href = idx;
        
    });//////// click /////////////////////
    ///////////////////////////////////////
    
    ///// 썸네일 이미지에 마우스 오버시 중앙이미지 변경하기 ////
    // 이벤트대상: .thumbs img
    // 이벤트종류: mouseenter
    // 변경대상: #mimg
    // 변경내용: 이미지 src변경, alt변경
    // 변경방법: 썸네일 이미지의 src와 alt를 읽어와서 
    //        src는 중간경로인 small을 없애고 큰 이미지에 셋팅한다!
    
    $(".thumbs img").mouseenter(function(){
        // 마우스 오버된 이미지의 src
        var isrc = $(this).attr("src");
        
        // 이미지 src에서 "small/"없애기
        // -> replace함수 -> 003.JS학습>JS007.html
        // replace(바꾸고싶은값, 바꿀값) 
        //- 변경할것이 하나이면 정규식을 안써도 된다!
        isrc = isrc.replace("small/","");
        
        // 마우스 오버된 이미지의 alt
        var ialt = $(this).attr("alt");
        
        console.log("읽어옴:"+isrc+"/"+ialt);
        
        // 변경대상에 반영하기!
        $("#mimg")
        .attr("src",isrc)
        .attr("alt",ialt);
        
        // attr(속성명) ->속성값 읽어오기
        // attr(속성명,속성값) ->속성값 변경하기
        
        
    });/////// mouseenter /////////////////
    
    
    
    
});//////////// jQB ////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////


