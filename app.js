var app = require('static-site-generator');

app.public(__dirname + "/public");

app.postDirectory = __dirname + '/posts/';

module.exports = app;