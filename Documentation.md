# Documentation
The how to's for the embeded video plugin

<b>Insatllation:</b> <br />
Include Jquery version 1.11 or higher<br />
Include the EmbedVideo.js script<br />

<b>Initialization:</b><br />
To run this plugin simply use the following command<br />
<code>$('VideoElement').EmbedVideo({ videoID: "THE_VIDEO_ID" });</code>
<br />

## Defaults:<br />

<code>BaseUrl: "http://www.CuurentDomain.com", </code><br />
<code>returnUrl: "http://www.CuurentDomain.com/The/Page/Frame/Is/On", </code><br />
<code>videoID: "#########", </code><br />
<code>brand: "false", </code><br />
<code>poster: "HasPlayBtn", </code><br />
<code>playBtn: "true", </code><br />
<code>forceplayer: "false",</code><br />
<code>sharing: "true",</code><br />
<code>width: "631px",</code><br />
<code>height: "356px",</code><br />
<code>scrolling: "none",</code><br />
<code>webkitallowfullscreen: "true",</code><br />
<code>mozallowfullscreen: "true",</code><br />
<code>allowfullscreen: "true",</code><br /> 



## The BreakDown:<br />

<code>BaseUrl: "http://www.CurentDomain.com", </code><br />
This should be set to whatever domain you are hosted on. <i>If left empty this will auto set</i><br /><br />

<code>returnUrl: "http://www.CurentDomain.com/The/Page/Frame/Is/On", </code><br />
This should be set to the page where the video is embeded but you can change it to share any page you like. <i>If left empty this will auto set</i><br /><br />

<code>videoID: "#########", </code><br />
This is the only required field. Here is were you select the video to be played.<br /><br />

<code>brand: "false", </code><br />
Branding is automatically disabled when the video is on your sites, but enables when embedded on a external site. Set this to <b>true</b> for branding to display localy.<br /><br />

<code>poster: "HidePlayBtn", </code><br />
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

<code>width: "631px",</code><br />
Self explainded.<br /><br />
<code>height: "356px",</code><br />
Self explainded.<br /><br />
<code>scrolling: "none",</code><br />
Self explainded.<br /><br />
<code>webkitallowfullscreen: "true",</code><br />
Self explainded.<br /><br />
<code>mozallowfullscreen: "true",</code><br />
Self explainded.<br /><br />
<code>allowfullscreen: "true",</code><br /> 
Self explainded.<br /><br />
