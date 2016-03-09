var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var num = parseInt(line);       
        var con = 0;
        while(true){

        		var reverse = parseInt(num.toString().split('').reverse().join(''));
        		if (num == reverse) {
                    break;
        		}else{
        			num += parseInt(reverse);
        			con++;
        		}
        	}
        }
        console.log(con + " " + num);
    
});