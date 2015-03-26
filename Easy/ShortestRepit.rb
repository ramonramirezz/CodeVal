File.open('read.txt').each_line do |line|
line = line.strip
line = line.split('')
c = line.length
if c % 2 == 0
	line = line.uniq
	puts line.length
end
if c % 2 != 0
	line = line.uniq
	puts line.length	
end

end