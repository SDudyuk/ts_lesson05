interface ICalculator {
  addition: (operand1: number, operand2: number) => number;
  subtraction: (operand1: number, operand2: number) => number;
  multiplication: (operand1: number, operand2: number) => number;
  division: (operand1: number, operand2: number) => number | never;
}

class Calculator implements ICalculator {
  addition(number1: number, number2: number): number {
    return number1 + number2;
  }

  subtraction(number1: number, number2: number): number {
    return number1 - number2;
  }

  multiplication(number1: number, number2: number): number {
    return number1 * number2;
  }

  division(number1: number, number2: number): number | never {
    if (number2 === 0) throw Error("На 0 ділити не можна!");
    return number1 / number2;
  }
}

const calculator = new Calculator();

console.log(calculator.addition(3, 2));
console.log(calculator.multiplication(10, 5));
console.log(calculator.division(10, 0));
