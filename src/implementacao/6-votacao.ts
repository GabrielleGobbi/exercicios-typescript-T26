function apuraVotacao(votos: Array<number>) {
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

module.exports = apuraVotacao;