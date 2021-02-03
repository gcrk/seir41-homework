def show_menu
  puts "Mortgage Repayment".center(120)
  puts "<->"* 60
  puts "[w] - Weekly"
  puts "[m] - Monthly"
  puts "[y] - Yearly"
  puts "[q] - Quit"
  print "Enter your choice: "
end

def returnsI (rate)
  return (1+rate/12)**(12/12)-1
end

def annuity (i, time)
  return (1-(1/(1+i))**time)/i
end

def principal (loan, time, rate)
    i = returnsI(rate)
    annuity = annuity(i, time)
    return (loan/annuity)
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  case menu_choice
  when 'm'
    print "enter loan amount: "
    l= gets.chomp.to_i
    print "Enter length of time in months: "
    t = gets.chomp.to_i
    print "Enter interest rate: "
    r= gets.chomp.to_f/100

    principal = principal(l,t,r)

puts "\n$%.2f per month" % [principal]


  else
    puts 'Invalid selection. Please choose the correct option.'
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using my first mortgage calculator!"

# print "enter loan amount: "
# loan = gets.chomp.to_i
# print "Enter length of time in months: "
# time = gets.chomp.to_i
# print "Enter interest rate: "
# rate = gets.chomp.to_f/100
#
# i = (1+rate/12)**(12/12)-1
# annuity = (1-(1/(1+i))**time)/i
#
# payment = loan/annuity
#
# puts "\n$%.2f per month" % [payment]


# returnsI (rate)
# return (1+rate/12)**(12/12)-1
#
# annuity(i, time)
# return (1-(1/(1+i))**time)/i
#
# payment(loan, annuity)
