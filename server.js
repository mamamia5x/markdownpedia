var express = require("express");
const { exec } = require("child_process");
var path = require('path');
var app = express();
var port = 8000;
app.use(express.static(path.join(__dirname, 'site/html')));
app.use('/server/vital', express.static(path.join(__dirname, 'vital/public')))
app.use(function(req, res, next) {
res.status(404);
res.sendFile(path.join(__dirname, 'vital', '404.html'));
});


app.listen(port);
console.log(`Now listening on port ${port}`);
console.log(`Go to http://localhost:${port}`);

exec("node index.js", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});

function site(){
exec("npm run convert", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
}
setInterval(site, 600000);
