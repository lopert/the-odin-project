bye_count = 0

until bye_count == 3 do

	talk = gets.chomp
	
	if (talk == 'BYE')
		bye_count += 1
	elsif (talk == talk.upcase)
		gm_year = 1930 + rand(20)
		puts 'NO, NOT SINCE ' + gm_year.to_s
		bye_count = 0
	else
		puts 'HUH?! SPEAK UP, SONNY!'
		bye_count = 0	
	end

end