function moveFn() {
  const slidewrap = $(".new-item-list");
  let sc_sts = 0;
  let lpos = 0;
  let call_sts = 1;
  let callT;
  const startTop = slidewrap.offset().top - $(window).height();

  function moveList() {
    lpos--;
    if(lpos < -262) {
      lpos = 0;
      slidewrap.append(slidewrap.find("li").first());
    }

    slidewrap.css({
      left: lpos + "px",
    });

    if(call_sts) callT = setTimeout(moveList, 40);
  }

  slidewrap.hover(
    function(){
      call_sts = 0;
    }
    ,function(){
      call_sts = 1;
      moveList();
    }
  );
} 

moveFn();