var unit = prompt("Enter your temperature unit:(C or F) ")
var temp = prompt("Enter the temperature value: ")


if(unit == "F" || unit =="f")
	{ctemp = ((temp-32)*(5/9));
	console.log(temp + "'" + unit + " is " + ctemp +"'C");}
else if(unit == "C" || unit =="c")
	{ftemp = ((temp*9/5)+32);
	console.log(temp + "'" + unit + " is " + ftemp +"'F");}
else
    alert("Wrong System of measurement!!");

// 100'c is 212'F