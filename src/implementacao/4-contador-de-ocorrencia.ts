function contadorDeOcorrencia(texto: string, letra: string): number {
    // Inicializa o contador de ocorrências com zero
    let contador = 0;

    // Inicializa o índice que usaremos para percorrer a string
    let i = 0;

    // Enquanto houver um caractere válido na posição i da string
    while (texto[i] !== undefined) {
        // Se o caractere atual for igual à letra procurada
        if (texto[i] === letra) {
            // Incrementa o contador
            contador++;
        }
        // Avança para o próximo caractere
        i++;
    }

    // Retorna o total de ocorrências encontradas
    return contador;
}

// Exporta a função para que possa ser usada em outros arquivos ou nos testes
module.exports = contadorDeOcorrencia;

/**
 * . Nome da função em camelCase: contadorDeOcorrencia → contarOcorrencias
2. Parâmetro "letra" pode ser renomeado para "busca", como no enunciado
3. Tipar o retorno como number
4. Usar export ao invés de module.exports

(No enunciado melhorar os nomes das funções )
não da pra trocar o nome por ter teste

 */