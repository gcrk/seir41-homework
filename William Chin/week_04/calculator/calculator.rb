def show_menu
  puts "Calculator"
  puts "[a] - Addition"
  puts "[s] - Substration"
  puts "[m] - Multiplication"
  puts "[d] - Division"
  puts "[sqrt] - Square Roots"
  puts "[exp] - Exponents"
  puts "[q] - Quit"
  print "Enter your choice:"
end

show_menu
menu_choice = gets.chomp.downcase

  until menu_choice == 'q'
    case menu_choice

    when 'a'
      puts 'You chose addition!' # TODO: Actually do the Addition
      puts "Enter a number"
      num1 = gets.chomp
      puts "Enter another number"
      num2 = gets.chomp
      puts (num1.to_i + num2.to_i) #covert to integers


  when 's'
    puts 'You chose substration!'
    puts "Enter a number"
    num1 = gets.chomp
    puts "Enter another number"
    num2 = gets.chomp
    puts (num1.to_i - num2.to_i) #covert to integers



  when 'm'
    puts 'You chose multiplication!'
    puts "Enter a number"
    num1 = gets.chomp
    puts "Enter another number"
    num2 = gets.chomp
    puts (num1.to_i * num2.to_i) #covert to integers

    when 'd'
      puts 'You chose division!'
      puts "Enter a number"
      num1 = gets.chomp
      puts "Enter another number"
      num2 = gets.chomp
      puts (num1.to_i / num2.to_i) #covert to integers

      when 'sqrt'
        puts 'You chose square roots!'
        puts "Enter a number"
        num1 = gets.chomp
        puts Math.sqrt(num1.to_i) #function returns square root the number

        when 'exp'
          puts 'You chose exponents!'
          puts "Enter a number"
          num1 = gets.chomp()
          puts Math.exp(num1.to_i) #function returns value e^

        else
          puts "Invalid selection"
        end

          show_menu
          menu_choice = gets.chomp.downcase
        end

                puts "Thanks for using this calculator!"
