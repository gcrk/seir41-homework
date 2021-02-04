def show_menu
  puts "*" * 80
  puts "Calculator".center(70) # TODO: use .center to make it look nice
  puts "-=" * 40
  puts "[+]/[a] - Addition"
  puts "[-]/[s] - Subtraction"
  puts "[*]/[m] - Multiplication"
  puts "[/]/[d] - Division"
  puts "[^]/[e] - Exponent"
  puts "[|]/[r] - Square root"
  # TODO: Add other options here
  puts "[q] - Quit"
  print "Enter your choice: "
end


def add(a, b)
  a + b
end

def subtract(a, b)
  a - b
end

def multiply(a, b)
  a * b
end

def divide(a, b)
  a / b
end

def exponent(a, b)
  result = a
  if b > 0
    c = b - 1
    c.times {result = result * a}
  elsif b == 0
    result = 1
  else
    puts "b negative"
    result = 1/a
    c = b.abs - 1
    c.times {result = result / a}
  end

  result
end

def square_root(a)
  if a < 0
    puts "The number must not be negative"
  else
    result = Math.sqrt(a)
  end
  result
end

show_menu

menu_choice = gets[0].downcase

until menu_choice == 'q'
  case menu_choice
  when '+', 'a'
    puts 'You chose addition!' # TODO: Actually do the Addition
    print "First number: "
    first_num = gets.to_f
    print "Second number: "
    second_num = gets.to_f
    result = add(first_num, second_num)
    puts "The result is #{result}"

  when '-', 's'
    puts 'You chose subtraction'
    print "First number: "
    first_num = gets.to_f
    print "Second number: "
    second_num = gets.to_f
    result = subtract(first_num, second_num)
    puts "The result is #{result}"

  when "*", 'm'
    puts 'You chose multiplication'
    print "First number: "
    first_num = gets.to_f
    print "Second number: "
    second_num = gets.to_f
    result = multiply(first_num, second_num)
    puts "The result is #{result}"

  when "/", 'd'
    puts 'You chose multiplication'
    print "First number: "
    first_num = gets.to_f
    print "Second number: "
    second_num = gets.to_f
    result = divide(first_num, second_num)
    puts "The result is #{result}"

  when '^', 'e'
    puts 'You chose exponent'
    print "Base number: "
    first_num = gets.to_f
    print "Index number: "
    second_num = gets.to_i
    result = exponent(first_num, second_num)
    puts "The result is #{result}"

  when "|", 'r'
    puts 'You chose square root'
    print "The number to square root: "
    num = gets.to_f
    result = square_root(num)
    puts "The result is #{result}"

  else
    puts 'Invalid selection.'
  end

  show_menu
  menu_choice = gets[0].downcase
end

puts "Thanks for using this calculator"
