var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
    	line=line.replace(/(\r\n|\n|\r)/gm,'');
        array = line.split(' ');
        var x = 0;
        var mayor = 0;
        var out = '';
        for (var i = 0; i < array.length; i++) {
        	if (x!=0) {
                if (array[i].length > mayor) {
                 mayor = array[i].length;
                 out = array[i];
                }
        	}else{
              mayor = array[i].length;
              out = array[i];
              x++;
        	}
        };
        console.log(out);
    }
});