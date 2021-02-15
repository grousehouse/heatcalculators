// Lifetime Heats Calculator

//Initialize

function calculateLifetime() {
  var year2 = Number(document.getElementById("year2").value);
  var month2 = Number(document.getElementById("month2").value);
  var cooldown2 = Number(document.getElementById("cooldown2").value);
  var i = 0.5;
  var totalheats = 0;
  var iterate = true;
  var IPD = document.getElementById("IPD");
  
// Conditionals

if (cooldown2 == "" || month2 == "" || year2 == "") {
  document.getElementById("nextheatcalculation").innerHTML = "Please fill in every field.";
} 	else if (year2 == 7 && month2 > 2) {
  document.getElementById("nextheatcalculation").innerHTML = "Female wolves cannot be bred past the age of 7 years and 2 months.";
} 	else if (year2 >= 8) {
  document.getElementById("nextheatcalculation").innerHTML = "Wolves cannot live past the age of 8 years.";
} 	else if (year2 < 1) {
  document.getElementById("nextheatcalculation").innerHTML = "Wolves cannot breed until they are 1 year old.";
} 	else if (month2 > 12 || month2 < 0) {
  document.getElementById("nextheatcalculation").innerHTML = "Months must be between 0 and 12.";
} 	else if (cooldown2 > 20 || cooldown2 < 0) {
  document.getElementById("nextheatcalculation").innerHTML = "Cooldown must be between 1 and 20.";
}

// Calculation

else {
	while (iterate == true) {
  month2 + cooldown2;
  	while (cooldown2 > 0){
    	month2+=i;
      cooldown2--;
      if (month2 == 12) {
      	year2++;
        month2 = 0;
      }
    }
    if (year2 >= 7 && month2 >= 2) {
    	document.getElementById("LifetimeHeatsCalculation").innerHTML = "Your wolf has " + totalheats + " heat(s) left.";
      iterate = false
    }
    else {
    	totalheats++;
      if (document.getElementById("IPD").checked == true){
      	cooldown2 = 20;
        }
      else {
      	cooldown2 = 23;
      }
    }
  }
}
}