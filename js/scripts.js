//Wrapping everything in this so that it executes when the page is finished loading
$( document ).ready(function() {
    
    //This is the HLS source (M3U* file) that you wish to load
	var hls_source = 'http://www.streambox.fr/playlists/test_001/stream.m3u8';
	
	//This loads the appropriate video content into th <video> tag
    if(Hls.isSupported()) {
		video = document.getElementById('video');
			var hls = new Hls();
			hls.loadSource(hls_source);
			hls.attachMedia(video);
			hls.on(Hls.Events.MANIFEST_PARSED,function() {
			  video.play();
		});
	}
});