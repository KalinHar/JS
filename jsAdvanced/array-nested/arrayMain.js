

//Examples: --------------------------------------------------------------
// Arrays Indexation
let arr = [];
arr[3.4] = 'Oranges'; // Setting values via non-integers using bracket notation (or dot notation) creates object properties instead of array elements
arr[-1] = 'Apples';
console.log(arr.length);                // 0
console.log(arr.hasOwnProperty(3.4));   // true
arr["1"] = 'Grapes';
console.log(arr.length);                // 2
console.log(arr); // [ <1 empty item>, 'Grapes', '3.4': 'Oranges', '-1': 'Apples' ]

let numbers = [10, 20, 30, 40, 50];
let [a, b, ...elems] = numbers;
console.log(a) // 10
console.log(b) // 20
console.log(elems) // [30, 40, 50] 

// Arrays - pop, push ...

let nums = [10, 20, 30, 40, 50, 60, 70];
console.log(nums.pop());  // 70
console.log(nums);     // [ 10, 20, 30, 40, 50, 60 ]

console.log(nums.push(80));
console.log(nums); // [ 10, 20, 30, 40, 50, 60, 80 ]

console.log(nums.shift()); // 10 (removed element)
console.log(nums);  // [ 20, 30, 40, 50, 60, 80 ]

console.log(nums.unshift(100, 200));
console.log(nums);  // [ 100, 200, 10, 20, 30, 40, 50, 60,80 ]


let array = [1, 2, 3, 4, 5];
let isEven = function(element) {
  // checks whether an element is even
  return element % 2 === 0;
};
console.log(array.some(isEven)); //tr


let array1 = [5, 12, 8, 130, 44];let found = array1.find(function(element) {
      return element > 10;
    });
    console.log(found); // 12
    

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;console.log(array1.reduce(reducer)); // 10
console.log(array1.reduce(reducer, 5)); // 15


//The includes() returns true if the given value is part of the array
let myArray = ["Peter", "George", "Mary"];
myArray.includes("George"); // true
myArray.includes("John"); // false

//The indexOf() returns the index where the given value is stored
//# Returns -1 if value is not found
myArray.indexOf("Mary"); // 2
myArray.indexOf("Nick"); // -1

//The slice() function creates new array from part of another
//# Note that the original array will not be modified
let myArray = ["one", "two", "three", "four", "five"];
console.log(myArray.slice(2)); // ["three","four","five"]
console.log(myArray.slice(2, 4)); // ["three","four"]
console.log(myArray.slice(-2)); // ["four", "five"]

//The splice() function adds/removes items to/from an array, and returns the removed item(s)
//# This function changes the original array
let nums = [1, 3, 4, 5, 6];
nums.splice(1, 0, 2); // inserts at index 1
console.log(nums); // [ 1, 2, 3, 4, 5, 6 ]
nums.splice(4, 1, 19); // replaces 1 element at index 4
console.log(nums); // [ 1, 2, 3, 4, 19, 6 ]
let el = nums.splice(2, 1); // removes 1 element at index 2
console.log(nums); // [ 1, 2, 4, 19, 6 ]
console.log(el); // [ 3 ]

//The fill() function fills all the elements of an array from a start index to an end index with a static value
let arr = [1, 2, 3, 4];// fill with 0 from position 2 until position 4
console.log(arr.fill(0, 2, 4)); // [1, 2, 0, 0]// fill with 5 from position 1
console.log(arr.fill(5, 1)); // [1, 5, 5, 5]console.log(arr.fill(6)); // [6, 6, 6, 6]


let arr = [1, 2, 3, 4];
arr.reverse();
console.log(arr); // [ 4, 3, 2, 1 ]


let elements = ['Fire', 'Air', 'Water'];console.log(elements.join()); // "Fire,Air,Water"
console.log(elements.join('')); // "FireAirWater"
console.log(elements.join('-')); // "Fire-Air-Water"
console.log(['Fire'].join(".")); // Fire


const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];
const numbers = num1.concat(num2, num3);
console.log(numbers); //  [1, 2, 3, 4, 5, 6, 7, 8, 9]


//The map() function creates new array by applying a function to every element
let myArr = ['one', 'two', 'three', 'four'];
let lengths = myArr.map(x => x.length);
console.log(lengths); // [3,3,5,4]

let numsAsStrings = ["5", "3", "14", "-2", "8"]
let nums = numsAsStrings.map(Number);
console.log(nums); // [5, 3, 14, -2, 8]
let incr = nums.map(x => x + 1);
console.log(incr); // [6, 4, 15, -1, 9]

//The filter() function creates new array from elements matching predicate
//# Predicate is a function returning a Boolean value (true or false)
let myArr = ['one', 'two', 'three', 'four'];
let longWords = myArr.filter(x => x.length > 3);
console.log(longWords); // ['three','four']

let nums = [5, -11, 3, -2, 8]
let positiveNums = nums.filter(x => x > 0);
console.log(positiveNums); // [5, 3, 8]

//The sort() function sorts the items of an array
//# Sorting can be alphabetic or numeric, and either ascending (up) or descending (down)
let names = ["Peter", "George", "Mary"];
names.sort(); // Default behaviour – alphabetical order
console.log(names); // ["George","Mary","Peter"]

let numbers = [20, 40, 10, 30, 100, 5];
numbers.sort(); // Unexpected result on arrays of numbers!
console.log(numbers); // [10,100,20,30,40,5]

// If result < 0, a is sorted before b , If result < 0, a is sorted before b , If result = 0, a and b are equal (no change)

let nums = [20, 40, 10, 30, 100, 5];
nums.sort((a, b) => a - b); // Compare elements as numbers             <-- Use that
console.log(nums.join('|')); // 5|10|20|30|40|100

let words = ['nest', 'Eggs', 'bite', 'Grip', 'jAw'];
words.sort((a, b) => a.localeCompare(b)); //                           < --Use that
// ['bite', 'Eggs', 'Grip', 'jAw', 'nest']

let wordsLength = ['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'];
wordsLength.sort((a, b) => a.length - b.length); //                    < --Use that
    // ['Jack', 'Isacc', 'George', 'Theodor', 'Harrison']

