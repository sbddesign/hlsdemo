# hlsdemo
A web page to demonstrate HLS video playback.

This utilizes hls.js to enable playback of M3U8 files. More in-depth info about hls.js can be found at that repo: [https://github.com/dailymotion/hls.js] (https://github.com/dailymotion/hls.js)

##Changing the M3u8 File

In scripts.js, change the `var hls_source` to reflect the URL of your M3U8 file.

##BrowserSync

This is optional, but sometimes it's a good idea to use aBrowserSync while working to prevent Javascript errors caused by cross domain references.

Install using `npm install -g browser-sync`

Then run `browser-sync start --server --files *`