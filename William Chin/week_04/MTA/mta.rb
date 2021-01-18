# 3 subway lines

line = {
  "N" => ["Times Square", "34th", "28thN", "23rdN", "Union Square", "8thN",],
  "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
  "6" => ["Grand Central", "33rd", "28th6", "23rd6", "Union Square", "Astorce"]
}

def show_menu
  puts "Plan Trip"
  puts "[a] - Nline"
  puts "[b] - Lline"
  puts "[c] - 6line"
  puts "[q] - Quit"
  print "Enter your choice:"
end

show_menu
menu_choice = gets.chomp.downcase

  until menu_choice == 'q'
    case menu_choice

      when 'a'
        puts "What stop are you getting onto?:"
        linestart = gets.chomp
        puts "what stop are you getting off?:"
        lineend = gets.chomp

        index1 = line["N"].index(linestart) #finding the index positions of each stop
        index2 = line["N"].index(lineend) #finding the index positions of each stop
        totalstops = (index2 - index1)
        totalstops = totalstops.abs  #absolute number so only positive numbers

        puts "You must travel through the following stops on the #{linestart}:  #{lineend}. #{totalstops} stops in total."

        #show stops
        if index1 < index2
          puts "#{line["N"][index1..index2]}"
        else
          puts "#{line["N"][index2..index1].reverse}"
        end


when 'b'
  puts "What stop are you getting onto?:"
  linestart = gets.chomp
  puts "what stop are you getting off?:"
  lineend = gets.chomp

  index1 = line["L"].index(linestart) #finding the index positions of each stop
  index2 = line["L"].index(lineend) #finding the index positions of each stop
  totalstops = (index2 - index1)
  totalstops = totalstops.abs  #absolute number so only positive numbers

  puts "You must travel through the following stops on the #{linestart}:  #{lineend}. #{totalstops} stops in total."

  #show stops
  if index1 < index2
    puts "#{line["L"][index1..index2]}"
  else
    puts "#{line["L"][index2..index1].reverse}"
  end
#
#
when 'c'
  puts "What stop are you getting onto?:"
  linestart = gets.chomp
  puts "what stop are you getting off?:"
  lineend = gets.chomp

  index1 = line["6"].index(linestart) #finding the index positions of each stop
  index2 = line["6"].index(lineend) #finding the index positions of each stop
  totalstops = (index2 - index1)
  totalstops = totalstops.abs  #absolute number so only positive numbers

  puts "You must travel through the following stops on the #{linestart}:  #{lineend}. #{totalstops} stops in total."

  #show stops
  if index1 < index2
    puts "#{line["6"][index1..index2]}"
  else
    puts "#{line["6"][index2..index1].reverse}"


end
else
  puts "Invalid selection"
end

  show_menu
  menu_choice = gets.chomp.downcase
end
