string = ""
for i in 1..100
	if i % 3 === 0
		string += 'fizz'
	end
	if i % 5 === 0
		string += 'buzz'
	end
	if i % 3 != 0 and i % 5 != 0
		string += i.to_s
	end
	string += " "
end
puts string