var http = require('http');
var httpProxy = require('http-proxy');
var target = 'https://forms.dixa.io/v1/forms/734UO5aJSvUB6t12XJeV1S/2X7gnrIG6Fm53Wrwvh0D6g';
const port = 8000;

//
// Create your proxy server and set the target in the options.
//
const proxy = httpProxy.createProxyServer({}).listen(8000);

//
// Create your target server
//
http.createServer(function (req, res) {
    proxy.web(req, res, {target, changeOrigin: true});
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('request successfully proxied!' + '\n' + JSON.stringify(req.headers, true, 2));
    res.end();
}).listen(9000);

console.log(`listening on port ${port}`)
