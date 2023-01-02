const age = prompt("How old are you?");

if (isNaN(age)) {
    alert("Please Write your age. Don't be a fool.")
}
else if (age < 18) {
    alert("You are too young to drink");
}
else{
    alert("Welcome!")
}
//parseInt: make str to int
//typeof: return type of the var
//isNan return true if the var is num(false if the var isn't num)

console.log(age);
console.log(parseInt(age));

console.log(typeof 15);
console.log(typeof parseInt(age));

console.log(isNaN(age));