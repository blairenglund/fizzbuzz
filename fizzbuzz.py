string = ""

for x in range(1,101):
	if x % 3 == 0:
		string += 'fizz'
	if x % 5 == 0:
		string += 'buzz'
	if x % 3 != 0 and x % 5 != 0:
		string += str(x)
	string += " "

print(string)