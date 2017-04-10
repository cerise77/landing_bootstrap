// конструктор
function  Router()  {
   //
 }
 // методы в прототипе
Router.prototype.find = function(path, routes) {
          for (let route in routes) {
              if (path === route) return routes[route];
          }
          return false;
      };

exports.find = Router.prototype.find;
