// create a variable called speedLimit and another called mySpeed
// set their values to numbers between 1 and 100
var speedLimit = 50;
var mySpeed= 65;

// using a conditional, determine if mySpeed is greater than the speedLimit
if (mySpeed > speedLimit){
    // if true, print "Slow Down! Mom is mad!" to the console
    console.log("Slow Down! Mom is mad!");
    // if mySpeed is equal to the speedLimit, print "Everyone is happy!" to the console
} else if (mySpeed === speedLimit) {
    console.log("Everyone is happy!");
    // if mySpeed is less than the speedLimit, print "Speed up! Dad is mad!"
} else {
    console.log("Speed up! Dad is mad!");
}

//7 min 

// create two variables, one named alarmSet, the other openDoor
// set them to a boolean value
var alarmSet = true;
var openDoor = false;

// using a conditional, determine if alarm is set. 
if(alarmSet && openDoor){
    // if alarm is set and door is set to open, print "Sound Alarm!" to the console
    console.log("Sound Alarm!");
    // otherwise, print "Everything is fine." to the console.
} else {
    console.log("Everything is fine.");
}




// create two variables, username and password
var username;
var password;
// create a conditional, if the username is "Tommy123" and the password is "12345"
// or the username is "Timmy456" and the password is "6789", print "Admin Login Successful" to the console
if((username === "Tommy123" && password === "12345") || (username === "Timmy456" && password === "6789")){
    console.log("Admin Login Successful"); 
    // otherwise, print "Admin Access Denied"
} else {
    console.log("Admin Access Denied");
}




// write code that will set the value of studentClass based on studentGrade
// studentGrade will be K-12
// K-6 will be Elementary
// 7-8 will be Middle
// 9 will be Freshman, 10 Sophomore, 11 Junior, 12 Senior
// Anything other than these values will return "Error" to the console
var studentGrade = 10;
var studentClass;
switch(studentGrade){
    case 'K':
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        studentClass = "Elementary";
        break;
    case 7:
    case 8:
        studentClass = "Middle";
        break;
    case 9:
        studentClass = "Freshman";
        break;
    case 10:
        studentClass = "Sophomore";
        break;
    case 11:
        studentClass = "Junior";
        break;
    case 12:
        studentClass = "Senior";
        break;
    default:
        console.log("Error");
}
console.log(studentClass)






// write a for loop that will iterate backwards from 10 to -10
//25 min


// write a do/while loop that prints 1 through 50


// edit the previous do/while loop so that it prints the remainder when the loop number is divided by 4


// Someone messed up the following for loop
// fix the following infinite loop, uncomment to test
/* 
    for(let i = 11; i > 10; i++){
        console.log(i);
    } 
*/










// write code that will set the value of studentClass based on studentGrade
// studentGrade will be K-12
// K-6 will be Elementary
// 7-8 will be Middle
// 9 will be Freshman, 10 Sophomore, 11 Junior, 12 Senior
// Anything other than these values will return "Error" to the console





// write a for loop that will iterate backwards from 10 to -10



// write a do/while loop that prints 1 through 50


// edit the previous do/while loop so that it prints the remainder when the loop number is divided by 4


// Someone messed up the following for loop
// fix the following infinite loop, uncomment to test
/* 
    for(let i = 11; i > 10; i++){
        console.log(i);
    } 
*/





