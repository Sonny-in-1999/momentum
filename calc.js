const calculator = {
    plus: function(a,b) {
        return a+b;
    },
    minus: function(a,b) {
        return a-b;
    },
    times: function(a,b) {
        return a*b;
    },
    divides: function(a,b) {
        return a/b;
    },
    power: function(a,b) {
        return a**b;
    }
};

plus = calculator.plus(2,3);
minus = calculator.minus(2,3);
times = calculator.times(2,3);
divides = calculator.divides(2,3);
power = calculator.power(2,3);

console.log(plus);
console.log(minus);
console.log(times);
console.log(divides);
console.log(power);
