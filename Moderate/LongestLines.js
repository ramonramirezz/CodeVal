var array = [];
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
    	line=line.replace(/(\r\n|\n|\r)/gm,'');
        array.push(line);
    }
});
var x = parseInt(array[0]);
array.sort(function(a, b){ return b.length - a.length; });
for (var i = 0; i < x; i++) {
	console.log(array[i]);
};
