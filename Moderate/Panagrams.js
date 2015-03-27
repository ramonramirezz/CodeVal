var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
    	line=line.replace(/\s/g,'');
    	line = line.toLowerCase();
    	var alfab = 'abcdefghijklmnopqrstuvwxyz'
    	var res = '';
        for (var i = 0; i < alfab.length; i++) {
        	if (!strContainsStr( line, alfab[i])) {
                 res += alfab[i];
        	};
        };
            if (res != '') {
            	console.log(res);
            }else{
            	console.log('NULL');
            }
    }
});

function strContainsStr( str1, str2){
   return ( str1.indexOf(str2) != -1  ? true : false);
}