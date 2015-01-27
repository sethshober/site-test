var app = require('static-site-generator');
var path = require('path');

app.publicFiles(path.join( __dirname + "/public") );

app.postDirectory = path.join(__dirname + '/posts');

app.init();

module.exports = app;