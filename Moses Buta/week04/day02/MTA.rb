# # MTA Lab
#
# ## Objectives:
# * Apply your knowledge of Ruby to solve a real world problem.
# * Get really good at array manipulation.
#
# #### Activity
# * Create a program that models a simple subway system.
#
# * The program takes the line and stop that a user is getting on at and the line
# and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
#
# ```ruby
# plan_trip 'N', 'Times Square', '6', '33rd' # This is only a suggested function name and signature.
#
# # `puts` shows output similar to this:
# # "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# # "Change at Union Square."
# # "Your journey continues through the following stops: 23rd, 28th, 33rd."
# # "7 stops in total."
# ```
#
# * There are 3 subway lines:
#   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
#   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
#   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
#   * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
# * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
#
#
# #### Hints:
# * Work out how you would do it on paper first! Then start to explain that process in Ruby.
# * Get the program to work for a single line before trying to tackle multiple lines.
# * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```gets``` later to make it more interactive.
# * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
# * The key to the lab is finding the index positions of each stop. (hint: ```index```)
# * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)







$plan_trip = {
  :N => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  :L => ["8th", "6th", "Union Square", "3rd", "1st"],
  "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

# array used to find elements between indexes
class Array
   def get_sub_array(start,last)
       (start > last) ? (self[start..-1] + self[0..last]) : self[start..last]
   end
end
#e.g
# a = [7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6]
# puts a.get_sub_array(6,0)





def first_line(start_LineN, start_stationN, stoping_lineN, stoping_stationN )
# initialise and declare global varaibles
$input = start_LineN
$input1 = start_stationN
$input3 = stoping_lineN
$input4 = stoping_stationN
$changing_station = "Union Square"

#figure out the starting line and starting station
  $plan_trip.each { |key, value|
    keys = key.to_s

    if keys == $input
      $stored_key = keys
      puts "starting line is: #{$stored_key}"

      new_setup = ":#{$stored_key}"

       if new_setup == ":N"
         $stored_value = $plan_trip[:N]

       elsif new_setup == ":L"
         $stored_value = $plan_trip[:L]

       else
         $stored_value = $plan_trip["6"]

       end



        $stored_value.each { |x|
          if x == $input1
            printing2 = "starting station is: #{x}"
            puts printing2

             #array manipulation
           $index_of_value = $stored_value.index(x)

           index = $stored_value.index($changing_station)

           if $index_of_value > index
             a = $stored_value.get_sub_array(index, $index_of_value)
               new_stored = a.join(', ')
               puts "Your journey continues through the following stops: #{new_stored}."
            else
             a = $stored_value.get_sub_array($index_of_value, index)
             # aa = a.reverse
             new_stored = a.join(', ')
             puts "Your journey continues through the following stops: #{new_stored}."
            end

        end
        }

  end


  # check if they if they are stopping on the same line or not so to display Change at Union Square
  if keys == $input3
    $stored_key = keys

     if $input1 == $input3
      puts "Stoping Line is: #{$stored_key}"
    else
    puts "Stoping Line is: #{$stored_key}"
    puts "Change at Union Square"
  end

    #match the input characters with the hash keys
    new_setup = ":#{$stored_key}"


     if new_setup == ":N"
       $stored_value = $plan_trip[:N]

     elsif new_setup == ":L"
       $stored_value = $plan_trip[:L]

     else
       $stored_value = $plan_trip["6"]

     end

     #figure out the stopping line and stopping station
        $stored_value.each { |x|
          if x == $input4
            printing2 = "stoping station is: #{x}"
            puts printing2
           index_of_value = $stored_value.index(x)

           #index of the stopping station
           $index_of_value = $stored_value.index(x)
           #index of the intersection station
           index = $stored_value.index($changing_station)


        if index_of_value > index
            a = $stored_value.get_sub_array(index, $index_of_value)
            new_stored = a.join(', ')
            puts "Your journey continues through the following stops: #{new_stored}."
         else
          a = $stored_value.get_sub_array($index_of_value, index)
          aa = a.reverse
          new_stored = aa.join(', ')
          puts "Your journey continues through the following stops: #{new_stored}."
         end

        end
        }

  end

}
end
first_line("N", "Times Square", "6", "33rd")
