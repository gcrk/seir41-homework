def start_menu
  puts "BMI calculator"
  puts "-=" *40
  puts "[M] - male"
  puts "[W] - female"
  puts "[Q]- quit"
  print "enter your choice"
end

start_menu
start_menu_choice = gets.chomp.upcase

until start_menu_choice == "Q"
  case start_menu_choice
  when "M"
    puts "you have chosen male"
    print "what is your weight in kgs"
    weight = gets.to_f
    print "what is your height in meters"
    height = gets.to_f

    def bmi (weight, height)
        weight / (height * height)
    end

    puts "your BMI is calculated to be #{bmi weight, height}"

  when "M"
    puts "you have chosen female"
    print "what is your weight in kgs"
    weight = gets.to_f
    print "what is your height in meters"
    height = gets.to_f

    def bmi (weight, height)
        weight / (height * height)
    end

    puts "your BMI is calculated to be #{bmi weight, height}"




  else
     puts "invalid selection"
  end

  start_menu
  start_menu_choice = gets.chomp.downcase
end


puts "thank you for using BMI calculator"
