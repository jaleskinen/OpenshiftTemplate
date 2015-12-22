var express = require('express');

var app = express();

//you need  to define these two variables with these
//two environment variables to get your app work in openshift
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

//When this server is connected, return the index.html as response
app.get('/', function (req, res){
    
    res.sendfile('index.html');
});

//Listen the given port in given ip address
app.listen(port,ip);
