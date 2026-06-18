
function checkPrice() {
  let ageInput = document.getElementById("ageInput");
  let age = parseInt(ageInput.value); 
  let showType = document.getElementById("showDropdown").value;
  let resultText = document.getElementById("result");

  resultText.textContent = "Ticket Price: ";

  if (isNaN(age) || age < 0) {
    resultText.textContent = "Please enter a valid age.";
    return; 
  }

  if (age < 12) {
    resultText.textContent = "CHILDREN UNDER 12 RECEIVE A DISCOUNT PRICE - 5";
  }

  else if (age >= 65) {
    resultText.textContent = "SENIORS 65+ RECEIVE A ELDER DISCOUNT PRICE - 7";
  }

  else if (showType === "matinee") {
    resultText.textContent = "STANDARD ADULT TICKET DURING DAY TIME SHOW HOURS - 10";
  }

  else {
    resultText.textContent += "STANDARD ADULT TICKET DURING EVENING PREMIUM SHOW HOURS - 15";
  }
}