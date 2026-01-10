// array

const myArr = [0, 1, 2, 3, 4, 5,3]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
//console.log(myArr[1]);

//Array methods

myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(9)
myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

//console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) //end index excluded

// console.log(myn1);
// console.log("B ", myArr);

//console.log(myArr["02"]); //undefined
//The 2 in years[2] is coerced into a string by the JavaScript engine through an implicit toString conversion.
// // As a result, '2' and '02' would refer to two different slots on the years object,

const myn2 = myArr.splice(1,3) //in splice we give start index and count of elements to be deleted(second argument is not the end index)
// console.log("C ", myArr);
// console.log(myn2);

const colors = ["red", "yellow", "blue"];
colors[5] = "purple";
colors.forEach((item, index) => {
  //console.log(`${index}: ${item}`);
});

// colors.reverse(); // ['purple', empty × 2, 'blue', 'yellow', 'red']
// console.log(colors);
// console.log(colors.length); //6


const iterator = colors.keys();
for (const key of iterator) {
  //console.log(`${key}: ${colors[key]}`);
}
// Output
// 0: red
// 1: yellow
// 2: blue
// 3: undefined
// 4: undefined
// 5: purple

const newColors = colors.toReversed(); // ['purple', undefined, undefined, 'blue', 'yellow', 'red']


/*
The following table lists the methods that mutate the original array, and the corresponding non-mutating alternative:

Mutating method	    Non-mutating alternative
copyWithin()	    No one-method alternative
fill()	            No one-method alternative
pop()	            slice(0, -1)
push(v1, v2)	    concat([v1, v2])
reverse()	        toReversed()
shift()	            slice(1)
sort()	            toSorted()
splice()	        toSpliced()
unshift(v1, v2)	    toSpliced(0, 0, v1, v2)
*/
//An easy way to change a mutating method into a non-mutating alternative is to use the spread syntax or slice() to create a copy first:
let arr=[1,2]
//arr.copyWithin(0, 1, 2); // mutates arr
const arr2 = arr.slice().copyWithin(0, 1, 2); // does not mutate arr
const arr3 = [...arr].copyWithin(0, 1, 2); // does not mutate arr
console.log(arr,arr2,arr3);

//Many DOM objects are array-like — for example, NodeList and HTMLCollection. 
//The arguments object is also array-like.

/*
create a string from the array.
const fruits = ["Apple", "Banana"];
const fruitsString = fruits.join(", ");
console.log(fruitsString);
// "Apple, Banana"
*/
//If indexOf() doesn't return -1, the array contains the given item.
// use the shift() method to remove the first item from the fruits array.

/*
const fruits = ["Apple", "Banana", "Strawberry"];
const start = 1; or -2 also works
const deleteCount = 2;
const removedItems = fruits.splice(start, deleteCount, "Mango", "Cherry");
console.log(fruits);
// ["Apple", "Mango", "Cherry"]
console.log(removedItems);
// ["Banana", "Strawberry"]
*/

// const fruits = ["Apple", "Mango", "Cherry"]; //for of 
// for (const fruit of fruits) {
//   console.log(fruit);
// }

// fruits.forEach((item, index, array) => {
//   console.log(item, index);
// });

const fruits = ["Apple", "Banana", "Strawberry"];
const moreFruits = ["Mango", "Cherry"];
const combinedFruits = fruits.push(moreFruits);
console.log(combinedFruits); //prints length of fruits array (i.e. 4)
console.log(fruits);



//use this reference to master arrays 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array