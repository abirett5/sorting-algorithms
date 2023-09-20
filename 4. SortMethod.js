// Sort() method in javascript

const fruits = ["dragon fruit", "apple", "date", "cherry", "banana"];

// console.log(fruits.sort());

const nums = [10, 5, 18, 1, 27]; // Sort method will sort alphabetically

// console.log(nums.sort());

const compareFunction = (a, b) => {
    // 1. < 0 => a comes first
    // 2. 0 => nothing
    // 3. > 0 => b comes first

    return a - b;
};

console.log(nums.sort(compareFunction));

const people = [
    {name: "piyush", age: 25},
    {name: "shreyas", age: 23},
    {name: "ajinka", age: 28},
    {name: "rahane", age: 35}
];

const compareFunctionObj = (a, b) => {
    // 1. < 0 => a comes first
    // 2. 0 => nothing
    // 3. > 0 => b comes first

    return a.age - b.age;
};

console.log(people.sort(compareFunctionObj));