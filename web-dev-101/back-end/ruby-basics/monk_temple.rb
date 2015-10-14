=begin
#http://rubymonk.com/learning/books/1-ruby-primer/chapters/19-ruby-methods/lessons/69-new-lesson
# http://blog.jayfields.com/2008/03/ruby-inject.html

def calculate(*args)
  puts
  puts "===== Begin Calculate"
  numbers = args
  puts "Input args = #{numbers}"

  numbers.each do |arg|
    puts "#{arg} #{arg.class}"
  end
  puts

  options = {}
  if args[-1].is_a?(Hash)
    numbers = args[0..-2]
    options = args[-1]
    puts "Num Numbers array #{numbers}"
    numbers.each do |arg|
      puts "#{arg} #{arg.class}"
    end
  end

  
  puts
  puts "Filtered => numbers = #{numbers}"
  puts "Filtered => options = #{options}"
  puts
  
  if options.empty?
    puts "Defaulting to addition."
    add(*numbers)
  elsif (options[:add] == true)
    add(*numbers)
  elsif (options[:subtract] == true)
    subtract(*numbers)
  end
  
end

def add(*numbers)
 
  puts "Performing addition with the following numbers #{numbers}"
  numbers.each do |arg|
    puts "#{arg} #{arg.class}"
  end
  numbers.inject(0) {|result, num| result + num}
end

def subtract(first_num, *numbers)
  result = first_num
  numbers.each do |num|
    result -= num
  end
  result
end

calculate(4,5, add:true)

=end

def random_select(array, n)
  # your code here
  puts
  puts "Input Array #{array}"
  result_array = []
  
  n.times do 
    rng = rand(array.length)
    result_array << array[rng]
    array.delete_at(rng)
  end
  
  puts "Result Array #{result_array}"
  result_array
end
