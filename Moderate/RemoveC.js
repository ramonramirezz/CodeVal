var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
    	
    	var array = line.split(', ');
    	var cadena = array[0].trim();
    	var cases = array[1].trim();
        var status = true;
        var out = '';
    	for (var i = 0; i < cadena.length; i++) {
    		status = true;

    		for (var j = 0; j < cases.length; j++) {
    			if (cadena[i] === cases[j]) {status = false};
    		};
            
            if (status) {out = out + cadena[i]};
    	};
    	console.log(out);
    }
});