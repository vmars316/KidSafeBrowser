function readSafeLinks() {
const fs = require('fs');
const readline = require('readline');
var fileName = "ThisLinkOk.txt" ;
var i = 0  ;  var sitesArray=  [] ;  var linksArray = [] l
for (i = 0; i < 2; i++) {
	if  (i > 0) {
	fileName = "ThisSiteOk.txt";
	}
const rl = readline.createInterface({
  input: fs.createReadStream(fileName),
  crlfDelay: Infinity
});

rl.on('line', (line) => {
  console.log(`Line from file: ${line}`); 
  
  if (i = 0) {
	  sitesArray.push(line);
  }
  if (i = 0) {
	  linksArray.push(line);
  }
});
}
}