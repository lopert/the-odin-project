#write your code here

def add (a, b)
	a + b
end

def subtract (a, b)
	a - b
end

def sum(numbers)
	numbers.inject(0, :+)
end

def multiply (*numbers)
	numbers.inject(:*)
end

def power(a,b)
	a**b
end

def factorial(number)
		number.downto(1).inject(1,:*)
end
