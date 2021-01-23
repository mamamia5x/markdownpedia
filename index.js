var markdown = require( "markdown" ).markdown;
var fsExtra = require('fs-extra');
var fs = require('fs');
var style = fs.readFileSync('vital/style.css') + '';

fsExtra.emptyDirSync('site/html'); 
var e404 = fs.readFileSync('vital/404.md') + '';
var html = markdown.toHTML(e404);
html = html + '<style>' + style + '</style>';
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
  var content = markdown.toHTML(fs.readFileSync(filename) + '');
  filename = filename.replace('site/markdown', 'site/html');
  filename = filename.replace('.md', '.html');
  var data = content + '<style>' + style + '</style>';
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