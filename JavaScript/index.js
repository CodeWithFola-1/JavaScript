/*

let len = 5;
let bre = 2;

area1 = len * bre

console.log(area1)


let num = 5;
let num2 = 2;

area2 = len + bre

console.log(area2)

let numb = 5;
let numb2 = 2;

area3 = len - bre

console.log(area3)


let number1 = 5;
let number2 = 2;

area4 = len * bre

console.log(area4)*/


/*

var VotingAge = 19;

if (VotingAge >= 18){
    console.log("You can vote")
}else{
    console.log("You cannot vote")
}



/*CONDITIONS FOR ENTERING UNI 
var Age = 16;
var Paidtition = true;
var Paidtition = true;
var HaveCredits = false;
var PassedJamb = true;


if (Age && Paidtition && HaveCredits && PassedJamb){
    console.log("You can enter Uni")
}else{
    console.log("You are too dumb to enter Uni")
}


/*CONDITIONS FOR TRAVELLING */
/*
var ValidPassport = true;
var Visa = true; 
var FlightBooking = true;
var HotelReservation = true;

if(ValidPassport && Visa && FlightBooking && HotelReservation){
    console.log("You may travel")
}
else{
    console.log("You cannot travel")
}
*/


/*
var grade = 78;

if(grade >0 && grade <=39){
    console.log("You get an F")
}

else if(grade >40 && grade <=44){
    console.log("You get an E")
}

else if(grade >45 && grade <=54){
    console.log("You get an D")
}

else if(grade >55 && grade <=59){
    console.log("You get an C")
}

else if(grade >60 && grade <=75){
    console.log("You get an B")
}

else{
    console.log("You get an A")
}
*/


let score = 70;
let Grade;

switch (true) {
    case score >=70 && score <=90:
        Grade = "A";
        break;

 case score >=80:
        Grade = "B";
        break;

         case score >=70:
        Grade = "C";
        break;

         case score >=60:
        Grade = "D";
        break;

         case score >=50:
        Grade = "E";
        break;

        case score <=40:
        Grade = "F";
        break;

        
}

console.log("Grade:", Grade);


