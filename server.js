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

app.get('/', function (req, res) {
	res.send('Express is running 5930213009');
});

var output = {
    status: 'success',
	message: 'REST API is working'
}
app.get('/api/json', function (req, res) {
    res.status(500).json(output);
});

app.get('/api/Suppliers/', db.getAllSuppliers);


var port = process.env.PORT || 5432;
app.listen(port, function () {
	console.log('App is running on http://localhost:' + port);
});
