function random() {
    return Math.floor(Math.random() * 3) + 1;
}
function combinations(player, computer) {
    if (player === computer) {
        return "It's a tie!"
    }
    else if (player === 1 && computer === 3 || player === 2 && computer === 1 || player === 3 && computer == 2) {
        return "Player wins!"
    }
    else {
        return "Computer wins!"
    }
}

let player;
let computer;
let click;


 document.getElementById("rock").addEventListener("click", function(){
    document.getElementById("player").innerHTML = "ROCK";
    player = 1;
    computer = random();
    combinations(player, computer)
    click = true;
    console.log(player);
    console.log(computer);
    console.log(combinations(player, computer));
 });

 document.getElementById('paper').addEventListener("click", function(){
     document.getElementById("player").innerHTML = "PAPER";
     player = 2;
     computer = random();
     combinations(player, computer);
     click = true
     console.log(player);
     console.log(computer);
     console.log(combinations(player, computer));
 });

 document.getElementById('scissors').addEventListener("click", function(){
     document.getElementById("player").innerHTML = "SCISSORS!";
     player = 3;
     computer = random();
     click = true;
     console.log(player);
     console.log(computer);
     console.log(combinations(player, computer));
 });


