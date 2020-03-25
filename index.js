var express = require('express');

// App setup
var app = express();
var port = process.env.PORT || 4000;

app.get("/", function(req, res) {
    res.send('listening for requests on port 4000');
});

app.listen(port);
