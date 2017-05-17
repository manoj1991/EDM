
// jQuery.noConflict();
(function($) {
	$(function() {
		$(document).ready(function(){

				(function()
				{
				    var scrollWin = function (selector)
				    {
				    $('html, body').animate({scrollTop: $(selector).offset().top-45}, 500);
				    
				    }
				     
				    $("[href^=#]").click(function(e) 
				    {
				    scrollWin ($(this).attr("href"));
				    return false;
				    });


				})();

		$('div.sidbar ul.menu li a').each(function(){

      	var b=$(this).attr('href');
      	var btop= $(b).offset().top;
      	var h= $(b).height();
      	var c= $(this);
      	$(window).scroll(function(){
	        var tops= window.pageYOffset;
	       
	         if(tops>btop-150 && tops<btop+h-150){
	          c.addClass('active').parent().siblings().children().removeClass('active');
	        }
	       
      	});
      })

		});
	});
})(jQuery);
