let Router = require('./router');
let url = require('url');
let fs = require('fs');
let path = require('path');

const root = path.join(__dirname, '/../public');

const http = require('http');

const mime = {
    html: 'text/html',
    txt: 'text/plain',
    css: 'text/css',
    gif: 'image/gif',
    jpg: 'image/jpeg',
    png: 'image/png',
    svg: 'image/svg+xml',
    js: 'application/javascript'
};


class Server {

  static start(port, hostname, info) {
    this.getRoutes(port, hostname, info).then(this.createServer);
  }

  static getRoutes(port, hostname, info) {
    return new Promise(function(resolve) {

      fs.readFile(__dirname +'/routes.json', { encoding: 'utf8' }, function(error, routes) {
        if (!error) {
          resolve({
            port: port,
            hostname: hostname,
            info: info,
            routes: JSON.parse(routes)
          });
        }
      });
    });
  }

  static createServer(settings) {

     let handleRequest = (req, res) => {

              let reqPath = url.parse(req.url).pathname;
              let route = Router.find(reqPath, settings.routes);

              //console.log(route.handler);

                try {
                    let handler = require('../controllers/' + route.handler);
                    handler[route.action](res);
                } catch(e) {
                    let filePath = path.join(root, reqPath);
                    fs.exists(filePath, (exists) => {
                         		if (exists) {
                         			fs.readFile(filePath, (error, content) => {
                         				if (error) {
                         					res.writeHead(500);
                         					res.end();
                         				}
                         				else {
                                            let contentType = mime[path.extname(filePath).slice(1)] || 'text/plain';

                         					res.writeHead(200, { 'Content-Type': contentType });
                         					res.end(content, 'utf-8');
                         				}
                         			});
                         		}
                         		else {
                         			res.writeHead(404);
                         			res.end();
                         		}
                    });
                }
            };

    http.createServer(handleRequest).listen(settings.port, settings.hostname, () => {
          console.log(`Server running at http://${settings.hostname}:${settings.port}/ ${settings.info}`);
  });
}
}

module.exports = Server;
