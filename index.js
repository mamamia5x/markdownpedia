const { exec } = require("child_process");
const fs = require("fs");

update();

function update(){
  if (fs.existsSync('markdownpedia')) {
    command("rm -rf markdownpedia && git clone https://github.com/mamamia5x/markdownpedia.git && node markdownpedia/server.js");
  }
  else {
    command("git clone https://github.com/mamamia5x/markdownpedia.git && node markdownpedia/server.js");
  }
}

setInterval(update, 3600000);

function command (com){
  exec(com, (error, stdout, stderr) => {
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