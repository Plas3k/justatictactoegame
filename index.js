let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameover = false;
const cells = document.querySelectorAll('.cell');
const resetButton = document.querySelector('#reset');

function handleClick(e) {
	const cell = e.target;
	const index = cell.getAttribute('data-index');
	if (board[index] === '' && !gameover) {
		board[index] = currentPlayer;
		cell.textContent = currentPlayer;
		cell.style.color = currentPlayer === 'X' ? 'blue' : 'red';
		checkWin();
		switchPlayer();
	}
}

function checkWin() {
	const winningCombos = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];
	for (let i = 0; i < winningCombos.length; i++) {
		const [a, b, c] = winningCombos[i];
		if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
			gameover = true;
			cells[a].style.color = cells[b].style.color = cells[c].style.color = 'green';
			alert(`O jogador ${currentPlayer} venceu!`);
			return;
		}
	}
	if (board.every(cell => cell !== '')) {
		gameover = true;
		alert('Empate!');
	}
}

function switchPlayer() {
	currentPlayer = currentPlayer === 'X' ? 'O' :
  
  function resetGame() {
	board = ['', '', '', '', '', '', '', '', ''];
	currentPlayer = 'X';
	gameover = false;
	cells.forEach(cell => {
		cell.textContent = '';
		cell.style.color = 'black';
	});
}
  cells.forEach(cell => {
cell.addEventListener('click', handleClick);
});

resetButton.addEventListener('click', resetGame);

