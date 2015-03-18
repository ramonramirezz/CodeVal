var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var array =  line.split(',');
        var a = array[0].split(' ');
        var b = array[1];
        var out = 0;
        for (var i = 0; i < b.length; i++) {
                      
                         if (a == b[i]) {out = i;};
                       };
                    
                   console.log(out);          
    }
});