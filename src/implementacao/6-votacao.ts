function apuraVotacao(votos: number[]): string {
    // Inicia a contagem de votos para os 3 candidatos
    let contagem = { 1: 0, 2: 0, 3: 0 };

    let i = 0;

    // Loop manual para percorrer o array de votos até encontrar undefined
    while (votos[i] !== undefined) {
        let voto = votos[i];

        // Se o voto for para um candidato válido, incrementa
        if (contagem[voto] !== undefined) {
            contagem[voto]++;
        }

        i++; // Avança para o próximo voto
    }

    // Recupera a quantidade de votos de cada candidato
    let votos1 = contagem[1];
    let votos2 = contagem[2];
    let votos3 = contagem[3];

    // Verifica quem teve mais votos
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

module.exports = apuraVotacao;

console.log(apuraVotacao([1, 2, 2, 3, 2, 1])); // Vencedor: 2

/**
 * 1. Alterar o tipo do parâmetro → Substituir Array<number> por number[], que é uma forma mais comum e concisa de tipar arrays no TypeScript.
2. Manter a exportação com module.exports.

 */