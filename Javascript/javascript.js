const DAYS_OF_THE_WEEK = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MALE_NAMES = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const FEMALE_NAMES = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var akanName;
var gender;
var datenow;
var y

// FETCH DATE FROM INPUT
function getDate () {
    datenow = document.getElementById("Date").value;

    datenow = datenow.toString();
    var CC = datenow.slice(0, 2);
console.log(CC)
CC = parseInt(CC);
console.log(CC);
var YY = datenow.slice (2, 4);
YY = parseInt(YY);
var MM = datenow.slice(5, 7);
MM = parseInt(MM);
var DD = datenow.slice(8, 10);
DD= parseInt(DD);

y = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;

y = Math.floor(y);

// return datenow;
  }



// CALCULATE DAY OF BIRTH



// // y = Math.round(y);

// y = 4;

// FETCH GENDER

function getGenderValue () {
    gender = document.querySelector("#floatingSelect").value;
    console.log(gender);
    

return gender;
}



// CREATE AKAN NAME

function getAkanName(){
    getDate ();
    if (!datenow){alert("Please pick your birthday");
    return false;
    };
    
    console.log(y);

    if (gender === "Male"){
 
      akanName = MALE_NAMES[y];
      document.getElementById("result-button").innerHTML = "You were born on a " + DAYS_OF_THE_WEEK[y] + ". Your Akan name is " + akanName;
    }
    else if (gender === "Female"){
        akanName = FEMALE_NAMES[y];
        document.getElementById("result-button").innerHTML = "You were born on a " + DAYS_OF_THE_WEEK[y] + ". Your Akan name is " + akanName;}
else{alert("Please Pick Your Gender");

}

}
// console.log(CC);
// // console.log(date.value.toString());
// console.log(YY);
// console.log(MM);
// console.log(DD);
// console.log(y);
// console.log(datenow);
  



// https://www.youtube.com/watch?v=E7lhNyG1wE0
