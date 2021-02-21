# 1 1 2 3 5 8 13 21 34

require 'pry'

def fibonacci_iterative(n)
  a = 1
  b = 1

  while n > 2 # base case: fib(1) = 1, fib(2) = 2
    # parallel assignment

    a, b = b, a+b # mutation: parallel assignment (atomic)
    n -= 1
  end

  b
end

def fibonacci_recursive(n)
  if n == 1 || n == 2
    1
  else
    fibonacci_recursive(n-1) + fibonacci_recursive(n-2)
  end
end

# Bonus homework:
# Make this faster but still recursive:
# Option a: memoisation
# Option b: iterative recursion

# I think I used both here
def fibonacci_bonus(index, a = 1, b = 1, total = 1)
  if index <= 2
    return total
  end
  total = a + b
  a = b
  b = total
  index -= 1
  fibonacci_bonus(index, a, b, total)
end

binding.pry
