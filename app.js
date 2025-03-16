// 1st Method is prefered. used 99% of the time
console.log(document.querySelector("#header"));
console.log(document.querySelector(".header"));
console.log(document.querySelector("h1"));

// 2nd Method (Id use)
console.log(document.getElementById("header"));

// Change target element / HTML / Content
document.querySelector("h1").innerHTML = "Michael";
document.querySelector("h1").innerHTML += "-Angelo";

// Change CSS
document.querySelector("h1").style.backgroundColor = "red";
document.querySelector("h1").style.fontSize = "40px";

function changeButtonToGreen() {
  document.querySelector("button").style.backgroundColor = "green";
}

function toggleSidebar() {
  document.querySelector('body').classList.toggle("open")
}