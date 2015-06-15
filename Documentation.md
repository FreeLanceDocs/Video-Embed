# Documentation
The how to's for the video plugin

<b>Installation:</b> <br />
Include Jquery version 1.11 or higher<br />
Include the EmbedVideo.js script<br />

<b>Initialization:</b><br />
To run this plugin, simply use the following command:<br />
<code>$('VideoElement').EmbedVideo({ videoID: "THE_VIDEO_ID" });</code>
<br />

## Defaults:<br />

<code>BaseUrl: "http://www.CurentDomain.com", </code><br />
<code>returnUrl: "http://www.CurentDomain.com/The/Page/Frame/Is/On", </code><br />
<code>videoID: "", </code><br />
<code>brand: "false", </code><br />
<code>PlayButton: "ShowPlayBtn", </code><br />
<code>forceplayer: "false",</code><br />
<code>sharing: "true",</code><br />
<code>size: "default",</code><br />
<code>width: "",</code><br />
<code>height: "",</code><br />
<code>fullscreen: "true",</code><br />
<code>error: "false",</code><br />
<code>error_msg: ""</code><br />
 



## The Breakdown:<br />

<code>BaseUrl: "http://www.CurentDomain.com", </code><br />
This should be set to whatever domain you are hosted on. <i>If left empty this will auto set</i><br /><br />

<code>returnUrl: "http://www.CurentDomain.com/The/Page/Frame/Is/On", </code><br />
This should be set to the page where the video is embeded but you can change it to share any page you like. <i>If left empty this will auto set</i><br /><br />

<code>videoID: "#########", </code><br />
This is the only required field. Here is were you select the video to be played.<br /><br />

<code>brand: "false", </code><br />
Branding is automatically disabled when the video is on your sites, but enables when embedded on a external site. Set this to <b>true</b> for branding to display localy.<br /><br />

<code>PlayButton: "HidePlayBtn", </code><br />
If the Video poster has a play button set this to HidePlayBtn.<br /><br />

<code>playBtn: "true", </code><br />
Use to show play button or not.<br /><br />

<code>forceplayer: "false",</code><br />
If you wish yo foce the HTML5 player use <code>HTML5</code><br />
If you wish yo foce the Flash player use <code>flash</code><br /><br />

<code>sharing: "true",</code><br />
To display the social buttons leave set to <code>true</code><br />
To hide the social buttons change to <code>false</code><br />
To show the compact social buttons change to <code>compact</code><br /><br />

<code>size: "default", "large", "medium", "small"</code><br />
The size control sets a preset width and height to keep the video in the correct dimentions. This is the preffered way to set the width and height.
<br />
<code>"default": w=631px, h=356px</code>
<code>"large": w=1000px, h=563px</code>
<code>"medium": w=300px, h=169px</code>
<code>"small": w=213px, h=120px</code>


## Error Codes:<br />
Call an error by useing <code>ErrorCode(errorCode);</code>

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
<code>vpw: "Could not determin window width."</code><br />
<code>vph: "Could not determin window height."</code><br />
<code>rurl: "We could not find a return url."</code><br />
<code>VPF: "We're sorry but the video could not load."</code><br />
<code>src: "It appears there is no video source attached."</code><br />
