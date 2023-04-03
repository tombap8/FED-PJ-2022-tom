/*
* By Julien Gustin : http://www.julien-gustin.be
* contact@julien-gustin.be
* 16-03-2018
*/
(function($)
{
    $.fn.mousefollower=function(options)
    {
        var defauts =
        {
            followerSelector: ".badge"
        };

        var params = $.extend(defauts, options);
        return this.each(function(index, canvas)
        {
            if($(canvas).data('mousefollower') == true){
                return true;
            }
            var mouseX = 0, mouseY = 0, loop = null, xp=0, yp=0;
            $(canvas).mouseenter(function(e){
                clearInterval(loop);
                var $canvas = $(e.currentTarget);
                var offset = $canvas.offset();
                mouseX = e.pageX - offset.left;
                mouseY = e.pageY - offset.top;
                var follower = $(params.followerSelector, $canvas);
                xp = parseInt(follower.css('left'));
                yp = parseInt(follower.css('top'));
                loop = setInterval(function(){
                    xp += (mouseX  - xp) / 15;
                    yp += (mouseY - yp) / 15;
                    follower.css({left:xp, top:yp });
                }, 30);
            }).mousemove(function(e){
                var canvas = $(e.currentTarget);
                var offset = canvas.offset();
                var follower = $(params.followerSelector, canvas);
                var followerOffset = canvas.offset();

                mouseX = e.pageX - offset.left;
                mouseY = e.pageY - offset.top;

                // Check limit right
                if(mouseX + (follower.outerWidth() / 2) - 5 >= canvas.innerWidth()){
                    mouseX = canvas.innerWidth() - (follower.outerWidth() / 2) - 5;
                }
                // Check limit bottom
                if(mouseY + (follower.outerHeight() / 2) - 5 >= canvas.innerHeight()){
                    mouseY = canvas.innerHeight() - (follower.outerHeight() / 2) - 5;
                }
                // Check limit top
                if(mouseY - (follower.outerHeight() / 2) + 5 <= 0){
                    mouseY = (follower.outerHeight() / 2) + 5;
                }
                // Check limit left
                if(mouseX - (follower.outerWidth() / 2) + 5 <= 0){
                    mouseX = (follower.outerWidth() / 2) + 5;
                }
            }).mouseleave(function(e){
                clearInterval(loop);
                var canvas = $(e.currentTarget);
                var follower = $(params.followerSelector, canvas);
                mouseX = canvas.innerWidth() / 2;
                mouseY = canvas.innerHeight() / 2;
                loop = setInterval(function(){
                    xp += (mouseX - xp) / 20;
                    yp += (mouseY - yp) / 20;
                    follower.css({left:xp, top:yp });
                    if(mouseX == xp && mouseY == mouseY ){
                        clearInterval(loop);
                    }
                }, 30);
            }).data('mousefollower', true);
        });
    };
})(jQuery);
