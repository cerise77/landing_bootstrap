var express = require('express');
var app = express();
const Server = require('./server/server4');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));




// views is directory for all template files
/*app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});*/

Server.start(port, hostname, info);


/*const Server = require('./server/server4');
//
const hostname = '127.0.0.1';
const port = 3000;
let info = "\nnode-static-http-server by Janus Nic\nExamples of HTTP static file serving in Node.js\nSee: https://github.com/janusnic/web-dev-node\n";
Server.start(port, hostname, info);*/
