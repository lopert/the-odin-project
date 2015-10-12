#first attempt
def problem3 target
	prime_factor = target
	i = 2
	while i < target
		if (target % i == 0)
			if isPrime(i)
				prime_factor = i
			end
		end
		i+=1
	end
	prime_factor
end

#Reverse should be faster in all cases since we can stop as soon as we find a prime.
#Whereas forwards, we have to complete the whole set to ensure we don't miss a later prime factor.
#for some reason, this doesn't seem to be faster, or is minimally so... why?
def problem3_reverse target
	i = target-1
	while i > 1
		if (target % i == 0)
			if isPrime(i)
				return i
			end
		end
		i -= 1
	end
	return target
end

#isPrime helper function
def isPrime number
	i=2
	while i < number
	  if (number % i == 0)
	  	return false
	  end
	  i+=1
	end
	true
end

#now make it faster, with math!
def problem3_efficency target
	largest_prime_factor = -1
	
	# check if divisible by 2 (and therefore all possible multiples)
	while (target % 2 == 0)
		largest_prime_factor = 2
		target /= 2
	end

	# first odd number to check
	odd = 3

	while (target != 1)

		# check if divisible by odd (and therefore all possible multiples)
		# does some uneeded comparisons such as checking divisibility by 21 after having checked 3 and 7, but this is faster than checking if each odd we use is prime
		while (target % odd == 0)
			largest_prime_factor = odd
			target /= odd
		end
		odd += 2
	end

	return largest_prime_factor
end

#test it!
#efficiency calculator
def time_it
	start = Time.now
	yield
	diff = Time.now - start
	puts "Runtime: #{diff * 1000} milliseconds."
end


values = [864,13195,100000,51475143,151475142,151475143,100,107]

values.each do |v|
	puts "==> Find the biggest prime factor of #{v}"

	puts "Foward!"
	time_it {puts problem3(v)}

	puts "Reverse!"
	time_it {puts problem3_reverse(v)}

	puts "Efficient!"
	time_it {puts problem3_efficency(v)}

	puts
end

puts "==> Find the biggest prime factor of 600851475143"
time_it {puts problem3_efficency(600851475143)}