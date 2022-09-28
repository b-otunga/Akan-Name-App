const DAYS_OF_THE_WEEK = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const SWA_NAMES = ["Jumatatu", "Jumanne", "Jumatano", "Alhamisi", "Ijumaa", "Jumamosi", "Jumapili"];
const SHORT_NAMES = ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sato", "Sun"];
var akhaiName
var gender

let date = document.querySelector("#Date");
console.log(date);

// fetch date figure from user section in string form
date.valueAsDate = new Date();

date.onchange = function(){
   console.log(date.value);}

// fetch user's gender selection

function getGenderValue () {
    gender = document.querySelector("#floatingSelect").value;
    {console.log(gender);
    
}
return gender;
}
// determining day of birth



// getting Akhai name

function getAkhaiName(){
    if (gender === "Male"){
    indexOfDay = DAYS_OF_THE_WEEK.indexOf("Tuesday");
      akhaiName = SWA_NAMES[indexOfDay];
      console.log("Your Akhai Name is " + akhaiName);
    }
    else if (gender === "Female"){
     indexOfDay = DAYS_OF_THE_WEEK.indexOf("Saturday");
        akhaiName = SHORT_NAMES[indexOfDay];
       console.log("Your Akhai Name is " + akhaiName);}
else{console.log("Please Pick Your Gender");

}
    }




// https://www.youtube.com/watch?v=E7lhNyG1wE0
