console.log('Boas vinhas ao jogo de BlackJack!')

if(confirm('Quer iniciar uma nova rodada?')){
   // Tirando as duas cartas do usuário
   const carta1 = comprarCarta()
   const carta2 = comprarCarta()
   const somaUsuario = carta1.valor + carta2.valor
      
   console.log(`Usuário - cartas: ${carta1.texto} ${carta2.texto} - pontuação = ${somaUsuario}`)

   // Tirando as duas cartas do computador
   const carta3 = comprarCarta()
   const carta4 = comprarCarta()
   const somaComputador = carta3.valor + carta4.valor
      
   console.log(`Computador - cartas: ${carta3.texto} ${carta4.texto} - pontuação = ${somaComputador}`)

   if(somaUsuario > somaComputador) {
      console.log('O usuário ganhou!')
   } else if (somaComputador > somaUsuario) {
      console.log('O computador ganhou!')
   } else {
      console.log('Empate!')
   }

} else {
   console.log('O jogo acabou.')
}