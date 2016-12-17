var express = require('express')
var path =require('path');
var multer  = require('multer')
var upload = multer({ dest: './uploads/' })
var fs = require("fs"); 

var app = express()

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.post('/get-file-size', upload.single('file'), function (req, res) {
    var stats = fs.statSync(req.file.path);
    res.send({ size: stats['size'] })
})

app.listen(parseInt(process.env.PORT), function () {
  console.log('Example app listening on port: ' + process.env.PORT);
})

