// Dates

let myDate = new Date()
// console.log(myDate.toString());
//console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

//let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)  //year-month-date-hour-minute
//let myCreatedDate = new Date("2023-01-14") //here  month starts from 01(yyyy-mm--dd)
let myCreatedDate = new Date("01-11-2023") //month-date-year(mm-dd-yyyy)
//console.log(myCreatedDate.toLocaleString());
//months start from 0 in JS

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
console.log(newDate.getHours());


// `${newDate.getDay()} and the time `
//press ctrl + space to get avaliable properties inside localeString

newDate.toLocaleString('default', {
    weekday: "long"
    
})

