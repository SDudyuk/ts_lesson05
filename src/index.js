var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.addition = function (number1, number2) {
        return number1 + number2;
    };
    Calculator.prototype.subtraction = function (number1, number2) {
        return number1 - number2;
    };
    Calculator.prototype.multiplication = function (number1, number2) {
        return number1 * number2;
    };
    Calculator.prototype.division = function (number1, number2) {
        if (number2 === 0)
            throw Error("На 0 ділити не можна!");
        return number1 / number2;
    };
    return Calculator;
}());
var calculator = new Calculator();
console.log(calculator.addition(3, 2));
console.log(calculator.multiplication(10, 5));
console.log(calculator.division(10, 0));
