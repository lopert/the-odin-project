class OrangeTree

	def initialize
		@height = 0
		@age = 0
		@orangeCount = 0
	end

	def height
		@height
	end

	def oneYearPasses
		@age += 1
		@height += 30
		puts "A year passes... tree is now " + @age.to_s

		if @age < 5
			#no fruit
		elsif @age >= 5
			#drop fruit
			@orangecount = 0
			#make fruit
			@orangeCount += @age
			#above two could just be 1 line
			# @orangeCount = @age
		end


		if @age >= 10
			puts "dead"
			exit
			#dead
		end
	end

	def pickAnOrange
		if @orangeCount == 0
			puts "no orange 2eat :'("
		else
			puts "good orange, nom!"
			@orangeCount -= 1
		end
	end

	def countTheOranges
		@orangeCount
	end

end

tree = OrangeTree.new

10.times do
	tree.oneYearPasses
	puts "Tree Height: " + tree.height.to_s
	puts "Orange Count: " + tree.countTheOranges.to_s
	tree.pickAnOrange
	puts "Orange Count: " + tree.countTheOranges.to_s
	puts	
end
