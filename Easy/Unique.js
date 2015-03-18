var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
       line=line.replace(/(\r\n|\n|\r)/gm,'');
        var array = line.split(',');
        var x = 0;
        var aux = 0;
        var out = '';
        for (var i = 0; i < array.length; i++) {
        	if (x != 0 ) {
                 if (aux != array[i]){ 
                    aux = array[i];                 	
                    out += aux + ',';

                    
             }
        	}else{
        		aux = array[i];
        		out += aux + ',';
        		x++;
        	}
        };
         var fin = out.substring(0,out.length-1);
         console.log(fin);
    }
});
