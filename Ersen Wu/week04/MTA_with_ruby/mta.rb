puts 'Welcome to NYC subway'

subway = {
"n" => ["ts","34th","28th","23rd","union square","8th"],
"l" => ["8th","6th","union square","3rd","1st"],
"6" => ["gc","33th","28th","23rd","union square","ap"]
}

print "starting line?"
starting_line = gets.chomp.downcase
puts starting_line

print "starting stop?"
starting_stop = gets.chomp.downcase
puts starting_stop

print "finishing line?"
finishing_line = gets.chomp.downcase
puts finishing_line

print "finishing stop?"
finishing_stop = gets.chomp.downcase
puts finishing_stop


index_start = subway[starting_line].index(starting_stop)
puts index_start

index_finish = subway[finishing_line].index(finishing_stop)
puts index_finish

index_us_start = subway[starting_line].index("union square")
puts index_us_start

index_us_finish = subway[finishing_line].index("union square")
puts index_us_finish

#if travelling on the same line------------------------------------
if starting_line == finishing_line && index_start < index_finish
  puts "you will travel through the following stops:: #{subway[starting_line][index_start..index_finish]}"
end

if starting_line == finishing_line && index_start > index_finish
  puts "you will travel through the following stops:: #{subway[starting_line][index_finish..index_start].reverse()}"
end

# if travelling on different lines---------------------------------
if starting_line !=finishing_line

   puts "you will travel through the following stops: #{subway[starting_line][index_start..index_us_start]}" if index_us_start > index_start

   puts "you will travel through the following stops: #{subway[starting_line][index_us_start..index_start].reverse()}"if index_us_start < index_start

   puts "change at union square"

   puts "you will continue to travel through the following stops: #{subway[finishing_line][index_us_finish..index_finish].drop(1)}" if index_us_finish < index_finish

   puts "you will contiue to travel through the following stops: #{subway[finishing_line][index_finish..index_us_finish].reverse().drop(1)}"if index_us_finish > index_finish

end
