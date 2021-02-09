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

binding.pry
