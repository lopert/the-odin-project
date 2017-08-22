class Timer
  #write your code here
	attr_accessor :seconds

	def initialize()
		@seconds = 0
	end

	def time_string()
		f_hours = format('%02d', seconds / 3600)
		@seconds = seconds % 3600

		f_minutes = format('%02d',seconds / 60)
		@seconds = seconds % 60

		f_seconds = format('%02d',seconds)

		"#{f_hours}:#{f_minutes}:#{f_seconds}"
	end

end
