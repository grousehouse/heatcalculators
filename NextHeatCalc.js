function openCalculator(evt, calculator) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(calculator).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

// Next Heat Calculator

function calculateHeat() {
  var year1 = Number(document.getElementById("year1").value);
  var month1 = Number(document.getElementById("month1").value);
  var cooldown1 = Number(document.getElementById("cooldown1").value);
  var i = 0.5;


// Conditionals

	if (cooldown1 == "" || month1 == "" || year1 == "") {
  document.getElementById("nextheatcalculation").innerHTML = "Please fill in every field.";
} 	else if (year1 == 7 && month1 > 2) {
  document.getElementById("nextheatcalculation").innerHTML = "Female wolves cannot be bred past the age of 7 years and 2 months.";
} 	else if (year1 >= 8) {
  document.getElementById("nextheatcalculation").innerHTML = "Wolves cannot live past the age of 8 years.";
} 	else if (year1 < 1) {
  document.getElementById("nextheatcalculation").innerHTML = "Wolves cannot breed until they are 1 year old.";
} 	else if (month1 > 12 || month1 < 0) {
  document.getElementById("nextheatcalculation").innerHTML = "Months must be between 0 and 12.";
} 	else if (cooldown1 > 20 || cooldown1 < 0) {
  document.getElementById("nextheatcalculation").innerHTML = "Cooldown must be between 1 and 20.";
}

// Calculation
	else {
  month1 + cooldown1;
  	while (cooldown1 > 0) {
    month1+=i;
    cooldown1--;
    	if (month1 == 12) {
      year1++;
      month1 = 0;
    }
    	else if (month1 == 12.5) {
      year1++;
      month1 = 0.5;
      }
  }
			if (year1 >= 7 && months1 >= 2.5) {
    document.getElementById("nextheatcalculation").innerHTML = "Your wolf will be " + year1 + " years(s) and " + month1 + "month(s) old. Unfortunately, female wolves cannot breed after the age of 7 years and 2 months old.";
  } 
  		else {
  document.getElementById("nextheatcalculation").innerHTML = "Your wolf will be " + year1 + " years(s) and " + month1 + " month(s) old!"; 
  }
}
}
