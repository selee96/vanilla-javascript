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

function sayHello(mySister, age) {
    console.log("Hello my name is " + mySister + " and I'm " + age);
}

sayHello("selee", 26);
sayHello("jueun", 25);
sayHello("kyungeun", 18);

const player2 = {
    name: "selee",
    sayhello: function(otherPersonName) {
        console.log("hello " + otherPersonName + " nice to meet you!");
    }
};

player2.sayhello("nico");

const age = 96;
function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);

console.log(krAge);

const user_age = prompt("How old are you?");
console.log(user_age);