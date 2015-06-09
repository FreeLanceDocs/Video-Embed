// Video Embed Script
// Buidt by: Josh Ferguson & Eric Higdon
// June 8th 2015 Video Embed 
// Version 1.2
// Documentation at: https://github.com/PensacolaChristianCollege/Video-Embed/blob/master/Documentation.md
(function ( $ ) {
 
$.fn.EmbedVideo = function( options ) {

    var defaults = $.extend({
        BaseUrl: "http://"+document.domain+"",
		returnUrl: window.location.href,
		videoID: "",
		brand: "false",
		PlayButton: "",
		forceplayer: "false",
		sharing: "true",
		width: "631px",
		height: "356px",
		size: "Large",
		error: "false"
    }, options );
    
    // Get Target element
	var SelectedElement = $(this).attr("id");
	if(!SelectedElement){ SelectedElement = $(this).attr("class"); }
    
    // sets the width if using the size controler.
    if(defaults.size == 'Large'){ defaults.width = '631px'; defaults.height = '356px'; }
    else if(defaults.size == 'Medium'){ defaults.width = '300px'; defaults.height = '169px'; }
    else if(defaults.size == 'Small'){ defaults.width = '213px'; defaults.height = '120px'; }

	// Creates the url to be sent to the embed file.
	var FrameURL = ''+defaults.BaseUrl+'/embed/?watch='+defaults.videoID+'&return='+defaults.returnUrl+'';
	
	// Checks id additional parameters need to be set.
	if(defaults.sharing !== 'true'){ FrameURL += '&sharing='+defaults.sharing+''; }
	if(defaults.PlayButton !== ''){ FrameURL += '&poster='+defaults.PlayButton+''; }
	if(defaults.forceplayer !== 'false'){ FrameURL += '&forceplayer='+defaults.forceplayer+''; }
	if(defaults.brand !== 'false'){ FrameURL += '&brand='+defaults.brand+''; }
	if(defaults.error !== 'false'){ FrameURL += '&error='+defaults.error+''; }
	
	// Builds the iframe to house the video.	
	if(
	
		$('<iframe />', {
			id: "EmbedVideo"+SelectedElement+"",
			src: FrameURL,
			width: defaults.width,
			height: defaults.height,
			frameborder: '0',
			scrolling: 'no',
			webkitallowfullscreen: 'true',
			mozallowfullscreen: 'true',
			mozallowfullscreen: 'true',
		}).appendTo(this)
	
	){
		// If finished will log.
		$("#EmbedVideo"+SelectedElement+"").load(function(){ console.log(""+SelectedElement+" Finished."); });
	}else{
		// If failed will log.
		$("#EmbedVideo"+SelectedElement+"").load(function(){ console.log(""+SelectedElement+" Failed to Load."); });
	}



};
 
}( jQuery ));  
