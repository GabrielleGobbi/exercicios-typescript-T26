function somaDobrada(umValor: number, outroValor: number) {
   if (umValor==outroValor) {
        return ((umValor+outroValor)+(umValor+outroValor));
   } else if(umValor<1 || outroValor<1){
        return -1;
    
   }
    return (umValor+outroValor);
}
module.exports = somaDobrada;