
//Version 1.0
(function ( $ ) {
 
$.fn.EmbedVideo = function( options ) {

    var defaults = $.extend({
        BaseUrl: "http://"+document.domain+"",
		returnUrl: window.location.href,
		videoID: "123456789",
		brand: "false",
		poster: "",
		playBtn: "true",
		forceplayer: "false",
		sharing: "true",
		width: "631px",
		height: "356px",
    }, options );

	var FrameURL = ''+defaults.BaseUrl+'/embed/?watch='+defaults.videoID+'&return='+defaults.returnUrl+'';
	
	if(defaults.sharing !== 'true'){
		FrameURL += '&sharing='+defaults.sharing+'';
	}
	
	if(defaults.poster !== ''){
		FrameURL += '&poster='+defaults.poster+'';
	}
	
	if(defaults.forceplayer !== 'false'){
		FrameURL += '&forceplayer='+defaults.forceplayer+'';
	}
	
	if(defaults.brand !== 'false'){
		FrameURL += '&brand='+defaults.brand+'';
	}
		
	$('<iframe />', {
		src: FrameURL,
		width: defaults.width,
		height: defaults.height,
		frameborder: '0',
		scrolling: 'no',
		webkitallowfullscreen: 'true',
		mozallowfullscreen: 'true',
		mozallowfullscreen: 'true'
	}).appendTo(this);


};
 
}( jQuery ));  
