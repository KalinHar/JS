function notations(arr) {
    let nums = [];
    let notNums = false;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == "number") {
            nums.push(arr[i]);
        } else {
            let sign = arr[i];
            if (nums.length < 2) {
                console.log("Error: not enough operands!");
                notNums = true;
                break;
            }
            let num2 = nums.pop();
            let num1 = nums.pop();
            const operation = {
                '+': num1 + num2,
                '-': num1 - num2,
                '*': num1 * num2,
                '/': num1 / num2
            };
            nums.push(operation[sign]);
        }
    }
    if (nums.length > 1) {
        console.log("Error: too many operands!");
    }
    else if (!notNums) {
        console.log(nums[0]);
    }
}


// function solve(inputArr) {
//     let operands = [];
//     let wasWrong = false;
//     for (let index = 0; index < inputArr.length; index++) {
//         if (typeof inputArr[index] === 'number') {
//             operands.push(inputArr[index])
//         } else {
//             let operator = inputArr[index];
//             if (operands.length < 2) {
//                 console.log("Error: not enough operands!");
//                 wasWrong = true;
//                 break;

//             }
//             let operand2 = operands.pop();
//             let operand1 = operands.pop();
//             let result = applyOperation(operand1, operand2, operator);
//             operands.push(result);
//         }

//     }
//     if (operands.length > 1 && wasWrong === false) {
//         console.log("Error: too many operands!");
//     }
//     else if (wasWrong === false) {
//         console.log(operands[0]);
//     }


//     function applyOperation(operand1, operand2, operator) {
//         const arithmeticOperator = {
//             '+': () => operand1 + operand2,
//             '-': () => operand1 - operand2,
//             '*': () => operand1 * operand2,
//             '/': () => operand1 / operand2
//         }
//         return arithmeticOperator[operator]();
//     }


// }

notations([
    4,
    '+'
]);

notations([5,
    3,
    4,
    '*',
    '-'
])
