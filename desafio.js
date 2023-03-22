console.log('Boas vindas ao jogo de BlackJack!')

if(confirm('Quer iniciar uma nova rodada?')){
   // Tirando as duas cartas do usuário
   const cartaUsuario1 = comprarCarta()
   const cartaUsuario2 = comprarCarta()
   let somaUsuario = cartaUsuario1.valor + cartaUsuario2.valor
      
   // Tirando as duas cartas do computador
   const cartaPc1 = comprarCarta()
   const cartaPc2 = comprarCarta()
   let somaComputador = cartaPc1.valor + cartaPc2.valor
   
   // array de cartas do usuário
   let CartasUsuario = [cartaUsuario1.texto, cartaUsuario2.texto]
   
   // acrescentar carta e somar enquanto usuário apertar confirm, se passar de 21 ele passa a vez para o computador
   let perguntaUsuario = confirm(`Suas cartas são ${CartasUsuario}. A carta revelada do computador é ${cartaPc1.texto}. Deseja comprar mais uma carta?`)

   for(i = 0; perguntaUsuario; i++) {
      
      let cartaNova = comprarCarta()
      let cartaTexto = cartaNova.texto
      CartasUsuario.push(cartaTexto)
      somaUsuario = somaUsuario + cartaNova.valor

      if (somaUsuario > 21) {
         break;
      }
   }
   
   // array de cartas do computador
   let CartasPC = [cartaPc1.texto, cartaPc2.texto]

   // acrescentar carta e somar até que sua pontuação seja igual ou superior a do usuário
   if (somaUsuario <= 21) {
      for(i = 0; somaComputador <= somaUsuario; i++) {
         let cartaNova = comprarCarta()
         let cartaTexto = cartaNova.texto
         CartasPC.push(cartaTexto)
         somaComputador = somaComputador + cartaNova.valor
         
         if (somaComputador > 21) {
            break;
         }
      }
   }
  
   // definir quem ganhou. Computador ganha se tiver soma maior, ou se o usuário tiver passado de 21, senão, usuário ganha. Empata se tiverem valores iguais, 21 ou menor.
   if (somaUsuario <= 21 && (somaUsuario > somaComputador || somaComputador > 21 )){
      console.log(`
      Suas cartas são ${CartasUsuario}. Sua pontuação é ${somaUsuario}. 
      As cartas do computador são ${CartasPC}. A pontuação do computador é ${somaComputador}.
      O Usuário ganhou!`)
      
   } else if ((somaComputador > somaUsuario && somaComputador <= 21) || somaUsuario > 21){
      console.log(`
      Suas cartas são ${CartasUsuario}. Sua pontuação é ${somaUsuario}.
      As cartas do computador são ${CartasPC}. A pontuação do computador é ${somaComputador}.
      O computador ganhou!`) 

   } else if (somaUsuario === somaComputador) {
      console.log(`
      Suas cartas são ${CartasUsuario}. Sua pontuação é ${somaUsuario}. 
      As cartas do computador são ${CartasPC}. A pontuação do computador é ${somaComputador}.
      Empate!`)

   } else {
      console.log(`
      Suas cartas são ${CartasUsuario}. Sua pontuação é ${somaUsuario}. 
      As cartas do computador são ${CartasPC}. A pontuação do computador é ${somaComputador}.
      O usuário e o computador perderam!`)
   }

// caso o primeiro confirm receba resposta negativa
} else {
   alert('O jogo acabou.')
} 