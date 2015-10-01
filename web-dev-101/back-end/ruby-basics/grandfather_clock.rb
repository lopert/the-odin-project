current_hours = Time.now.hour


def donger hour, &block
	while hour > 0
		puts "It is " + hour.to_s + " o'clock."
		block.call
		hour -= 1
	end
end

donger current_hours do 
	puts 'DONG!'
end