# hlsdemo
A web page to demonstrate HLS video playback.

This uses MediaElemet.js, which utilizes hls.js to enable playback of M3U8 files. More in-depth info about these projects:
[Media Element repo](https://github.com/johndyer/mediaelement)
[HLS.js rep] (https://github.com/dailymotion/hls.js)

##Changing the M3u8 File

It's recommended to use the MediaElement version (index.html). Simply change the `<sourcce>` in the `<video>` tag to reference your M3U8 file.

To use straight hls.js (not recommended), use the pure-hls.html file. In scripts.js, change the `var hls_source` to reflect the URL of your M3U8 file.

##BrowserSync

This is optional, but sometimes it's a good idea to use aBrowserSync while working to prevent Javascript errors caused by cross domain references.

Install using `npm install -g browser-sync`

Then run `browser-sync start --server --files *`