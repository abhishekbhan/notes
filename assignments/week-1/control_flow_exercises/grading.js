var score= prompt("Enter your test score:");
switch(true)
	{
		case (score >= 90 && score < 100):
			console.log("A");
			break;
		case (score>=80 && score <90):
			console.log ("B");
			break;
		case (score >=70 && score <80):
			console.log ("C");
			break;
		case (score >= 60 && score < 70):
			console.log("D");
			break;
		case (score>=0 && score <60):
			console.log ("F");
			break;
		default:
			console.log("Wrong score!!");

	}