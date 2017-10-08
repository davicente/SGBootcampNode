/**
 * Created by siro on 18/07/17.
 */
var express= require('express');
var app = express();
var utilsDB = require('./db/utils');

var bodyParser = require('body-parser');
var cors = require('cors');

var corsOptions = {
    origin: true,
    credentials: true
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use('/public', express.static(__dirname + '/public'));

utilsDB.connectDB(function(err, db) {
    if(err) {
        console.log('Error connecting to DB');
    } else {
        var routes = require('./routes/routes');
        routes.assignRoutes(app);

        app.listen(3000);
        console.log('Server is listening');
    }
});