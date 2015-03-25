
File.open('read.txt').each_line do |line|
	     contador = 0
	     up = 0.to_f
	     down = 0.to_f
	       line = line.strip
         line.each_char do |x|
         if  x == x.upcase 
             up = up + 1
             contador = contador+ 1
          end
          if x == x.downcase
             down = down + 1
             contador = contador+ 1
          end
          
         end

         porUP = (up * 100)/contador
         porDown = (down * 100)/contador
        puts sprintf "lowercase: %.2f uppercase: %.2f", porDown, porUP
end      