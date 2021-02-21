function calculateMale() {
  var year3 = Number(document.getElementById("year3").value);
  var month3 = Number(document.getElementById("month3").value);

  // Conditionals
  if (year3 >= 8) {
    document.getElementById("UnbredHeatsCalculation").innerHTML = "Wolves cannot live past the age of 8 years.";
  } else if (year3 < 1) {
    document.getElementById("UnbredHeatsCalculation").innerHTML = "Wolves cannot breed until they are 1 year old.";
  } else if (month3 > 12 || month3 < 0) {
    document.getElementById("UnbredHeatsCalculation").innerHTML = "Months must be between 0 and 12.";
  }

  else {
    if (year3 == 1 || year3 == 2 || year3 == 3 || year3 == 4 || year3 == 5 || year3 == 6 || year3 == 7) {
     	if (month3 == 0 || month3 == 6) {
      document.getElementById("UnbredHeatsCalculation").innerHTML = "Your wolf will be in heat for the next 3 rollovers!";
      }
      else if (month3 == 0.5 || month3 == 6.5) {
      document.getElementById("UnbredHeatsCalculation").innerHTML = "Your wolf will be in heat for the next 2 rollovers!";
      } 
      else if (month3 == 1 || month3 == 7) {
      document.getElementById("UnbredHeatsCalculation").innerHTML = "Your wolf will be in heat for the next 1 rollovers!";
      } 
      else if (month3 == 1.5 || month3 == 7.5) {
      document.getElementById("UnbredHeatsCalculation").innerHTML = "Today is the last day of this wolf's heat!";
      } 
      else if (month3 == 2 || month3 == 8) {
      document.getElementById("UnbredHeatsCalculation").innerHTML = "This wolf is not in heat, but will be in 8 rollovers!";
      } 
      else if (month3 == 2.5 || month3 == 8.5) {
      document.getElementById("UnbredHeatsCalculation").innerHTML = "This wolf is not in heat, but will be in 7 rollovers!";
      } 
      else if (month3 == 3 || month3 == 9) {
      document.getElementById("UnbredHeatsCalculation").innerHTML = "This wolf is not in heat, but will be in 6 rollovers!";
      } 
      else if (month3 == 3.5 || month3 == 9.5) {
      document.getElementById("UnbredHeatsCalculation").innerHTML = "This wolf is not in heat, but will be in 5 rollovers!";
      } 
      else if (month3 == 4 || month3 == 10) {
      document.getElementById("UnbredHeatsCalculation").innerHTML = "This wolf is not in heat, but will be in 4 rollovers!";
      } 
      else if (month3 == 4.5 || month3 == 10.5) {
      document.getElementById("UnbredHeatsCalculation").innerHTML = "This wolf is not in heat, but will be in 3 rollovers!";
      } 
      else if (month3 == 5 || month3 == 11) {
      document.getElementById("UnbredHeatsCalculation").innerHTML = "This wolf is not in heat, but will be in 2 rollovers!";
      } 
      else if (month3 == 5.5 || month3 == 11.5) {
      document.getElementById("UnbredHeatsCalculation").innerHTML = "This wolf is not in heat, but will be in 1 rollovers!";
      }
  }
}
