def show_menu
  puts "Calculator"
  puts "-=" * 40
  puts "[a] - Addition"
  puts "[d] - Division"
  puts "[s] - Subtraction"
  puts "[m] - Multiplication"
  puts "[sqr] - Square Root"
  puts "[e] - Exponents"
  puts "[q] - Quit"
  print "Enter your choice: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == "q"

  case menu_choice
  when "a"
    puts "You chose Addition!"
    puts "What's the first number you want to add?"
    num1 = gets.chomp.to_i
    puts "What number to you want to add to #{num1}?"
    num2 = gets.chomp.to_i

    def addition(a, b)
        return a + b
    end

    result = addition(num1, num2)
    puts "The result is #{result}"

  when "d"
    puts "You chose Division!"
    puts "What's the number you want divided?"
    num1 = gets.chomp.to_i
    puts "What number do you want to divide #{num1} by?"
    num2 = gets.chomp.to_f
    num1.to_f

    def division(a, b)
        return a / b
    end

    result = division(num1, num2)
    puts "The result is #{result}"

  when "s"
    puts "You chose Subtraction!"
    puts "What's the number you want to subtract from?"
    num1 = gets.chomp.to_i
    puts "What number do you want to subtract from #{num1}?"
    num2 = gets.chomp.to_i


    def subtraction(a, b)
        return a - b
    end

    result = subtraction(num1, num2)
    puts "The result is #{result}"

  when "m"
    puts "You chose Muliplication!"
    puts "What's the first number you want to multiply?"
    num1 = gets.chomp.to_i
    puts "What number do you want to multiply #{num1} by?"
    num2 = gets.chomp.to_i


    def multiply(a, b)
        return a * b
    end

    result = multiply(num1, num2)
    puts "The result is #{result}"

  when "sqr"
    puts "You chose Square Root!"
    puts "What's the number you want to get the square root of?"
    num1 = gets.chomp.to_i

    result = Math.sqrt(num1)

    puts "The result is #{result}"

  when "e"
    puts "You chose Exponents!"
    puts "What is your base number?"
    num1 = gets.chomp.to_i
    puts "What is your index number?"
    num2 = gets.chomp.to_i

    def exponent(a, b)
        return a ** b
    end

    result = exponent(num1, num2)
    puts "The result is #{result}"

else
  puts "Invalid selection."
end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using this Calculator!"
