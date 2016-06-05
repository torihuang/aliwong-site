var express = require('express');
var path = require('path');
var tours = require('./toursController');
// var events = require('./eventsController');
var bodyParser = require('body-parser');
var app = express();

// takes me to rootpath
var rootPath = path.normalize(__dirname + '/../')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// static serve pages in path without calling them at all
// install all files in app directory without processing them at all, just pass out as they are
app.use(express.static(rootPath + '/app'));

// app.get('/data/tour', tours.getAll);

// app.get('/data/event/:id', events.get);
// app.get('/data/event', events.getAll);
// app.post('/data/event/:id', events.save);

app.listen(process.env.PORT || 8080, function(){
  console.log('nihao from port %d in %s mode...', this.address().port, app.settings.env);
});
// app.listen(8080);
// console.log('nihao from port 8080...')