# Documentation
The how to's for the video plugin

<b>Installation:</b> <br />
Include Jquery version 1.11 or higher<br />
Include the EmbedVideo.js script<br />

<b>Initialization:</b><br />
To run this plugin, simply use the following command:<br />
<code>$('VideoElement').EmbedVideo({ videoID: "THE_VIDEO_ID", year: "0000" });</code>
<br />

## Defaults:<br />

<code>BaseUrl: "http://www.CurentDomain.com", </code><br />
<code>returnUrl: "http://www.CurentDomain.com/The/Page/Frame/Is/On", </code><br />
<code>videoID: "", </code><br />
<code>year: "", </code><br />
<code>brand: false, </code><br />
<code>PlayButton: true, </code><br />
<code>forceplayer: false,</code><br />
<code>sharing: true,</code><br />
<code>size: "default",</code><br />
<code>width: "",</code><br />
<code>height: "",</code><br />
<code>fullscreen: true,</code><br />
<code>error: false,</code><br />
<code>error_msg: false,</code><br />
<code>gatracker: true,</code><br />
<code>id: '',</code><br />
<code>scrollTo: '',</code><br />
<code>gatracker: true,</code><br />
<code>connectType: 'http',</code><br />
<code>data: false,</code><br />
<code>template: '',</code><br />
<code>filter: '',</code><br />
<code>debug: false,</code><br />
<code>cuePoints: [],</code><br />

<code>load_done   : function(ui) {},</code><br />
<code>load_fail   : function(ui) {},</code><br />
<code>onPlay      : function(ui) {},</code><br />
<code>onPause     : function(ui) {},</code><br />
<code>onResume    : function(ui) {},</code><br />
<code>onDone      : function(ui) {},</code><br />
<code>onCuepoint  : function(clip, point, ui) {}</code><br />


 



## The Breakdown:<br />

<code>BaseUrl: "http://www.CurentDomain.com", </code><br />
This should be set to whatever domain you are hosted on. <i>If left empty this will auto set</i><br /><br />

<code>returnUrl: "http://www.CurentDomain.com/The/Page/Frame/Is/On", </code><br />
This should be set to the page where the video is embedded but you can change it to share any page you like. <i>If left empty this will auto set</i><br /><br />

<code>videoID: "#########", </code><br />
This is a required field. Here is were you select the video to be played.<br /><br />

<code>year: "2015", </code><br />
This is a required field. Here is were you select the video year/dir the video json is stores<br /><br />

<code>brand: false, </code><br />
Branding is automatically disabled when the video is on your sites, but enables when embedded on a external site. Set this to <b>true</b> for branding to display locally.<br /><br />

<code>PlayButton: true, </code><br />
If the Video poster has a play button set this to <code>false</code>.<br /><br />

<code>forceplayer: false,</code><br />
If you wish you force the HTML5 player use <code>HTML5</code><br />
If you wish you force the Flash player use <code>flash</code><br /><br />

<code>sharing: true,</code><br />
To display the social buttons leave set to <code>true</code><br />
To hide the social buttons change to <code>false</code><br />
To show the compact social buttons change to <code>compact</code><br /><br />

<code>size: "default", "large", "medium", "small"</code><br />
The size control sets a preset width and height to keep the video in the correct dimensions. This is the preferred way to set the width and height.
<br />
<code>"default": w=631px, h=356px</code>
<code>"large": w=1000px, h=563px</code>
<code>"medium": w=300px, h=169px</code>
<code>"small": w=213px, h=120px</code>

<br />

<code>gatracker: true,</code><br />
Allows Google to track video Events<br />

<code>scrollTo: '',</code><br />
Spot on screen to scroll to<br />

<code>data: false,</code><br />
Does not show a video but creates a textbox with all the video json<br />

<code>template: '',</code><br />
Used with CSS to display the video<br />

<code>filter: '',</code><br />
Seperated with cammas (,) add tags, filter: 'tag1, tag2, tag3' this can be used to pull multiple videos as a playlist (NOTE this can not be used in the same function as a single video)<br />

<code>debug: false,</code><br />
Set to true to allow console logging<br />

<code>cuePoints: [],</code><br />
An array of seconds in ms, these will be used to fire a function on each cue<br />

<code>onCuepoint: function(clip, point, ui) {}</code><br />
Is fired on each <code>cuePoints</code><br />

<code>onPlay: function(ui) {},}</code><br />
Is fired when the video is played<br />

<code>onPause: function(ui) {},}</code><br />
Is fired when the video is paused<br />

<code>onResume: function(ui) {},}</code><br />
Is fired when the video is paused<br />

<code>onPause: function(ui) {},}</code><br />
Is fired when the video is resumed after pause<br />

<code>onDone: function(ui) {},}</code><br />
Is fired when the video is finnished<br />

<code>load_done: function(ui) {},}</code><br />
Is fired when the video had finnished loading<br />

<code>load_fail: function(ui) {},}</code><br />
Is fired if the video fails to load<br />

## Using On screen links with Cue Points:<br />
when building a embed function use the following to add on screen links<br />

<code>
cuePoints: [1000, 2000, 3000],<br /><br />
		onCuepoint: function (clip, point, ui) {<br />
		 $.fn.EmbedVideo.EmbedVideoAds(ui, 'LINK_POSITION', 'IMAGE_URL', 'LINK_URL', DISPLAY_TIME_MS);<br />	
		}<br />
}
</code>
<br />
<code>cuePoints: [AN ARRAY OF POINT TO FIRE THIS FUNCTION]</code><br />

<code>clip: All the data on the video in frame</code><br />
<code>point: This is the current cuePoint being fired. can be used with an if statment to show other links</code><br />
<code>ui: This is passed from the function and is used to tell the Link what video to display on.</code><br />
<code>LINK_POSITION: left bottom, center bottom, right bottom, left top, center top, right top, center center, left center, right center</code><br />
<code>IMAGE_URL: url to the image in link</code><br />
<code>LINK_URLL: where the link will lead to</code><br />
<code>DISPLAY_TIME_MS: time in  milliseconds that link will be displayed.</code><br />




## Error Codes:<br />
Call an error by using <code>ErrorCode(errorCode);</code>

#### Server Errors:<br />
<code>400: "We're sorry but a bad request has been sent."</code><br />
<code>404: "We're sorry but this video was not found."</code><br />
<code>403: "We're sorry but this video is Forbidden."</code><br />
<code>405: "The method specified in the request is not allowed."</code><br />
<code>408: "The server timed out waiting for the request."</code><br />
<code>500: "We're sorry but there has been a server error."</code><br />
<code>504: "The gateway seems to have timed out."</code><br />
<code>505: "The server doesn't support the HTTP protocol version used in the request."</code><br />

#### Plugin Errors:<br />
<code>size: "These video dimensions are unsupported."</code><br />
<code>vpw: "Could not determine window width."</code><br />
<code>vph: "Could not determine window height."</code><br />
<code>rurl: "We could not find a return url."</code><br />
<code>VPF: "We're sorry but the video could not load."</code><br />
<code>src: "It appears there is no video source attached."</code><br />
