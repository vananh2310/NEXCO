
var ctrTab = function() {
	var href;
	$('.block-tab li a').not('focus').on('click', function(event) {
		event.preventDefault();
		href = $(this).attr('href');
		if(!$(this).hasClass('focus')) {
			$('.block-tab li a').removeClass('focus');
			$(this).addClass('focus');
			$('.tab').removeClass('show animated');
			$(href).addClass('show');
		}
	})
}
$(function() {
	ctrTab();
})