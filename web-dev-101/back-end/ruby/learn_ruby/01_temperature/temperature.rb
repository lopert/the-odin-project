#write your code here

#Remember that one degree fahrenheit is 5/9 of one degree celsius, and that the freezing point of water is 0 degrees celsius but 32 degrees fahrenheit.

def ftoc(temp)
	(temp - 32) * 5.0/9.0
end

def ctof(temp)
	(temp * 9.0 / 5.0) + 32
end

# c = (f -32) * 5/9

# c * 9/5 + 32
