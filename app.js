const playerInfo = { //property
    name:"minsu",
    age: 25,
    live: true
};

console.log(playerInfo);
console.log(playerInfo.age);

playerInfo.live = false;
console.log(playerInfo);

playerInfo.lastName = "son";
console.log(playerInfo); 

playerInfo.age += 10;
console.log(playerInfo.age);