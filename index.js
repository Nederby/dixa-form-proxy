var http = require('http');
var httpProxy = require('http-proxy');

//
// Create a proxy server with custom application logic
//
var proxy = httpProxy.createProxyServer({});

// To modify the proxy connection before data is sent, you can listen
// for the 'proxyReq' event. When the event is fired, you will receive
// the following arguments:
// (http.ClientRequest proxyReq, http.IncomingMessage req,
//  http.ServerResponse res, Object options). This mechanism is useful when
// you need to modify the proxy request before the proxy connection
// is made to the target.
//
proxy.on('proxyReq', function(proxyReq, req, res, options) {
    proxyReq.setHeader('X-Special-Proxy-Header', 'foobar');
});

var server = http.createServer(function(req, res) {
  // You can define here your custom logic to handle the request
  // and then proxy the request.
    proxy.web(req, res, {
        target: 'https://forms.dixa.io/v1/forms/734UO5aJSvUB6t12XJeV1S/2X7gnrIG6Fm53Wrwvh0D6g'
    });
});
const port = process.env.PORT || 8000;
console.log(`listening on port ${port}}`)
server.listen(port);