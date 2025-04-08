export function somaDobrada(umValor: number, outroValor: number): number {
     if (umValor < 1 || outroValor < 1) {
         return -1;
     }
 
     const soma = umValor + outroValor;
 
     if (umValor === outroValor) {
         return soma * 2;
     }
 
     return soma;
 }
 