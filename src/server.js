/*(function () {

    var ChallengeServer = require('./challenge');
    var challenge       = new ChallengeServer();
    //console.log(challenge);
    
}());
*/
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router  = express.Router(); 

config                  = require('./config/challenge.json');

var PORT            = config.port;
var MAX_CONNECTIONS = config.max_connections;
app.use(bodyParser.json()); // read json input in post
app.use(bodyParser.urlencoded({extended: true})); // read url encoded form data

app.use(express.static(__dirname +'/views/web'));
//app.use('/bower', express.static(__dirname + '/bower_components')); // serve bower packages

require('./controllers/api/message')(app);

app.listen(PORT,function(){
	console.log("listening on "+PORT);
})