#write your code here
vowel_array = ["a","e","i","o","u"]

def translate(message)
	words = message.split
	words.map! { |word| convert(word) }
	puts "#{message} => " + words.join(" ")
	words.join(" ")
end

def convert(word)

	if ["a","e","i","o","u"].include?(word[0])
		word + "ay"

	elsif word.start_with?("qu")
		word[2..-1] + word[0..1] + "ay"

	elsif word.include?("qu")
		qu_index = locate_qu(word)
		vowel_index = locate_first_vowel(word)

		#confirm this QU is the first vowel we found
		if (qu_index + 1 == vowel_index)
			#could perhaps be assumed that after QU always comes a vowel?
			vowel_index = locate_first_vowel(word[vowel_index+1..-1]) + vowel_index + 1
		end
		word[vowel_index..-1] + word[0..vowel_index-1] + "ay"

	else
		vowel_index = locate_first_vowel(word)
		word[vowel_index..-1] + word[0..vowel_index-1] + "ay"
	end

end

def locate_first_vowel(word)
	word.index(/[aeiou]/)
end

def locate_qu(word)
	word.index("qu")
end
