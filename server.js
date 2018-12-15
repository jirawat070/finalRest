var express = require('express');
var app = express();
var db = require('./db');

var cors = require('cors');
app.use(cors())

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

//Add routing
// index page 
app.get('/', function (req, res) {
	res.send('Express is running');
});

var output = {
    status: 'success',
	message: 'REST API is working'
}
app.get('/api/json', function (req, res) {
    res.status(500).json(output);
});

app.get('/api/products/', db.getAllSuppliers);


var port = process.env.PORT || 8080;
app.listen(port, function () {
	console.log('App is running on http://localhost:' + port);
});
