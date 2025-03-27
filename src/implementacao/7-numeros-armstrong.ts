function numerosArmstrong(numero: number) {
    let result: number = 0; // Inicializa a soma dos dígitos elevados à potência
    const numeroStr = numero.toString(); // Converte o número para string para facilitar a manipulação dos dígitos
    const numDigitos = numeroStr.length; // Conta a quantidade de dígitos no número

    // Percorre os dígitos usando um for tradicional
    for (let i = 0; i < numDigitos; i++) {
        const digito = Number(numeroStr[i]); // Obtém o dígito como número
        result += Math.pow(digito, numDigitos); // Eleva o dígito à quantidade de dígitos e soma
    }

    // Verifica se a soma é igual ao número original e retorna a mensagem correspondente
    return result === numero 
        ? "Este eh um numero de Armstrong!" 
        : "Este nao eh um numero de Armstrong!";
}

// Exportação do módulo para uso externo
module.exports = numerosArmstrong;
