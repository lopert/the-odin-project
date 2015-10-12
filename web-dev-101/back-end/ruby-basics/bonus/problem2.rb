# basic fib calcuatlor
def fib term

  prevprev = 0
  prev = 0
  fib = 1

  term.times do

    prevprev = prev
    prev = fib
    fib = prevprev + prev

  end
  puts fib

end

for term in 1..20
	puts "Generating fib number #{term}"
	fib(term)
end

# all numbers, "naive implementation"
# after studying the efficent case more closely, this method only works because the next number in the fib sequence is odd
# if we chose a different limit, we might see the following behavior
# fib = 3999999, enter while, perform calculation, fib is now higher than 4mil, is even, so gets added to the result, which is incorrect behavior.
# easy fix is to just do the summing before the new fib is calculated.
# leaving method as is so my comment makes sense, and we have a more efficient solution below anyways :)

def problem2 limit=4000000

  prevprev = 0
  prev = 0
  fib = 1
  result = 0

  while fib < limit do

    prevprev = prev
    prev = fib
    fib = prevprev + prev

    if fib % 2 == 0
    	result += fib
    end

  end

  puts result

end

problem2

# solution is already fast, but it could be faster!
# let's calculate only the even fibs
# fib sequence pattern is even-odd-odd (starting at F3)
# see http://www.mathblog.dk/project-euler-problem-2/ for the math
# the reducing number of write operations is cool as well, but it is not considered here.
def problem2_efficiency limit=4000000

  fn = 2
  fn_minus_3 = 0
  fn_minus_6 = 0

  result = 0

  while fn < limit do

  	result += fn
  	fn_minus_6 = fn_minus_3
  	fn_minus_3 = fn
  	fn = 4*fn_minus_3+fn_minus_6

  end

  puts result

end

problem2_efficiency