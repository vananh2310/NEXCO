
$(document).ready(function () {
	if($('#slide-01 .photo').length > 1) {
		$('#slide-01').slick({
			autoplay: true,
			centerMode: true,
			arrows: false,
		  	infinite: true,
		  	slidesToShow: 1,
		  	variableWidth: true,
		  	dots: true,
		  	focusOnSelect: true
		});
	}
});