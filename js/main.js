function darkLightMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  var buttonText = document.getElementById("buttonText")
   if (buttonText.innerHTML === "dark mode") {
    buttonText.innerHTML = "light mode";
  } else {
    buttonText.innerHTML = "dark mode";
  }
} 
