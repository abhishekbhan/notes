var inputString = "building";
strLength=inputString.length;
var letter = [];
for(var i=strLength-1; i>=0; i--)
{
	 letter[i]=inputString.charAt(i);
}

 letter = letter.reverse().join("");
 console.log(letter);

 //result: gnidliub