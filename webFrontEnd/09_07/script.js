// using console.log() will let you talk directly to the console
// using constants will increase the performance of your code

// strings can be in 'this' or "this"
let helloworld = "hello world";

console.log(helloworld);

console.log(`This person says ${helloworld}`);

const x = 10;
let y = 13;
console.log(`x + y = ${x+y}`);

y = y+x;
console.log(`y = ${y}`);

// Arrays are flexible in length

const animals = ["dog", "cat", "cow"];
console.log(animals[1]);
animals.push("pig");
console.log(animals);
console.log(animals.length);

const classroom = {
    building: "ATLAS",
    room: 104
};
console.log(classroom.room);
classroom.lighting = "not good";
console.log(classroom);

// for .. of loop
for(const animal of animals){
    console.log(animal);
}

// for .. in loops (gives you the key)
for(const key in classroom){
    console.log(`${key}: ${classroom[key]}`);
}

//arrow functions
animals.forEach(animal => console.log(animal));