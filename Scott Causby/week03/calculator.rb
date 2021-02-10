def show_menu
    puts "Calculator".center(75) 
    puts "-=" * 40
    puts "[a] - addition"
    puts "[s] - subtraction"
    puts "[m] - multiplication"
    puts "[d] - devision"
    puts "[q] - Quit"
    print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    case menu_choice
    when 'a'
        puts "Your first number to add"
        num1 = gets.chomp
        puts "Your second number to add"
        num2 = gets.chomp

        print "Your answer is: "
        puts num1.to_i + num2.to_i

    when 's'
        puts "Your first number to subtract"
        num1 = gets.chomp
        puts "Your second number to subtract"
        num2 = gets.chomp
      
        print "Your answer is: "
        puts num1.to_i - num2.to_i
     
    when 'm'
        puts "Your first number to multiply"
        num1 = gets.chomp
        puts "Your second number to multiply"
        num2 = gets.chomp
  
        print "Your answer is: "
        puts num1.to_i * num2.to_i
    
    when 'd'
        puts "Your first number to divide"
        num1 = gets.chomp
        puts "Your second number to divide"
        num2 = gets.chomp
      
        print "Your answer is: "
        puts num1.to_i / num2.to_i

    else
        puts 'Invalid selection.'
    end
        show_menu
        menu_choice = gets.chomp.downcase
    end

        puts "Thanks for using this amazing calculator!"
