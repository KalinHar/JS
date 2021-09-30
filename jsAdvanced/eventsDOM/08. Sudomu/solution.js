function solve() {
    const cells = Array.from(document.querySelectorAll('input'));
    const size = Math.sqrt(cells.length);
    const [checkBtn, clearBtn] = Array.from(document.querySelectorAll('button'));
    checkBtn.addEventListener('click', check);
    clearBtn.addEventListener('click', clear);
    const result = document.querySelector('#check p');
    const tableBorder = document.querySelector('#exercise table');

    function clear(ev) {
        cells.map(c => c.value = '');
        result.textContent = '';
        tableBorder.style.border = '';
    }

    function isCorrect () {
        let correct = true;
        let board = [];
        for (let r = 0; r < size; r++) {
            board[r] = [];
            for (let c = 0; c < size; c++) {
                board[r][c] = cells[r * size + c].value;
                if (Number(board[r][c]) <= 0 || Number(board[r][c]) > size) {
                    correct = false;
                }
            }
        }
        for (let row of board) {
            if (new Set(row).size < size) {
                correct = false;
                break;
            }
        }
        if (correct) {
            for (let c = 0; c < size; c++) {
                let col = new Set();
                for (let r = 0; r < size; r++) {
                    col.add(board[r][c])
                }
                if (col.size < size) {
                    correct = false;
                    break;
                }
            }
        }
        return correct;
    }

    function check(ev) {
        if (isCorrect()) {
            tableBorder.style.border = "2px solid green";
            result.style.color = "green";
            result.textContent = "You solve it! Congratulations!";
        }else {
            tableBorder.style.border = "2px solid red";
            result.style.color = "red";
            result.textContent = "NOP! You are not done yet...";
        }
    }
}