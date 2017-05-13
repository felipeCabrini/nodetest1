var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

  var connect = require("connect"); connect().use(connect.static(__dirname)).listen(server_port);
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(server_port, function(){
    console.log('Server running on' + server_port);

});
