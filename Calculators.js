function calculateHeat() {
  var year1 = Number(document.getElementById("year1").value);
  var month1 = Number(document.getElementById("month1").value);
  var cooldown1 = Number(document.getElementById("cooldown1").value);
  var i = 0.5;

  if (year1 == 7 && month1 > 2) {
    document.getElementById("nextheatcalculation").innerHTML = "Female wolves cannot be bred past the age of 7 years and 2 months.";
  } else if (year1 >= 8) {
    document.getElementById("nextheatcalculation").innerHTML = "Wolves cannot live past the age of 8 years.";
  } else if (year1 < 1) {
    document.getElementById("nextheatcalculation").innerHTML = "Wolves cannot breed until they are 1 year old.";
  } else if (month1 > 12 || month1 < 0) {
    document.getElementById("nextheatcalculation").innerHTML = "Months must be between 0 and 12.";
  } else if (cooldown1 > 20 || cooldown1 < 0) {
    document.getElementById("nextheatcalculation").innerHTML = "Cooldown must be between 1 and 20.";
  }

  else {
    month1 + cooldown1;
    while (cooldown1 > 0) {
      month1 += i;
      cooldown1--;
      if (month1 == 12) {
        year1++;
        month1 = 0;
      } else if (month1 == 12.5) {
        year1++;
        month1 = 0.5;
      }
    }
    if (year1 >= 7 && month1 >= 2.5) {
      document.getElementById("nextheatcalculation").innerHTML = "Your wolf will be " + year1 + " years(s) and " + month1 + "month(s) old. Unfortunately, female wolves cannot breed after the age of 7 years and 2 months old.";
    } else {
      document.getElementById("nextheatcalculation").innerHTML = "Your wolf will be " + year1 + " years(s) and " + month1 + " month(s) old!";
    }
  }
}


function calculateLifetime() {
  var year2 = Number(document.getElementById("year2").value);
  var month2 = Number(document.getElementById("month2").value);
  var cooldown2 = Number(document.getElementById("cooldown2").value);
  var i = 0.5;
  var totalheats = 0;
  var iterate = true;

if (year2 == 7 && month2 > 2) {
    document.getElementById("LifetimeHeatsCalculation").innerHTML = "Female wolves cannot be bred past the age of 7 years and 2 months.";
  } else if (year2 >= 8) {
    document.getElementById("LifetimeHeatsCalculation").innerHTML = "Wolves cannot live past the age of 8 years.";
  } else if (year2 < 1) {
    document.getElementById("LifetimeHeatsCalculation").innerHTML = "Wolves cannot breed until they are 1 year old.";
  } else if (month2 > 12 || month2 < 0) {
    document.getElementById("LifetimeHeatsCalculation").innerHTML = "Months must be between 0 and 12.";
  } else if (cooldown2 > 20 || cooldown2 < 0) {
    document.getElementById("LifetimeHeatsCalculation").innerHTML = "Cooldown must be between 1 and 20.";
  }

  else {
    while (iterate == true) {
      month2 + cooldown2;
      while (cooldown2 > 0) {
        month2 += i;
        cooldown2--;
        if (month2 == 12) {
          year2++;
          month2 = 0;
        }
      }
      if (year2 >= 8 || year2 >= 7 && month2 >= 2) {
        document.getElementById("LifetimeHeatsCalculation").innerHTML = "Your wolf has " + totalheats + " heat(s) left.";
        iterate = false
      } else {
        totalheats++;
        if (document.getElementById("IPD").checked == true) {
          cooldown2 = 20;
        } else {
          cooldown2 = 24;
        }
      }
    }
  }
}


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
}

