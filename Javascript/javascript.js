const DAYS_OF_THE_WEEK = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const MALE_NAMES = [];
const FEMALE_NAMES = [];
var name = null

let date = document.querySelector("#Date");
console.log(date);

// fetch date figure from user section in string form
date.valueAsDate = new Date();

date.onchange = function(){
   console.log(date.value);}

// fetch user's gender selection

let gender = document.querySelector(".dropdown-menu");

gender.addEventListener("change", () => {XPathResult.innerText = selection.options[selection.selectedIndex].text});


console.log(gender)



