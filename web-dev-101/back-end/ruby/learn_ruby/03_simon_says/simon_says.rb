#write your code here
def echo(message)
	message
end

def shout(message)
	message.upcase
end

def repeat(message, rep=2)
	((message + " ") * rep).strip
end

def start_of_word(message,numletters)
	message[0..numletters-1]
end

def first_word(message)
	message.split[0]
end

def titleize(message)
	title = message.split.map do |word|
		["the","and","over"].include?(word) ? word : word.capitalize!
	end

	title.first.capitalize!
	title.join(" ")
end
