def log description, &block
	puts "Beginning \"" + description.to_s + "\"..."
	puts "...\"" + description.to_s + "\" finished, returning: " + block.call.to_s
end

log "outer block" do
	log "some little block" do
		5
	end
	log "yet another block" do
		"I like Thai food!"
	end

	false	
end