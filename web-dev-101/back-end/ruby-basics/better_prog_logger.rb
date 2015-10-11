$nesting_depth = -1

def log description, &block

	$nesting_depth += 1

	indent = ""
	for i in 0..$nesting_depth-1
		indent += "----"
	end
	puts indent + "Beginning \"" + description.to_s + "\"..."
	puts indent + "...\"" + description.to_s + "\" finished, returning: " + block.call.to_s

	$nesting_depth -= 1
end

log "outer block" do
	log "some little block" do
		log "teeny-tiny block" do
			"lots of love"
		end
		42
	end
	log "yet another block" do
		"I like Indian food!"
	end
	true	
end
