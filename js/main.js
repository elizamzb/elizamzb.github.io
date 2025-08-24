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

function moreLess() {
  var element = document.getElementById("moreOrLess");
  var buttonText = document.getElementById("buttonTextMore")
  if (element.style.display === "block") {
    buttonText.innerHTML = "more";
    element.style.display = "none";
  } else {
    element.style.display = "block";
    buttonText.innerHTML = "less";
  }
}
