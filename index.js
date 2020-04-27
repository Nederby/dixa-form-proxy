var http = require('http');
var httpProxy = require('http-proxy');
var target = 'https://forms.dixa.io/v1/forms/734UO5aJSvUB6t12XJeV1S/2X7gnrIG6Fm53Wrwvh0D6g';
const port = 8000;

//
// Create your proxy server and set the target in the options.
//
var proxy = httpProxy.createServer({
    xfwd: true,
    target,
    changeOrigin: true
});

https.createServer(function(req, res) {
    proxy.web(req, res);                                                  
}).listen(port);

console.log(`listening on port ${port}`)
