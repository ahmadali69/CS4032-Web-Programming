let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    if (playerChoice === computerChoice) {
        $('#result').text("It's a tie!");
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerScore++;
        $('#result').text(`You win! ${playerChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        $('#result').text(`You lose! ${computerChoice} beats ${playerChoice}`);
    }

    $('#score').html(`Player: ${playerScore}<br>Computer: ${computerScore}`);
}
