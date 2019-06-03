//Cufon Text
Cufon.replace('.news-pointer',{fontFamily:'Arial',color: '-linear-gradient(#aba584, #88815a)'});

//Carousel Callback
function mycarousel_initCallback(carousel) {
	$('#up').bind('click', function() {
        carousel.next();
        return false;
    });

    $('#down').bind('click', function() {
        carousel.prev();
        return false;
    });

}

$(function(){
	
	//PNG fix for IE6
	if($.browser.msie && $.browser.version.substr(0,1) == 6){
		DD_belatedPNG.fix('#navigation, #footer');
	}
	
	//Carousel
	$('#slider .content ul').jcarousel({
		auto: 5,
		wrap: "both",
		vertical: true,
		scroll: 1,
		visible: 1,
		initCallback: mycarousel_initCallback,
        buttonNextHTML: null,
        buttonPrevHTML: null
	});
	
});