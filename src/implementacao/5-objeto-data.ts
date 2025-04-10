function criaObjeto(data: string) {
    let dia = "", mes = "", ano = "";
    let i = 0;

    // Extrair o dia
    while (data[i] !== "/" && data[i] !== undefined) {
        dia += data[i];
        i++;
    }
    i++; // pula a barra

    // Extrair o mês
    while (data[i] !== "/" && data[i] !== undefined) {
        mes += data[i];
        i++;
    }
    i++; // pula a barra

    // Extrair o ano
    while (data[i] !== undefined) {
        ano += data[i];
        i++;
    }

    return { dia, mes, ano };
}

module.exports = criaObjeto;



/**
 * Não utilizar métodos prontos como split("/"). Substituir por leitura manual dos caracteres da string.
2. Criar uma função personalizada para converter string em número. Não usar Number(diaStr) ou parseInt().
3. Converter as partes da data manualmente usando a função paraNumero().
4. Retornar um objeto com os valores numéricos.
5. Exportar a função normalmente com module.exports.

 */