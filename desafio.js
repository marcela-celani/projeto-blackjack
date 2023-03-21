console.log('Boas vinhas ao jogo de BlackJack!')

if(confirm('Quer iniciar uma nova rodada?')){
   // Tirando as duas cartas do usuário
   const carta1 = comprarCarta()
   const carta2 = comprarCarta()
   let somaUsuario = carta1.valor + carta2.valor
      
   // Tirando as duas cartas do computador
   const cartapc1 = comprarCarta()
   const cartapc2 = comprarCarta()
   let somaComputador = cartapc1.valor + cartapc2.valor
   
   // array de cartas do usuário
   let arrayCartas = [carta1.texto, carta2.texto]
   
   // acrescentar carta e somar enquanto usuário apertar confirm, se passar de 21 ele passa a vez para o computador
   for(i = 0; confirm(`Suas cartas são ${arrayCartas}. A carta revelada do computador é ${cartapc1.texto}. Deseja comprar mais uma carta?`); i++) {
      
      let cartaNova = comprarCarta()
      let cartaTexto = cartaNova.texto
      arrayCartas.push(cartaTexto)
      somaUsuario = somaUsuario + cartaNova.valor

      if (somaUsuario > 21) {
         break;
      }
   }
   
   // array de cartas do computador
   let arrayCartasPC = [cartapc1.texto, cartapc2.texto]

   // acrescentar carta e somar até que sua pontuação seja igual ou superior a do usuário
   for(i = 0; somaComputador >= somaUsuario; i++) {
      let cartaNova = comprarCarta()
      let cartaTexto = cartaNova.texto
      arrayCartasPC.push(cartaTexto)

      somaComputador = somaComputador + cartaNova.valor
   }
   
   // definir quem ganhou. Computador ganha se tiver soma maior, ou se o usuário tiver passado de 21, senão, usuário ganha. Empata se tiverem valores iguais, 21 ou menor.
   if (somaComputador > somaUsuario || somaUsuario > 21){
      console.log(`Suas cartas são ${arrayCartas}. Sua pontuação é ${somaUsuario}.
      As cartas do computador são ${arrayCartasPC}. A pontuação do computador é ${somaComputador}.
      O computador ganhou!`) 

   } else if (somaUsuario > somaComputador){
      console.log(`Suas cartas são ${arrayCartas}. Sua pontuação é ${somaUsuario}. 
      As cartas do computador são ${arrayCartasPC}. A pontuação do computador é ${somaComputador}.
      O Usuário ganhou!`) 

   } else {
      console.log(`Suas cartas são ${arrayCartas}. Sua pontuação é ${somaUsuario}. 
      As cartas do computador são ${arrayCartasPC}. A pontuação do computador é ${somaComputador}.
      Empate!`) 
   }

// caso o primeiro confirm receba resposta negativa
} else {
   console.log('O jogo acabou.')
} 