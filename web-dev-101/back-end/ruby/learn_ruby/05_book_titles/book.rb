class Book
# write your code here
	attr_accessor :title

	def title=(title)
		title = title.split.map do |word|
			["the","a", "an", "and","over", "in", "of"].include?(word) ? word : word.capitalize
		end

		title.first.capitalize!

		@title = title.join(" ")
	end

end
