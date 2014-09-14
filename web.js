var http = require('http');
var express = require('express');
var routes = require('./routes');
var app = module.exports = express();
var path = require('path');



app.configure(function(){
  
  app.engine('.html', require('ejs').renderFile)
   
  app.set('view engine', 'html');
  
  
  app.use(express.static(path.join(__dirname, 'public')));
  app.set('views', __dirname + '/views');
  
  
});

 app.use(express.cookieParser());

  app.use(express.bodyParser());
  app.use(express.methodOverride());


  app.use(app.router);


app.get('/templates/:name', routes.templates);


require('./lib/config/routes')(app);  

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});