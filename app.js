const age = prompt("How old are you?");

if (age <= 18) {
    alert("You are too young to drink. Get out.");
}
if (isNaN(age)) {
    alert("DD NOT FOOL AROUND.")
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