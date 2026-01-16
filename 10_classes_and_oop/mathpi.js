const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
/*
output:
{
  value: 'ginger chai',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false,
    
})
/*
output:
{
  value: 'ginger chai',
  writable: false,
  enumerable: false,
  configurable: true
}
*/

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`); //name: ginger chai will not be printed because name property has made enumerable false
    }
}