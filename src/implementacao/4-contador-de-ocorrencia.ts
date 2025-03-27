function contadorDeOcorrencia(texto: string, letra: string) {
    let contador = 0;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === letra) {
            contador++;
        }
    }

    return contador;  

}
module.exports = contadorDeOcorrencia;