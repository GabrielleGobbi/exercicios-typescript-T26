function numerosArmstrong(numero: number) {
    // Contar dígitos manualmente
    let contadorDigitos = 0;
    let copiaContagem = numero;

    if (copiaContagem === 0) {
        contadorDigitos = 1;
    } else {
        while (copiaContagem > 0) {
            copiaContagem = (copiaContagem - (copiaContagem % 10)) / 10;
            contadorDigitos++;
        }
    }

    // Potência manual
    let soma = 0;
    let copiaSoma = numero;

    while (copiaSoma > 0) {
        let digito = copiaSoma % 10;

        // Calcular potência manualmente
        let potencia = 1;
        for (let i = 0; i < contadorDigitos; i++) {
            potencia *= digito;
        }

        soma += potencia;

        // Avança para o próximo dígito (manual floor)
        copiaSoma = (copiaSoma - (copiaSoma % 10)) / 10;
    }

    return soma === numero
        ? "Este eh um numero de Armstrong!"
        : "Este nao eh um numero de Armstrong!";
}



// Exportação do módulo para uso externo
module.exports = numerosArmstrong;
/**1. Contar a quantidade de dígitos do número sem toString() e length. Utilizar divisões sucessivas por 10 até o número se tornar zero.
2. Substituir Math.pow(). Criar uma função manual para calcular a potência de um número usando um loop.
3. Extrair os dígitos sem converter para string (Number()). Utilizar divisões e restos (/ e %) para obter cada dígito do número.
 */