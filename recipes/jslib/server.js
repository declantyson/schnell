const http = require('http'),
    express = require('express'),
    marked = require('marked'),
    fs = require('fs'),
    app = express();

app.set('view engine', 'ejs');

/*
 * Start server
 */
let port = process.env.PORT || 3000;
http.createServer(app).listen(port);
console.log(`App running on ${port}`);

/*
 * GET /
 */

app.get('/', (req,res) => {
    fs.readFile('README.md', 'utf-8', (err, content) => {
        if (err) {
            throw err;
        }
        res.render('index', { markdown: marked(content) });
    });
});