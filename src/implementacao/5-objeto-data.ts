/**function criaObjeto(data: string) {
    const [dia, mes, ano] = data.split("/");
    return { dia, mes, ano };
}   
module.exports = criaObjeto;*/
export function criaObjeto(data) {
    let dia = 0;
    let mes = 0;
    let ano = 0;

    let parte = 0; // 0 = dia, 1 = mes, 2 = ano
    let i = 0;

    while (true) {
        const char = data[i];
        if (char === undefined) break;

        if (char === '/') {
            parte++;
        } else {
            // Conversão manual do caractere para número (sem usar charCodeAt)
            let digito = -1;
            if (char === '0') digito = 0;
            else if (char === '1') digito = 1;
            else if (char === '2') digito = 2;
            else if (char === '3') digito = 3;
            else if (char === '4') digito = 4;
            else if (char === '5') digito = 5;
            else if (char === '6') digito = 6;
            else if (char === '7') digito = 7;
            else if (char === '8') digito = 8;
            else if (char === '9') digito = 9;

            // Acumula o valor na parte correta (dia, mes ou ano)
            if (parte === 0) {
                dia = dia * 10 + digito;
            } else if (parte === 1) {
                mes = mes * 10 + digito;
            } else {
                ano = ano * 10 + digito;
            }
        }

        i++;
    }

    return { dia: dia, mes: mes, ano: ano };
}

