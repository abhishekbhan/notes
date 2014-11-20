var data = require("./products.json")
var count=0;
var datLength= data.items.length;
for( var i=0; i<datLength; i++)
{
	if (data.items[i].kind === "shopping#product")
		count++;
	
}
console.log(count); 
