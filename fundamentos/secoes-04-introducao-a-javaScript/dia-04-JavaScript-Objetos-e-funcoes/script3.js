function sum(a,b){
    return a+b;
}

function subtraction(a,b){
    return a-b;
}

function multiplication (a,b){
    return a*b;
}

function division (a,b){
    return a/b;
}

function module(a,b){
    return a%b;
}

console.log(sum(5,10))
console.log(subtraction(5,10))
console.log(multiplication(5,10))
console.log(division(5,10))
console.log(module(5,10))

const num1 = 20;
const num2 = 30;

function biggest2Number (num1, num2) {
    if (num1 > num2){
        return 'O número 1 é o maior';
    } else if (num1 === num2){
        return 'Empate';
    } else {
        return 'O número 2 é o maior';
    }
}

console.log(biggest2Number (num1, num2))

const num3 = 20;
const num4 = 15;
const num5 = 10;

function biggest3Number (num3, num4, num5) {
    if (num3 > num4 && num3 > num5) {
        return 'O número 3 é o maior';
    } else if (num4 > num3 && num4 > num5) {
        return 'O número 4 é o maior';
    } else {
        return 'O número 5 é o maior';
    }
}

console.log(biggest3Number (num3, num4, num5))


function status2 (c) {
    if (c > 0) {
        return 'positive';
    } else if (c < 0) {
        return 'negative';
    } else {
        return 'zero';
    }
}

console.log(status2(10-10))