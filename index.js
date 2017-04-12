var express = require('express');
var app = express();
let router = express.Router();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

/*app.get('/', function(request, response) {
  response.render('pages/index');
});*/

router.get('/', (req, res, next) => {
  /*res.render('index', { title: 'Express' });*/
  res.send('Hello from Express!');
});

/*app.get('/', (request, response) => {
  response.send('Hello from Express!');
});*/

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
