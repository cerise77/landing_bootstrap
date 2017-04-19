var express = require('express');
var app = express();
let rooot = require('./models');
//let router = express.Router();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


/*app.get('/', function(request, response) {
  response.render('pages/index');
});*/

app.use('/', rooot);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});










//app.use(require('./controllers')); // Монтируем контроллеры!

/*app.get('/', function(request, response) {
  response.render('pages/index');
});*/

/*app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/', function(request, response) {
  response.render('pages/contacts');
});*/

/*app.get('/', (req, res, next) => {
  res.send('Hello from Express!');
});*/

/*app.get('/', (req, res, next) => {
  res.send('Hello from Express!');
});*/
