var fs = require('fs');
fs.readFile("./challenge1/info.txt","utf8", function(err,data){
  if(err){
    throw err;
  }
  console.log(data);
})
fs.writeFile("./challenge2/info.txt", "Ali, Char, Marie, Jennifer", (err) => {
    if (err) {
      throw err;
    }
  })
  /*fs.rename('challenge3/binfo.txt', 'challenge3/info.txt', function (err) {
   if (err) throw err;
   console.log('renamed complete');
 });*/

  /*fs.mkdir('challenge4/copyfolder', function(err){
    if(err) throw err;
    console.log('copy complete')
  })*/
/*fs.copyFile('/challenge4/info.txt', '/challenge4/copyfolder/info.txt',
function (err) {
  if (err) throw err;
})*/

//universal solution if don't have that version of node to to use readfile and then writefile. So create data with read by pulling from where reading and then write that using same variable.
/*fs.readFile('challenge5/info.txt', 'utf8', function(err, data){
  if(err){
    throw err;
  }
data = data.replace(/-/g, ' ')

fs.writeFile('challenge5/info.txt', data, err => {
  if(err){
    throw err;
  }
})
console.log(data);
})*/

fs.readdir('challenge6/', (err, files) => {
  files.forEach(file => {
    if(file.includes('.txt')){
    console.log(file);
  }
  })
})
