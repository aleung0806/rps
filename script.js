let plays = ['rock', 'paper', 'scissors'];

const buttons = document.querySelectorAll('.click')

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		const player = button.id;
		const computer = computerPlay();
		resetGame();
		document.querySelector('#player').src = `images/${player}.jpg`;
		document.querySelector('#computer').src = `images/${computer}.jpg`;
		document.querySelector('#presults').style['visibility'] = 'visible';
		setTimeout(function (){document.querySelector('#cresults').style['visibility'] = 'visible';
			}, 1000);
		document.querySelector('#final').innerHTML = playRound(player, computer);
		setTimeout(function (){document.querySelector('#final').style['visibility'] = 'visible';
			}, 1000);

  });
})

function resetGame(){
	document.querySelector('#cresults').style['visibility'] = 'hidden';
	document.querySelector('#presults').style['visibility'] = 'hidden';
	document.querySelector('#final').style['visibility'] = 'hidden';
}

function playRound(player, computer){
	if (player == 'rock' && computer == 'scissors' ||
		player == 'paper' && computer == 'rock' ||
		player == 'scissors' && computer == 'paper'){
			return 'Player Wins';
	}else if (computer == 'rock' && player == 'scissors' ||
		computer == 'paper' && player == 'rock' ||
		computer == 'scissors' && player == 'paper'){
			return 'Computer Wins';
	} else {
		return 'Tie';
	}
}

function computerPlay(){
	return plays[Math.floor(Math.random() * plays.length)];
}

