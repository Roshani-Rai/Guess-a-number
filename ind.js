
const numslot=document.querySelector(".number");
const button=document.querySelector("#sub");
const butt=document.querySelector("#new");
const prev=document.querySelector("#prev");
const rem=document.querySelector("#rem");
const msg=document.querySelector(".msg");
let numGuess=0;
const prevs=[];

const generateNum =()=>{
    const nums= Math.floor(((Math.random())*100)+1);
    console.log(nums);
return nums;
};
 let rand=generateNum();
const checkValid=(guess)=>{
if(isNaN(guess)){
alert("Entered Valid number");
numslot.value='';
}
else if(guess<1){
alert("Please enter a number greater than 1");
numslot.value='';
}
else if(guess>100){
    alert("Please enter a number less than 100");
    numslot.value='';
}
else{
prevs.push(guess);
numGuess++;
if(numGuess===11){
    displayGuess();
   displayMess(`Game over . Random number is ${rand}`);
   endGame();
}
else{
    displayGuess();
    checkguess(guess,rand); 
}
}
};

function displayGuess(){
    numslot.value='';
 prev.innerText=` Previous Guess : ${prevs} `;
 rem.innerText=`Remannig Guess : ${10-numGuess}`;
}

const checkguess=(guess)=>{
if(guess == rand){
displayMess(`Congratulations! Your guessed Right.`);
endGame();
}
else if(guess > rand){
    displayMess(`Your Guessed is Too high!`);
}
else{
    displayMess(`Your Guessed is Too small!`);
}
};

let play=true;
 const playGame=()=>{
    if(play){
 const guess=numslot.value;
 console.log(guess);
checkValid(guess);
 }
};

const endGame=()=>{
numslot.disabled=true;
play=false;
};

const displayMess=(message)=>{
console.log(message);
msg.innerText=message;
};

const newGame=()=>{
numslot.value='';
numslot.disabled=false;
play=true;
numGuess=0;
rem.innerText=`Remmainng Guess: ${10}`;
prev.innerText=`Previous Guess:`;
displayMess(``);
rand=generateNum();
};
butt.addEventListener("click", newGame);
button.addEventListener("click", playGame);
