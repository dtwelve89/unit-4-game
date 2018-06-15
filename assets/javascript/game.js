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

function youWin(){
    wins++;
    updateWins();
    updateGame();
}

function updateWins(){
    $("#wins").text("Wins: " + wins);    
}

// Functions for Loses

var loses = 0;

function youLose(){
    loses++;
    updateLoses();
    updateGame();
}

function updateLoses(){
    $("#loses").text("Loses: " + loses);    
}

// Function for Game Update

function updateGame(){
    counter = 0;
    updateCounter();
    targetNumber = randomTarget();
    updateTarget();
    blue = 0;
    blue = randomCrystal();
    green = 0;
    green = randomCrystal();
    orange = 0;
    orange = randomCrystal();
    pink = 0;
    pink = randomCrystal();
    console.log(blue);
    console.log(green);
    console.log(orange);
    console.log(pink);
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

function updateCounter(){
    $("#counter").text(counter);

    if (counter === targetNumber){
        youWin();
    }

    else if (counter > targetNumber){
        youLose();
    }

    console.log(counter);
    console.log(targetNumber);

}

// Game Initializers

updateTarget();
updateCounter();
updateWins();
updateLoses();