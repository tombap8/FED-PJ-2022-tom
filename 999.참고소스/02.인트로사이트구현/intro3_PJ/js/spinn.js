$(function() {

	//메인페이지 돌아가는 얼굴
  var img_x1, img_x2, img_y1, img_y2;

  function set_xy_img() {
   img_x1 = $('#container div').offset().left;
   img_x2 = $('#container div').offset().left + $('#container div').width();
   img_y1 = $('#container div').offset().top;
   img_y2 = $('#container div').offset().top + $('#container div').height();
  }

  set_xy_img();

  $(window).resize(function() {
   set_xy_img();
  });

  $(document).mousemove(function(e){
    $('#container div').removeAttr('class');

    // front image
    if (e.pageY > img_y1 && e.pageY < img_y2
   && e.pageX > img_x1 && e.pageX < img_x2) {
   $('#container div').addClass('front');
    }
    else
    // top image
    if (e.pageY < img_y1 && e.pageX > img_x1 && e.pageX < img_x2) {
   $('#container div').addClass('top');
    }
    else
    // bottom image
    if (e.pageY > img_y2 && e.pageX > img_x1 && e.pageX < img_x2) {
   $('#container div').addClass('bottom');
    }
    else
    // left image
    if (e.pageY > img_y1 && e.pageY < img_y2 && e.pageX < img_x1) {
   $('#container div').addClass('left');
    }
    else
    // right image
    if (e.pageY > img_y1 && e.pageY < img_y2 && e.pageX > img_x2) {
   $('#container div').addClass('right');
    }
    else
    // top left image
    if (e.pageY < img_y1 && e.pageX < img_x1) {
   $('#container div').addClass('top-left');
    }
    else
    // top right image
    if (e.pageY < img_y1 && e.pageX > img_x1) {
   $('#container div').addClass('top-right');
    }
    else
    // bottom left image
    if (e.pageY > img_y1 && e.pageX < img_x1) {
   $('#container div').addClass('bottom-left');
    }
    else
    // bottom right image
    if (e.pageY > img_y1 && e.pageX > img_x1) {
   $('#container div').addClass('bottom-right');
    }
    });

  //console.log($('#container div').offset());
  $('#container div').mouseover(function() {
   //$(this).removeAttr('class');
   //$(this).addClass('front');
   $("#section0 article").eq(0).hide();
   $("#section0 article").eq(1).show();
  });

  $('#container div').mouseout(function() {
   $(this).removeAttr('class');
   $(this).addClass('top');
   $("#section0 article").eq(1).hide();
   $("#section0 article").eq(0).show();
  });

  
  
 }); //jQb

// JavaScript Document