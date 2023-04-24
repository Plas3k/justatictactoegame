<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Tic Tac Toe</title>
		<style>
			body {
				font-family: Arial, sans-serif;
			}

			.board {
				display: grid;
				grid-template-columns: repeat(3, 1fr);
				grid-gap: 10px;
				margin-bottom: 20px;
			}

			.cell {
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 3em;
				background-color: #eee;
				cursor: pointer;
			}

			.cell:hover {
				background-color: #ddd;
			}

			.cell[data-index="0"],
			.cell[data-index="1"],
			.cell[data-index="2"] {
				border-top: none;
			}

			.cell[data-index="6"],
			.cell[data-index="7"],
			.cell[data-index="8"] {
				border-bottom: none;
			}

			.cell[data-index="0"],
			.cell[data-index="3"],
			.cell[data-index="6"] {
				border-left: none;
			}

			.cell[data-index="2"],
			.cell[data-index="5"],
			.cell[data-index="8"] {
				border-right: none;
			}

			.reset {
				margin: 10px 0;
				font-size: 1.2em;
				padding: 10px;
				background-color: #f44336;
				color: #fff;
				border: none;
				border-radius: 5px;
				cursor: pointer;
			}

			.reset:hover {
				background-color: #d32f2f;
			}

			.reset:focus {
				outline: none;
			}

			.reset:active {
				transform: translateY(2px);
			}
		</style>
	</head>
	<body>
		<div class="board">
			<div class="cell" data-index="0"></div>
			<div class="cell" data-index="1"></div>
			<div class="cell" data-index="2"></div>
			<div class="cell" data-index="3"></div>
			<div class="cell" data-index="4"></div>
			<div class="cell" data-index="5"></div>
			<div class="cell" data-index="6"></div>
			<div class="cell" data-index="7"></div>
			<div class="cell" data-index="8"></div>
		</div>
		<button class="reset" id="reset">Recomeçar</button>
		<script>
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
alert(O jogador ${currentPlayer} Won!);
return;
}
}
if (board.every(cell => cell !== '')) {
gameover = true;
alert('Tie!');
}
}

function switchPlayer() {
currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

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
