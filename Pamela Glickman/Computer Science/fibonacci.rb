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

# My Solution
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

# Alternate Solutions

# Option a: memoisation

def fib_memo(n)
  @fib ||= {} # equivalent @fib = @fib || {}

  if @fib[n]
    @fib[n] # returns the value we saved earlier
  elsif n == 1 || n == 2
    1
  else
    @fib[n] = fib_memo(n-1) + fib_memo(n-2) # memoisation
  end
end

# Option b: faster, iterative recursion

def fib(m, a=1, b=1)
  if n == 1 || n == 2
    b
  else
    fib n-1, b, a+b # mystical
  end
end     

binding.pry
