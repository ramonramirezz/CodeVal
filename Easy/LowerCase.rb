File.open(ARGV[0]).each_line do |line|
 line = line.downcase
puts line
end