File.open('read.txt').each_line do |line|
         line = line.split(' ')
         array = line.reverse
         numero = array[0].to_i
         puts array[numero]
end