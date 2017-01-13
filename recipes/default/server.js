const package = require('./package.json'),
      http = require('http'),
      ejs = require('ejs'),
      fs = require('fs'),
      express = require('express'),
      app = express();

app.use("/css", express.static('css'));
app.use("/data", express.static('data'));
app.use("/scripts", express.static('scripts'));

app.get('/', function(req,res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('views/index.ejs', 'utf-8', function (err, content) {
        if (err) {
            throw err;
        }
        let renderedHtml = ejs.render(content, { package: package });
        res.end(renderedHtml);
    });
});

http.createServer(app).listen(3000);

console.log("App running on 3000");