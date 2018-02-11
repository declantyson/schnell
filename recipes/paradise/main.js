const http = require('http'),
    fs = require('fs'),
    express = require('express'),
    app = express(),
    electron = require('electron'),
    electronApp = electron.app,
    BrowserWindow = electron.BrowserWindow;

app.use("/css", express.static('css'));
app.use("/img", express.static('img'));
app.use("/oob", express.static(`${__dirname}/node_modules/paradise-engine/img`));
app.use("/game", express.static('game'));
app.use("/scripts", express.static('scripts'));

app.get('/game', function(req,res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('game/game.html', 'utf-8', function (err, content) {
        if (err) {
            throw err;
        }
        res.end(content);
    });
});

http.createServer(app).listen(3000);
let mainWindow;

function createWindow () {
    mainWindow = new BrowserWindow({width: 1920, height: 1080});
    mainWindow.setFullScreen(true);
    mainWindow.loadURL('http://localhost:3000/game');
    // mainWindow.webContents.openDevTools();

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}


electronApp.on('ready', createWindow);
electronApp.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        electronApp.quit();
    }
});

electronApp.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});