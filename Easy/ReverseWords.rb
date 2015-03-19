File.open('read.txt').each_line do |line|
        array = line.split(" ")
         
		out = array.reverse

		puts out.join(" ")
end