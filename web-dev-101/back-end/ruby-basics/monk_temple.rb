#http://rubymonk.com/learning/books/1-ruby-primer/chapters/19-ruby-methods/lessons/69-new-lesson
# http://blog.jayfields.com/2008/03/ruby-inject.html

def calculate(*args)
  puts
  puts "===== Begin Calculate"
  numbers = args
  puts "Input args = #{numbers}"
  options = {}
  if args[-1].is_a?(Hash)
    numbers = args[0..-2]
    options = args[-1]
  end
  
  puts "Filtered => numbers = #{numbers}"
  puts "numbers class = #{numbers.class}"
  puts "Filtered => options = #{options}"
  
  if options.empty?
    puts "Defaulting to addition."
    add(numbers)
  elsif (options[:add] == true)
    add(numbers)
  end
  
end

def add(*numbers)
  
  puts "Performing addition with the following numbers"
  puts numbers
  puts "These numbers are a #{numbers.class}"
  puts numbers[0].class
  numbers.inject(0) {|result, num| result + num}
end

def subtract(first_num, *numbers)
  result = first_num
  numbers.each do |num|
    result -= num
  end
  result
end
