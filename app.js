const http = require('http');
const rp = require('request-promise');
const gplay = require('google-play-scraper');

gplay.app({appId: 'com.ipelia.yoobicv3'})
.then((appData) => {
    const version = appData.version;
    console.log("TCL: ANDROID version", version);
}).catch((error) => {
    throw new Error(error);
});

const iOSRequestOptions = {
    uri: 'http://itunes.apple.com/lookup?bundleId=com.ipelia.yoobicv3',
    json: true
}

rp(iOSRequestOptions).then(data => {
    const results = data.results;
    const version = results[0].version;
    console.log("TCL: IOS version", version);
}).catch( error => {
    throw new Error(error);
});

http.createServer().listen(3000);
console.log('Server running');