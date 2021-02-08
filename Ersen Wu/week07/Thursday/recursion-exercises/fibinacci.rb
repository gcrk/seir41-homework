require 'pry'

def fibonacci_i(n)
  a = 1
  b = 1

  while n > 2 #base case : fib(1) = 1, fib(2) = 2
    #parallel assignment

   a, b = b, a+b; #parallel assignment (atomic)

    temp = a

  a = b
  b = b + temp
  n -= 1

 end
 b
end

binding.pry


def fibonacci_r(n)
  if n===1 || n===2
    1
  else
    fibonacci_r(n-1) + fibonacci(n-2)
  end
end

#make this faster but still recursive
#Option a: memoisation
#Option b: iterative recursion
