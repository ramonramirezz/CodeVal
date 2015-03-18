
var _5 = ['****-',
		'*----',
		'***--',
		'---*-',
		'***--',
		'-----',];

var _6 = ['-**--', 
		'*----',
		'***--', 
		'*--*-', 
		'-**--', 
		'-----',];

var _7 = ['****-', 
'---*-', 
'--*--', 
'-*---', 
'-*---', 
'-----'];

var _8 = ['-**-- ',
'*--*-', 
'-**--', 
'*--*-', 
'-**--', 
'-----'];

var _9 = ['-**--',
'*--*-',
'-***-',
'---*-',
'-**--',
'-----'];
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        
        var array = [];

       
        for (var i = 0; i < line.length; i++) {
        	if (isnumb(line[i])) {
        		array.push(line[i]); 
        	};
        };

        for (var i = 0; i < array.length; i++) {
        	switch(array[i]){
                 case 5: 
                 case 6: 
        	}
       

    }
    console.log(x);

    }
});

function isnumb(n){
      return !isNaN(parseFloat(n)) && isFinite(n);
}

				
