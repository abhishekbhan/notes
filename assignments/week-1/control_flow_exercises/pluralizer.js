var thing = prompt("Enter your thing you want pluralized: ")
var count = prompt("Enter the number of things you want: ")

var lenThing = thing.length;

if(count == 1 || count == 0)
	console.log(count + thing);
else
	var newthing = thing +"s";
	console.log(count + newthing);

