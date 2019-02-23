let player;
let computer;

function random() {
    return Math.floor(Math.random() * 3) + 1;
}

function combinations(player, computer) {
    if (player === computer) {
        return document.getElementById("result").innerHTML = "It's a tie!"
    }
    else if (player === 1 && computer === 3 || player === 2 && computer === 1 || player === 3 && computer == 2) {
        return document.getElementById("result").innerHTML = "You win!"
    }
    else {
        return document.getElementById("result").innerHTML = "The computer won!"
    }
}

function defineComp(number) {
    if (number === 1) {
        return document.getElementById("computer").innerHTML = "Computer picked...ROCK!";
    }
    else if (number === 2) {
        return document.getElementById("computer").innerHTML = "Computer picked...PAPER!";
    }
    else {
        return document.getElementById("computer").innerHTML = "Computer picked...SCISSORS!";
    }
}

function definePlayer(number) {
    if (number === 1) {
        return document.getElementById("player").innerHTML = "Player picked...ROCK!";
    }
    else if (number === 2) {
        return document.getElementById("player").innerHTML = "Player picked...PAPER!";
    }
    else {
        return document.getElementById("player").innerHTML = "Player picked...SCISSORS!";
    }
}


document.getElementById("rock").addEventListener("click", function () {
    player = 1;
    computer = random();
    combinations(player, computer);
    definePlayer(player);
    defineComp(computer);
    console.log(player);
    console.log(computer);
    console.log(combinations(player, computer));
});

document.getElementById('paper').addEventListener("click", function () {
    player = 2;
    computer = random();
    combinations(player, computer);
    definePlayer(player);
    defineComp(computer);
    console.log(player);
    console.log(computer);
    console.log(combinations(player, computer));
});

document.getElementById('scissors').addEventListener("click", function () {
    player = 3;
    computer = random();
    definePlayer(player);
    defineComp(computer);
    console.log(player);
    console.log(computer);
    console.log(combinations(player, computer));
});

$("#rock").click(function () {
    $("#player:hidden").slideDown(300)
    $("#computer:hidden").slideDown(300)
    $("#result:hidden").slideDown(300)
});

