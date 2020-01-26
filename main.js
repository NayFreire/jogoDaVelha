let vez = true //estabelece de quem será a vez
let celulas = document.querySelectorAll('.linhas') //seleciona todas as celulas do tabuleiro
let marcacoesX = [] //guarda os ids das células selecionadas para macar o X
let marcacoesO = [] //guarda os ids das células selecionadas para macar a O
let quadros = [] //pega os ids das células clicadas, adiciona o evento click, chama a função comeca e computa apenas um click em cada célula


function start(vez){
  celulas.forEach(celula => {// para cada celula, pegar o id, inserir em quadros e atribuir evento de click
    quadros.push(celula.getAttribute('id'));
    celula.addEventListener('click', comeca, {once:true})
  });
}

start(vez)

function comeca(e){
  let cel

  cel = e.target // pega a célula que acionou o evento
  if(vez){
    cel.classList.add('x') // adiciona a classe x àquela célula
    vez = false // faz com que a O seja a próxima a jogar
    clicado(cel,vez) // verifica ao longo das jogadas se já houve alguma vitória dependendo da posição dos x's
    
  }
  else{
   cel.classList.add('o') // adiciona a classe o àquela célula
    vez = true // faz com que o X seja o próximo a jogar
    clicado(cel,vez) // verifica ao longo das jogadas se já houve alguma vitória dependendo da posição das o's
  }
}

function clicado(cel,vez){
  //Possibilidades de Vitória
  //Horizontalmente
  let p1 = ['celula11', 'celula12', 'celula13']
  let p2 = ['celula21', 'celula22', 'celula23']
  let p3 = ['celula31', 'celula32', 'celula33']

  //Verticalmente
  let p4 = ['celula11', 'celula21', 'celula31']
  let p5 = ['celula12', 'celula22', 'celula32']
  let p6 = ['celula13', 'celula23', 'celula33']

  //Diagonalmente
  let p7 = ['celula11', 'celula22', 'celula33']
  let p8 = ['celula13', 'celula22', 'celula31']

  //Contadores, que contam cada uma das equivalencias entre a possibilidade de vitória e o array de marcacoesX
  let a=0, b=0, c=0, d=0, e=0, f=0, g=0, h=0, k=0

  if(!vez){//a variável vez chega aqui false, então, para averiguar as possibilidades de X ser o vencedor, usa-se a negação da mesma
    cel.innerHTML='X' //insere o X na célula 
    marcacoesX.push(cel.getAttribute('id')) //adiciona o id da célula marcada como X no array

    //Vereficações de cada possibilidade de jogada em X
    //Se os id's de tal possibilidade estiverem no array marcacoesX, então aquela jogada é a ganhadora
    for(var i=0; i<marcacoesX.length; i++){
      for(var j=0; j<3; j++){
        if(marcacoesX[i] == p1[j]){
          a++;
        }
      }
    }

    for(var i=0; i<marcacoesX.length; i++){
      for(var j=0; j<3; j++){
        if(marcacoesX[i] == p2[j]){
          b++
        }
      }
    }

    for(var i=0; i<marcacoesX.length; i++){
      for(var j=0; j<3; j++){
        if(marcacoesX[i] == p3[j]){
          c++
        }
      }
    }
    for(var i=0; i<marcacoesX.length; i++){
      for(var j=0; j<3; j++){
        if(marcacoesX[i] == p4[j]){
          d++
        }
      }
    }
    for(var i=0; i<marcacoesX.length; i++){
      for(var j=0; j<3; j++){
        if(marcacoesX[i] == p5[j]){
          e++
        }
      }
    }
    for(var i=0; i<marcacoesX.length; i++){
      for(var j=0; j<3; j++){
        if(marcacoesX[i] == p6[j]){
          f++
        }
      }
    }
    for(var i=0; i<marcacoesX.length; i++){
      for(var j=0; j<3; j++){
        if(marcacoesX[i] == p7[j]){
          g++
        }
      }
    }
    for(var i=0; i<marcacoesX.length; i++){
      for(var j=0; j<3; j++){
        if(marcacoesX[i] == p8[j]){
          k++
        }
      }
    }
    if(a==3 || b==3 || c==3 || d==3 || e==3 || f==3 || g==3 || h==3 || k==3){ //se o número de vezes em que tal jogada foi equivalnte ao número de id's presente em uma das possibilidades (3)
      alert('Venceu X') // X é o vencedor
      document.location.reload() // A página recarrega para um novo jogo
    }
    else if(marcacoesX.length == 5){ //caso contrário, significa que o jogador X realizou todas as 5 jogadas que ele pode fazer durante o jogo
      velha()// deu velha
    }
    
  }
  else{
    cel.innerHTML='O'
    marcacoesO.push(cel.getAttribute('id'))

    for(var i=0; i<marcacoesO.length; i++){
      for(var j=0; j<3; j++){
        if(marcacoesO[i] == p1[j]){
          a++;
        }
      }
    }

    for(var i=0; i<marcacoesO.length; i++){
      for(var j=0; j<3; j++){
        if(marcacoesO[i] == p2[j]){
          b++
        }
      }
    }
    for(var i=0; i<marcacoesO.length; i++){
      for(var j=0; j<3; j++){
        if(marcacoesO[i] == p3[j]){
          c++
        }
      }
    }
    for(var i=0; i<marcacoesO.length; i++){
      for(var j=0; j<3; j++){
        if(marcacoesO[i] == p4[j]){
          d++
        }
      }
    }
    for(var i=0; i<marcacoesO.length; i++){
      for(var j=0; j<3; j++){
        if(marcacoesO[i] == p5[j]){
          e++
        }
      }
    }
    for(var i=0; i<marcacoesO.length; i++){
      for(var j=0; j<3; j++){
        if(marcacoesO[i] == p6[j]){
          f++
        }
      }
    }
    for(var i=0; i<marcacoesO.length; i++){
      for(var j=0; j<3; j++){
        if(marcacoesO[i] == p7[j]){
          g++
        }
      }
    }
    for(var i=0; i<marcacoesO.length; i++){
      for(var j=0; j<3; j++){
        if(marcacoesO[i] == p8[j]){
          k++
        }
      }
    }
    if(a==3 || b==3 || c==3 || d==3 || e==3 || f==3 || g==3 || h==3 || k==3){
      alert('Venceu O')
      document.location.reload()
    }
    else if(marcacoesO.length == 5){
      velha()
    }
    
  }
}
  
let totalJogadas = []
let total = []

function velha(){
  let itensIguais = 0
  total = ['celula11', 'celula12', 'celula13', 'celula21', 'celula22', 'celula23', 'celula31', 'celula32', 'celula33'] //todos os id's das células são armazenados no array total
  
  for(var p=0; p<marcacoesX.length; p++){
    totalJogadas.push(marcacoesX[p]) //o array totalJogadas recebe os id's das células marcadas com X
  }
  
  for(var q=0; q<marcacoesO.length; q++){
    totalJogadas.push(marcacoesO[q]) //o array totalJogadas recebe os id's das células marcadas com O
  }

  if(totalJogadas.length == 9){ // se todas as células forem preenchidas, sem um vencedor:
    alert('VELHA!')
    document.location.reload()
  }
}