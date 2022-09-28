const DAYS_OF_THE_WEEK = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const MALE_NAMES = ["Jumatatu", "Jumanne", "Jumatano", "Alhamisi", "Ijumaa", "Jumamosi", "Jumapili"];
const FEMALE_NAMES = ["Mon", "Tue", "Wed", "Thurs", "Fri", "Satu", "Sun"];
var akhaiName = null;

let date = document.querySelector("#Date");
console.log(date);

// fetch date figure from user section in string form
date.valueAsDate = new Date();

date.onchange = function(){
   console.log(date.value);}

// fetch user's gender selection

function getGenderValue () {
    var gender = document.querySelector("#floatingSelect").value;
    console.log(gender);
}

// determining day of birth



// getting Akhai name

function getAkhaiName(){
    if (gender === "Male"){
        indexOfDay = DAYS_OF_THE_WEEK.indexOf["Tuesday"];
        akhaiName = MALE_NAMES[indexOfDay];
    else if (gender === "Female"){
        akhaiName = MALE_NAMES[indexOfDay];
        console.log(akhaiName);
    }

}



// https://www.youtube.com/watch?v=E7lhNyG1wE0
