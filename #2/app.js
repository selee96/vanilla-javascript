const a = 5;
const b = 2;
let myName = "sieun"

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

myName = "sieunLee"

console.log("My name is " + myName);

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// Get Item from Array
console.log(daysOfWeek[4]);
console.log(daysOfWeek);

// Add one more day to the array
daysOfWeek.push("sun");

console.log(daysOfWeek);

const player = {
    name : "selee",
    point : 10,
    pretty : true
}

console.log(player);
player.name = "potato";
console.log(player.name);
player.lastName = "pizza";
console.log(player);