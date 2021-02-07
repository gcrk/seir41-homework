require 'pry'
def factorial_i(n)
    result = 1
    while n > 1
    result *= n  #mutation
    n -= 1 #moving towards the base case
    end

    result #implicit return
end



def factorial_r(n) #init
  if n<= 1
    1 #base
  else
    n * factorial_r(n-1) #recursion: moving towards base case
  end
end

binding.pry
