var fs = require('fs');

var dir = '.'
if (process.argv[2]) dir = process.argv[2]

var files = fs.readdirSync(dir);

for (arg in process.argv){
  console.log(process.argv[arg])
}

for (fn in files) {
  console.log(files[fn]);
}

