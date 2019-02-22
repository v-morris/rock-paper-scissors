
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

let player = random();
let computer = random();


console.log("Player: " + player);
console.log("Computer: " + computer);
console.log(combinations(player, computer));

