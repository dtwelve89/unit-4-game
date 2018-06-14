// Random Functions for Target Score (value between 19 - 120) and Crystals (value between 1 - 12)

function randomTarget(){
    return Math.floor(Math.random() * (120 - 19 + 1)) + 19;
}

function randomCrystal(){
    return Math.floor(Math.random() * 12) + 1;
}

// Assigning Random Values to All Crystals

var blue = randomCrystal();
console.log(blue);

var green = randomCrystal();
console.log(green);

var orange = randomCrystal();
console.log(orange);

var pink = randomCrystal();
console.log(pink);

// Function for Target Number

var targetNumber = randomTarget();

function updateTarget(){
    $("#target-number").text("Match: " + targetNumber);
}

// Functions for Wins

var wins = 0;

function updateWins(){
    $("#wins").text("Wins: " + wins);    
}

function youWin(){
    alert("YOU WIN!")
    wins++;
    updateWins();
    updateGame();
}

// Functions for Loses

var loses = 0;

function updateLoses(){
    $("#loses").text("Loses: " + loses);    
}

function youLose(){
    loses++;
    updateLoses();
    updateGame();
}

// Function for Game Update

function updateGame(){
    counter = 0;
}

// Function that adds cyrstal value to Total Score when Image Clicked 

$("#blueimg").on("click", function(){
    counter += blue;
    updateCounter();
});

$("#greenimg").on("click", function(){
    counter += green;
    updateCounter();
});

$("#orangeimg").on("click", function(){
    counter += orange;
    updateCounter();
});

$("#pinkimg").on("click", function(){
    counter += pink;
    updateCounter();
});

// Counter Function and Outcomes

var counter = 0;

    if (counter === targetNumber){
        youWin();
    }

    else if (counter > targetNumber){
        youLose();
    }

function updateCounter(){
    $("#counter").text(counter);
}

// Game Initializers
updateTarget();
updateCounter();
updateWins();
updateLoses();