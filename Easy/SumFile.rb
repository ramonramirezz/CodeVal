sum = 0
File.open('read.txt').each_line do |line|
          sum += line.to_i
          
end
puts sum