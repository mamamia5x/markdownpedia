/**
 * Module Dependencies
 */
const express = require('express');
const path = require('path');
const { exec } = require('child_process');

/**
 * Server Settings
 */
var app = express();
var port = 8000;

app.set('port', port);

/**
 * Serving Static Files
 */
app.use(express.static(path.join(__dirname, 'site/html')));
app.use('/server/vital', express.static(path.join(__dirname, 'vital/public')));
app.use('/pages/', express.static(path.join(__dirname, 'vital/pages')));

/**
 * Handling 404 Errors and Displaying 404 Page
 */
app.use(function (req, res, next) {
    res.status(404);
    res.sendFile(path.join(__dirname, 'vital', '404.html'));
});

/**
 * Server listening
 */
app.listen(app.get('port'), function () {
    console.log(`
    Now listening on port ${port}
    Go to http://localhost:${port}
  `);
});

/**
 * TODO: Add the description of this function
 * [exec description]
 * @param  {[type]} error  [description]
 * @param  {[type]} stdout [description]
 * @param  {[type]} stderr [description]
 */
exec('node index.js', (error, stdout, stderr) => {
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

/**
 * TODO: Add the description of this function
 * [site description]
 * [exec description]
 * @param  {[type]} error  [description]
 * @param  {[type]} stdout [description]
 * @param  {[type]} stderr [description]
 */
function site() {
    exec('npm run convert', (error, stdout, stderr) => {
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

site();
setInterval(site, 600000);
