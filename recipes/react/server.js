var http = require('http'),
    ejs = require('ejs'),
    fs = require('fs'),
    express = require('express'),
    app = express();


app.use("/img", express.static('renderer/img'));
app.use("/views", express.static('views/compiled'));
app.use("/libs", express.static('libs'));
app.use("/scripts", express.static('renderer'));

app.get('/', function(req,res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('index.ejs', 'utf-8', function (err, content) {
        if (err) {
            throw err;
        }
        var renderedHtml = ejs.render(content);
        res.end(renderedHtml);
    });
});

http.createServer(app).listen(3000);

console.log("App running on 3000");