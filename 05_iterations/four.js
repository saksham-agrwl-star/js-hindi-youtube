const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]); //key is index
}

//Map does NOT allow duplicate keys and maintains sorted order
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "Indiia")

for (const key in map) {
    console.log(key);
}
//for in does not work on map as map is not enumerable like objects

for ( [key, value] of map) {
    console.log(key, value); //for of works with map
}
