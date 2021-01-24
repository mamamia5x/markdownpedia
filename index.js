var showdown  = require('showdown');
converter = new showdown.Converter();
var css = 'https://markdownpedia.tk/server/vital/style.css';
var fsExtra = require('fs-extra');
var fs = require('fs');

var template = fs.readFileSync('vital/template.html') + '';

fsExtra.emptyDirSync('site/html'); 
var e404 = fs.readFileSync('vital/404.md') + '';
var html = converter.makeHtml(e404);
html = template.replace('{markdown}', html);
fs.writeFileSync('vital/404.html', html);
getfiles('site/markdown'); 
function getfiles(dir){ 
  var files = fs.readdirSync(dir);
  var i = 0;
  while (i < files.length){ 
    var now = getSecondPart(files[i]);
    if (now == 'md'){
      convert(files[i], dir);
    }
    else{
      getfiles(dir + '/' + files[i]);
    }
    i++;
  }
}

function convert(file, dir){
  var filename = dir + '/' + file;
  var content = converter.makeHtml(fs.readFileSync(filename) + '');
  filename = filename.replace('site/markdown', 'site/html');
  filename = filename.replace('.md', '.html');
  var data = template.replace('{markdown}', content);
  checkIfDir(dir.replace('site/markdown', 'site/html'));
  fs.writeFileSync(filename, data);
  console.log('File is ' + file + ' and is in ' + dir);
}
function getSecondPart(str) {
  return str.split('.')[1];
}

function checkIfDir(dir){
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }
}