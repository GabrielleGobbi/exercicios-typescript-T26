function somaDobrada(umValor: number, outroValor: number) {
    if (umValor === outroValor) {
        return 2 * (umValor + outroValor);
    } else if (umValor < 1 || outroValor < 1) {
        return -1;
    }
    return umValor + outroValor;
}

module.exports = somaDobrada;


/**
 1. Use export em vez de module.exports, já que você está usando TypeScript.
2. Aqui vocês fizeram a mesma soma duas vezes, aqui vocês poderiam usar uma const:
    return ((umValor+outroValor)+(umValor+outroValor));
Obs: como tem teste não da pra trocar por export ou não passa pelos testes 

 */