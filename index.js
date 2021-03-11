var showdown = require('showdown');
converter = new showdown.Converter({
    tables: 'true',
    simplifiedAutoLink: 'true',
});
// converter = converter.setOption('tables', 'true')
// converter = converter.setOption('simplifiedAutoLink','true');
var css = 'https://markdownpedia.tk/server/vital/style.css';
var fsExtra = require('fs-extra');
var fs = require('fs');

var search = fs.readFileSync('vital/searchtemplate.html') + '';
var template = fs.readFileSync('vital/template.html') + '';

var listofFiles = [];

fsExtra.emptyDirSync('site/html');
var e404 = fs.readFileSync('vital/404.md') + '';
var html = converter.makeHtml(e404);
html = template.replace('{markdown}', html);
fs.writeFileSync('vital/404.html', html);
getfiles('site/markdown');
function getfiles(dir) {
    var files = fs.readdirSync(dir);
    var i = 0;
    while (i < files.length) {
        var now = getSecondPart(files[i]);
        if (now == 'md') {
            convert(files[i], dir);
        } else {
            getfiles(dir + '/' + files[i]);
        }
        i++;
    }
}

var i = 0;
var text = '';
while (i < listofFiles.length) {
    var replaceText = listofFiles[i].replace('/', '');
    if (replaceText == '') {
        replaceText = 'home';
    }
    text +=
        "<li><a href='#' onclick='window.location.pathname = \"" + listofFiles[i] + '";\'>' + replaceText + '</a></li>';
    i++;
}

fs.writeFileSync('vital/pages/search/index.html', search.replace('{list}', text));

function convert(file, dir) {
    var filename = dir + '/' + file;
    var content = converter.makeHtml(fs.readFileSync(filename) + '');
    filename = filename.replace('site/markdown', 'site/html');
    filename = filename.replace('.md', '.html');
    var data = template.replace('{markdown}', content);
    checkIfDir(dir.replace('site/markdown', 'site/html'));
    fs.writeFileSync(filename, data);
    listofFiles.push(dir.replace('site/markdown', ''));
    console.log('File is ' + file + ' and is in ' + dir);
}
function getSecondPart(str) {
    return str.split('.')[1];
}

function checkIfDir(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
}
