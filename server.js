var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(parseInt(process.env.PORT), function () {
  console.log('Example app listening on port: ' + process.env.PORT);
})

