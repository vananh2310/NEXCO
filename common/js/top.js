$(document).ready(function(){
	$('.header').slick({
		dots: false,
	  	infinite: true, //vong lap
	  	speed: 500,
	  	fade: true, //hieu ung mo
	  	cssEase: 'linear',
	  	arrows: false,
	  	autoplay: true,
	  	autoplaySpeed: 1500
	});
});

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var ytPlayer = [];
var status = [];
var ytData = [
    {
        id: '4f5KuRXtjeE', //id video
        area: 'player', //khu vuc bo video
    }, {
        id: '4f5KuRXtjeE',
        area: 'player-02',
    }, 
];

function onYouTubeIframeAPIReady() {
    for (var i = 0; i < ytData.length; i++) {
        ytPlayer[i] = new YT.Player(ytData[i]['area'], {
            videoId: ytData[i]['id'],
            playerVars: {
                rel: 0,
                playsinline: 1,
            },
            events: {
                'onReady': function(event) {
                    $('.thumb').each(function(i) { //thumb: lop mask de len ytb
                        $(this).on('click', function() {
                            $(this).css({
                                'visibility': 'hidden',
                                'opacity': 0
                            });
                            ytPlayer[i].playVideo();
                        });
                    });
                }
            }
        });
    }
}

