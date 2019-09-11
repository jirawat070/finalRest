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

app.get('/point', db.getAllPoint);

app.get('/point/:name',db.getPointName);
app.get('/room/:isRoom',db.getRoomName);
app.get('/map/:p_id',db.getMapInfo);


var port = process.env.PORT || 8585;
app.listen(port, function () {
	console.log('App is running on http://localhost:' + port);
});
