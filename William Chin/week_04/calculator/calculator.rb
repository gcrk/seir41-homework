def show_menu
  puts "Calculator.center"
  puts "[a] - Addition"
  puts "[s] - Substration"
  puts "[m] - Multiplication"
  put "[d] - Division"
  put "[sqrt] - Square Roots"
  put "[exp] - Exponents"
  puts "[q] - Quit"
  print "Enter your choice:"
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == "q"
 # handle the user choice
  show_menu
  menu_choice =gets.chomp.downcase

  until menu_choice == "q"
    case menu_choice
    when 'a'
      puts 'You chose addition!' # TODO: Actually do the Addition
      puts "Enter a number"
      num1 = get.chomp()
      puts "Enter another number"
      num2 = gets.chomp()
      puts (num1.to_i + num 2.to_i) #covert to integers
    else
      puts "Invalid selection."
end

until menu_choice == "q"
  case menu_choice
  when 's'
    puts 'You chose substration!'
    puts "Enter a number"
    num1 = get.chomp()
    puts "Enter another number"
    num2 = gets.chomp()
    puts (num1.to_i - num 2.to_i) #covert to integers
  else
    puts "Invalid selection."
end

until menu_choice == "q"
  case menu_choice
  when 'm'
    puts 'You chose multiplication!'
    puts "Enter a number"
    num1 = get.chomp()
    puts "Enter another number"
    num2 = gets.chomp()
    puts (num1.to_i * num 2.to_i) #covert to integers
  else
    puts "Invalid selection."
  end

  until menu_choice == "q"
    case menu_choice
    when 'd'
      puts 'You chose division!'
      puts "Enter a number"
      num1 = get.chomp()
      puts "Enter another number"
      num2 = gets.chomp()
      puts (num1.to_i / num 2.to_i) #covert to integers
    else
      puts "Invalid selection."
    end

    until menu_choice == "q"
      case menu_choice
      when 'sqrt'
        puts 'You chose square roots!'
        puts "Enter a number"
        num1 = get.chomp()
        puts Math.sqrt(num1.to_i) #function returns square root the number
      else
        puts "Invalid selection."
      end

      until menu_choice == "q"
        case menu_choice
        when 'exp'
          puts 'You chose exponents!'
          puts "Enter a number"
          num1 = get.chomp()
          puts Math.exp(num1) #function returns value e^
        else
          puts "Invalid selection."
        end


show_menu
menu_choice = gets. chomp.downcase
end

puts "Thanks for using this calculator!"
