const game = document.getElementById('game');
const status = document.getElementById('status');
const resetButton = document.getElementById('reset');
const gameMusic = document.getElementById('gameMusic');
const audioOnRadio = document.getElementById('on');
const audioOffRadio = document.getElementById('off');
let currentPlayer = 'X';
let gameBoard = Array(9).fill().map(() => Array(9).fill(''));
let mainBoard = Array(9).fill('');
let activeBoard = -1;
let isGameStarted = false;
let isAudioEnabled = true;

function createBoard() {
    game.innerHTML = '';
    for (let i = 0; i < 9; i++) {
        const board = document.createElement('div');
        board.className = 'board';
        board.dataset.boardIndex = i;
        for (let j = 0; j < 9; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.dataset.cellIndex = j;
            board.appendChild(cell);
        }
        game.appendChild(board);
    }
}

function handleClick(event) {
    const cell = event.target;
    if (!cell.classList.contains('cell')) return;
    
    const board = cell.parentElement;
    const boardIndex = parseInt(board.dataset.boardIndex);
    const cellIndex = parseInt(cell.dataset.cellIndex);

    if (activeBoard !== -1 && activeBoard !== boardIndex) return;
    if (cell.textContent !== '' || mainBoard[boardIndex] !== '') return;

    if (!isGameStarted && isAudioEnabled) {
        gameMusic.play();
        isGameStarted = true;
    }

    gameBoard[boardIndex][cellIndex] = currentPlayer;
    cell.textContent = currentPlayer;

    if (checkWin(gameBoard[boardIndex])) {
        mainBoard[boardIndex] = currentPlayer;
        board.classList.add('won-board');
    }

    if (checkWin(mainBoard)) {
        status.textContent = `Player ${currentPlayer} wins the game!`;
        game.removeEventListener('click', handleClick);
        if (isAudioEnabled) {
            gameMusic.pause();
        }
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    activeBoard = mainBoard[cellIndex] === '' ? cellIndex : -1;
    updateActiveBoard();
    updateStatus();
}

function checkWin(board) {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    return winPatterns.some(pattern =>
        board[pattern[0]] !== '' &&
        board[pattern[0]] === board[pattern[1]] &&
        board[pattern[1]] === board[pattern[2]]
    );
}

function updateActiveBoard() {
    document.querySelectorAll('.board').forEach((board, index) => {
        if (index === activeBoard || activeBoard === -1) {
            board.classList.add('active-board');
        } else {
            board.classList.remove('active-board');
        }
    });
}

function updateStatus() {
    if (activeBoard === -1) {
        status.textContent = `Player ${currentPlayer}'s turn (any board)`;
    } else {
        status.textContent = `Player ${currentPlayer}'s turn (board ${activeBoard + 1})`;
    }
}

function resetGame() {
    currentPlayer = 'X';
    gameBoard = Array(9).fill().map(() => Array(9).fill(''));
    mainBoard = Array(9).fill('');
    activeBoard = -1;
    isGameStarted = false;
    if (isAudioEnabled) {
        gameMusic.pause();
        gameMusic.currentTime = 0;
    }
    createBoard();
    updateStatus();
    game.addEventListener('click', handleClick);
}

function handleAudioToggle() {
    isAudioEnabled = audioOnRadio.checked;
    if (isAudioEnabled) {
        if (isGameStarted) {
            gameMusic.play();
        }
    } else {
        gameMusic.pause();
    }
}

createBoard();
game.addEventListener('click', handleClick);
resetButton.addEventListener('click', resetGame);
audioOnRadio.addEventListener('change', handleAudioToggle);
audioOffRadio.addEventListener('change', handleAudioToggle);
updateStatus();

// Ensure music loops
gameMusic.loop = true;