def show_menu
   puts "calculator"
   puts "-=" *40
   puts "[a] - Addition"
   puts "[s] - Subtraction"
   puts "[m] - Multiplication"
   puts "[d] - Division"
   puts "[sq]- squre"
   puts "[sr] - square root"

   puts "[q] - Quit"
   print "enter your choice"
end

show_menu

menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  case menu_choice
  when "a"
    puts "you chose addition"
    print "enter first number" #actually do the addition
    num1 = gets.to_f
    print 'enter second number'
    num2 = gets.to_f

    def add (num1,num2)
        num1 + num2
    end

  puts "the result is #{add num1,num2}"


  when "s"
    puts "you chose subtraction"
    print "enter first number" #actually do the addition
    num1 = gets.to_f
    print 'enter second number'
    num2 = gets.to_f

    def subtract (num1,num2)
        num1 - num2
    end

  puts "the result is #{subtract num1,num2}"

  when "m"
    puts "you chose multiplication"
    print "enter first number" #actually do the addition
    num1 = gets.to_f
    print 'enter second number'
    num2 = gets.to_f

    def multiply (num1,num2)
        num1 * num2
    end

  puts "the result is #{multiply num1,num2}"

  when "d"
    puts "you chose division"
    print "enter first number" #actually do the addition
    num1 = gets.to_f
    print 'enter second number'
    num2 = gets.to_f

    def divide (num1,num2)
        num1 / num2
    end

  puts "the result is #{divide num1,num2}"

when "sq"
  puts "you chose squre"
  print "enter number" #actually do the addition
  num1 = gets.to_f

  def squre (num1)
      num1 * num1
  end

puts "the result is #{squre num1}"

when "sr"
  puts "you chose squre root"
  print "enter number" #actually do the addition
  num1 = gets.to_f

  def squre_root (num1)
      Math.sqrt(num1)
  end

puts "the result is #{squre_root num1}"

  else
     puts "invalid selection"
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "thanks for using this calculator"
