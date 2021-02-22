require 'pry'

def fibonacci_r n
     $soFar = [1, 1]
     $n = n
     def fibo n
       if $soFar.length == $n
          return $soFar[$n-1]
       elsif $soFar.length < $n
        $soFar.push ( $soFar[-1] + $soFar[-2] )
        puts $soFar.length
        fibo ($soFar.length)
     end
    end
  fibo
end


binding.pry

#make this faster but still recursive
#Option a: memoisation
#Option b: iterative recursion



def fib_memo n
  @fib ||= {}           #@fib = @fib || {}


  if @fib[n]
    @fib[n]

  elsif n==1 || n ==2
    1
  else
    @fib[n] = fib_memo(n-1) + fib_memo(n-2)
  end
end

#Option b: faster, inerative recursion

def fib(n, a=1, b=1)
  if n==1 || n==2
    b
  else fib n-1, b, a+b
 end
end
