function xO(moves) {
    const board = [[false, false, false],
                   [false, false, false],
                   [false, false, false]]
    let mark = "X";

    function changeMark() {
        mark = mark == 'X' ? 'O' : 'X';
    }

    function winner() {
        if (board[0][1] == board[0][2] && board[0][2] == board[0][0] && board[0][0]) return true;
        if (board[1][1] == board[1][2] && board[1][2] == board[1][0] && board[1][0]) return true;
        if (board[2][1] == board[2][2] && board[2][2] == board[2][0] && board[2][0]) return true;
        if (board[1][0] == board[0][0] && board[0][0] == board[2][0] && board[2][0]) return true;
        if (board[1][1] == board[0][1] && board[0][1] == board[2][1] && board[2][1]) return true;
        if (board[1][2] == board[0][2] && board[0][2] == board[2][2] && board[2][2]) return true;
        if (board[0][0] == board[2][2] && board[2][2] == board[1][1] && board[1][1]) return true;
        if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[2][0]) return true;
        return false
    }

    function isFull() {
        for (let row of board) {
            if (row.some((x) => x == false)) return false;
        }
        return true;
    }

    function isNotFree(r, c) {
        if (board[r][c] != false) {
            console.log("This place is already taken. Please choose another!");
            return true;
        }
        return false;
    }

    for (let move of moves) {
        const [r, c] = move.split(' ');
        if (isNotFree(r, c)) continue;
        board[r][c] = mark;
        if (winner()) break;
        if (isFull()) break;
        changeMark();
    }

    if (winner()) {
        console.log(`Player ${mark} wins!`);
    } else console.log("The game ended! Nobody wins :(")

    for (let row of board) {
        console.log(row.join('\t'));
    }
}

xO(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]
)

xO(["0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"]
)
xO(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]
)