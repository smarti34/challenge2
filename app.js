
var express = require('express'); 
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
 
//Example: GET http://<domain>:8080/items
app.get('/items', function(req, res, next) {
  if(req.query.filter) {
   next();
   return;
  }
  res.send('Challenge2: Get all'+'\n');
});
 
//Example: GET http://<domain>:8080/items?filter=ABC
app.get('/items', function(req, res) {
  var filter = req.query.filter;
  res.send('Challenge2: Get filter ' + filter + '\n');
});
 
//Example: GET http://<domain>:8080/items/10
app.get('/items/:id', function(req, res, next) {
  var itemId = req.params.id;
  res.send('Challenge2: Get ' + req.params.id+'\n');
});
 
//Example: POST http://<domain>:8080/items
app.post('/items', function(req, res) {
   var data = req.body.data;
   res.send('Challenge2: Add ' + data +'\n');
});
 
//Example: PUT http://<domain>:8080/items
app.put('/items', function(req, res) {
   var itemId = req.body.id;
   var data = req.body.data;
   res.send('Challenge2: Update ' + itemId + ' with ' + data +'\n');
});
 
//Example: DELETE http://<domain>:8080/items
app.delete('/items/:id', function(req, res) {
   var itemId = req.params.id;
   res.send('Challenge2: Delete ' + itemId +'\n');
});
  
var server = app.listen(8080, function () {
    console.log('Server is running..'); 
});