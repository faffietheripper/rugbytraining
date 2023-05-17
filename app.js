
/*let myName = prompt ("Whats your name?");

console.log("Hello" + myName);

let time = prompt ("Whats hour if the day is it?(0-23)");

console.log(time);

if (time<=11) {
    console.log("Good morning" + myName +"!") 
} else if (time <= 18)  {
    console.log("Good afternoon")
} else if (time < 24) {
    console.log("Good evening!")
} else {
    console.log("Thats not a valid time")
}*/



/*let myExperience = prompt (" Out of the following options,how experienced are you ? Beginner, Amateur, Semi Pro, Professional ?")
console.log(myExperience);

let message;

 if (myExperience == "Beginner"){
    message = "Logged in as" + myName + "(Beginner Level)"
 }  else if (myExperience == "Amateur"){
    message = "Logged in as" + myName + "(Amateur Level)"
 }  else if (myExperience == "Semi Pro"){
        message = "Logged in as" + myName + "(Semi Pro Level)"
 }   else if (myExperience == "Professional"){
    message = "Logged in as" + myName + "(Professional Level)"
 } 
 */

 //this is a function to get name 

 function getName(){
    let myName = prompt ("What is your name?");
    document.write("Hello " + myName);
 }
       
 //this is a function to present rugby level
function getLevel() {
    let level = prompt ("What rugby level are you?");

    let message;

    if (level == "amateur"){
        message = " Hey there, noobie";
    } else if (level == "semi pro"){
        message = " almost there king, keep going";
    } else if (level == "professional"){
        message = " ohhh hail the king";
    } else {
        message = "bro you on the wrong page ahahhahhah";
    }

    document.write(message)
}

//function to ask how often one goes to practice
function getRugbyTraining(){
let response = prompt("How often do you go for training?")

// while (response != 4){
//     response = prompt ("How often do you go for training?")

while(response < 4){
        
}

    if(response != 4){
        alert("Are you not embarrassed?")
       document.write ("thats not enough bro");
    }
    else {
     alert("Well done mate. Keep going");
     document.write ("Keep going bossman");
    }

}

 
//getRugbyTraining()

/*function guessANumber() {
    let answer;
  
    // while the answer is incorrect, keep asking
    while (answer != 3) {
      answer = prompt("Guess a number between 0-10");
  
      if (answer != 3) {
        alert("Nope! Try again");
      } else {
        alert("Nice work! My favourite number is 3!");
        document.write("You guessed my number!");
      }
    }
  }

  guessANumber ()*/

