# Calculator 
# https://gist.github.com/wofockham/2752aa06121df7f3024c

def show_menu 
    puts "-=" * 40 # dividing line
    puts "[A] - Addition"
    puts "[Q] - Quit"
    puts "[A] - Add"
    puts "[S] - Subtract"
    puts "[D] - Divide"
    puts "[M] - Multipy"
    print "Enter your choice: "
end

# Add
def add (a,b) 
    puts "You chose addition" #actually do the addition
    print "Number 1: "
    num1 = gets.to_i
    print "Number 2: "
    num2 = gets.to_i
    puts a + b
end

# Subtract
def sub (a,b) 
    puts a - b
end 

# Divide
def divide (a,b) 
    puts a / b
end

#Multiply
def multiply (a,b) 
    puts a * b
end


show_menu

menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    #handle the user choice
    case menu_choice
    when "a"
        puts "You chose addition" #actually do the addition
        print "Number 1: "
        num1 = gets.to_i
        print "Number 2: "
        num2 = gets.to_i
        add num1, num2
    when "d"
        puts "You chose division"
        print "Numerator: "
        num1 = gets.to_i
        print "Denominator: "
        num2 = gets.to_i
        divide num1, num2
    when "s"
        puts "You chose subtraction."
        print "Number 1: "
        num1 = gets.to_i
        print "Number 2: "
        num2 = gets.to_i
        sub num1, num2
    when "m"
        puts "You chose multiply"
        print "Number 1: "
        num1 = gets.to_i
        print "Number 2: "
        num2 = gets.to_i
        multiply num1, num2
    else 
        puts "Invalid selection"
    end 
    show_menu
    menu_choice = gets.chomp.downcase
end

puts "thanks for using this crappy calculator!"