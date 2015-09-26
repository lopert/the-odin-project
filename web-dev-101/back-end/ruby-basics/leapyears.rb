puts 'Input start year.'
start_year = gets.to_i
puts 'Input end year.'
end_year = gets.to_i

current_year = start_year

puts ''
puts 'List of leap years within the interval: ' + start_year.to_s + ' .. ' + end_year.to_s

while (current_year <= end_year)

	if (current_year % 100 == 0)
		if (current_year % 400 == 0)
			puts current_year
		end
	elsif (current_year % 4 == 0)
		puts current_year
	end
	current_year += 1
end
