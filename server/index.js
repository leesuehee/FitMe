let express = require('express');
let bodyParser = require('body-parser');
let port = 3000;
let controller = require('../database/controller.js');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.get('/users', function (req, res) {
  controller.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(port, function() {
  console.log(`serving port:${port}`);
});


