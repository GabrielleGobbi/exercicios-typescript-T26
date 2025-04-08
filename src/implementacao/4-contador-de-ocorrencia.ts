export function contadorDeOcorrencia(texto: string, busca: string) :number {
    let contador = 0;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === busca) {
            contador++;
        }
    }

    return contador;  

}

//module.exports = contadorDeOcorrencia; 