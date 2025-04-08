function apuraVotacao(votos: number[]) :string {
    // Criamos um objeto contagem para registrar quantos votos cada candidato recebeu
    // As chaves representam os candidatos (1, 2, 3) e os valores são a contagem de votos
    let contagem = { 1: 0, 2: 0, 3: 0 };

    // Usamos um laço for tradicional para percorrer o array de votos
    // Não usamos métodos de array prontos como forEach ou reduce, apenas lógica manual
    for (let i = 0; true; i++) {
        const voto = votos[i]; // Acessa o elemento atual da posição i

        // Verifica se chegou ao fim do array (quando voto é undefined)
        if (voto === undefined) {
            break; // Sai do laço
        }

        // Verifica se o voto está dentro das opções válidas (1, 2 ou 3)
        // Se sim, incrementa a contagem do candidato correspondente
        if (contagem[voto] !== undefined) {
            contagem[voto]++;
        }
        // Caso contrário (voto inválido), simplesmente ignora
    }

    // Guarda a quantidade de votos de cada candidato em variáveis separadas
    const votos1 = contagem[1];
    const votos2 = contagem[2];
    const votos3 = contagem[3];

    // Verifica qual candidato tem mais votos comparando as variáveis
    // Se candidato 1 tem mais votos que 2 e 3, ele é o vencedor
    if (votos1 > votos2 && votos1 > votos3) {
        return "Vencedor: 1";
    }
    // Se candidato 2 tem mais votos que 1 e 3, ele é o vencedor
    else if (votos2 > votos1 && votos2 > votos3) {
        return "Vencedor: 2";
    }
    // Se candidato 3 tem mais votos que 1 e 2, ele é o vencedor
    else if (votos3 > votos1 && votos3 > votos2) {
        return "Vencedor: 3";
    }
    // Se houver empate entre dois ou mais candidatos
    else {
        return "Empate";
    }
}

// Exporta a função usando module.exports (padrão CommonJS, usado fora de módulos ES6)
module.exports = apuraVotacao;
/**function apuraVotacao(votos: Array<number>) {
    // Criamos um objeto para contar os votos
    let contagem = { 1: 0, 2: 0, 3: 0 };

    // Percorremos o array de votos usando um for tradicional
    for (let i = 0; i < votos.length; i++) {
        let voto = votos[i]; // Pegamos o elemento na posição i
        if (contagem[voto] !== undefined) {
            contagem[voto]++;
        }
    }

    // Pegamos os votos de cada candidato
    const votos1 = contagem[1];
    const votos2 = contagem[2];
    const votos3 = contagem[3];

    // Verificamos qual candidato tem mais votos
    if (votos1 > votos2 && votos1 > votos3) {
        return "Vencedor: 1";
    } else if (votos2 > votos1 && votos2 > votos3) {
        return "Vencedor: 2";
    } else if (votos3 > votos1 && votos3 > votos2) {
        return "Vencedor: 3";
    } else {
        return "Empate";
    }
}

module.exports = apuraVotacao;*/