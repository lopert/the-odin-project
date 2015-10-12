result = 0
for i in 0..999
  if (i % 3 == 0) or (i % 5 == 0)
    result += i
  end
end
puts result