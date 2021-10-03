function solution() {
    let bufer = '';
    
    function append(el) {
        bufer += el;
    }

    function removeStart(n) {
        bufer = bufer.slice(n);
    }

    function removeEnd(n) {
        bufer = bufer.slice(0, -n);
    }

    function print() {
        console.log(bufer)
    }

    return {
        append,
        removeEnd,
        removeStart,
        print
    };
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
