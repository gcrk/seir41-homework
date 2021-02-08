require 'pry'
def factorial_i(n)
    result = 1
    while n > 1
    result *= n  #mutation
    n -= 1 #moving towards the base case
    end

    result #implicit return
end

binding.pry
