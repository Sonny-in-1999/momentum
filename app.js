const age = prompt("How old are you?");

if (isNaN(age)) {
    alert("Please Write your age. Don't be a fool.")
}
else if (age < 18) {
    alert("You are too young to drink");
}
else if (age >= 18 && age < 50) {
    alert("Welcome! Enjoy your time.");
}
else if (age >= 50 && age < 70) {
    alert("Sir. You should do some exercise rather than drink. ");
}
else if (age >= 70 && age < 80) {
    alert("Damn it. You are too old.")
}
else if (age >= 80 && age < 99) {
    alert("Still alive?")
}
else if (age == 100) {
    alert("Wow....")
}


//parseInt: make str to int
//typeof: return type of the var
//isNan return true if the var is num(false if the var isn't num)

console.log(age);
console.log(parseInt(age));

console.log(typeof 15);
console.log(typeof parseInt(age));