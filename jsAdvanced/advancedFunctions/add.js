// function solution(n) {
//     return function num(num) {
//         return num + n
//     }
// }
function solution(x) {
    // let n = x;
    return (n) => x + n;
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
