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
  var less = document.getElementById("less");
  var more = document.getElementById("more");
  var buttonText = document.getElementById("buttonTextMore")
  if (more.style.display === "block") {
    buttonText.innerHTML = "more";
    less.style.display = "block";
    more.style.display = "none";
  } else {
    less.style.display = "none";
    more.style.display = "block";
    buttonText.innerHTML = "less";
  }
}
