// Função FizzBuzz com boas práticas de TypeScript
export default function fizzBuzz(numero: number): string {
    if (numero % 3 === 0 && numero % 5 === 0) {
        return "FizzBuzz";
    } else if (numero % 5 === 0) {
        return "Buzz";
    } else if (numero % 3 === 0) {
        return "Fizz";
    } else {
        return `${numero}`; // Conversão manual para string
    }
}

//module.exports = fizzBuzz;