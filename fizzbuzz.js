var string = "";

for (var i = 1; i < 101; i++) {
	if (i % 3 === 0) {
		string += 'fizz';
	}
	if (i % 5 === 0) {
		string += 'buzz';
	}
	if (i % 3 && i % 5){
		string += i.toString();
	}
	string += " ";
}

string;