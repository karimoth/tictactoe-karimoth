
const { uuid } = require('uuid');
const { v1 } = require('bubble-sort-karimoth');
const { v2 } = require('random-numbers-karimoth');

// ticTacToe.js
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];

let currentPlayer = 'X';

function printBoard() {
    console.log(board.map(row => row.join(' | ')).join('\n---------\n'));
}

function checkWin() {
    // Check rows, columns, and diagonals for a winner
    // Code for win-checking logic goes here
}

function switchPlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function makeMove(row, col) {
    if (board[row][col] === ' ') {
        board[row][col] = currentPlayer;
        if (checkWin()) {
            console.log(`${currentPlayer} wins!`);
            rl.close();
        } else {
            switchPlayer();
        }
    } else {
        console.log('Invalid move, try again.');
    }
}

rl.on('line', input => {
    const [row, col] = input.split(' ').map(Number);
    makeMove(row, col);
    printBoard();
});

printBoard();


module.exports = { printBoard };
