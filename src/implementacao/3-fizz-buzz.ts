function fizzBuzz(numero: number): string {
    if (numero % 5 === 0 && numero % 3 === 0) {
        return "FizzBuzz";
    } else if (numero % 5 === 0) {
        return "Buzz";
    } else if (numero % 3 === 0) {
        return "Fizz";
    } else {
        // Conversão manual: soma com string vazia
        return '' + numero;
    }
}

module.exports = fizzBuzz;

/**. Uso de export default no lugar de module.exports
2. Sugiro adicionar : string na tipagem de retorno para manter o padrão e garantir consistência.
3. Uso de === (boa prática ao invés de ==)
4. Substituído .toString() por uma conversão manual, usando apenas lógica básica.
Obs: como tem teste não da pra trocar por export ou não passa pelos testes
 */