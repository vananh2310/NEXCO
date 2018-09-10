//$('#menu').load('../../Front_end/Project-07062018/nav-menu.html');

$(document).ready(function(){
    $('.btn-menu').on('click', function() {
    	$(this).toggleClass('open');
    	$('.main-menu .menu-bottom').slideToggle(500);
    });
});

// var click_menu = function() {
// 	var catch_content;
// 	$('.list-nav .item-nav').not('active').on('click', function(event) {
// 		event.preventDefault();
// 		catch_content = $(this).attr('href');
// 		if(!$(this).hasClass('acitve')) {
// 			$('.list-nav .item-nav').removeClass('active');
// 			$(this).addClass('active');
// 		}
// 	});
// }
// $(function() {
// 	click_menu();
// })


// $(window).on('load', function () {
// 	var href = window.location.pathname;

// 	$('.list-nav .item-nav a').each(function() {
// 	    if($(this).attr('href').replace(href, '') == '') {
// 	       	$(this).parent().addClass('active');
// 	    }
// 	});
// });



