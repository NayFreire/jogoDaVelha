function marcadoX(event){
  var player = 1;
  // var cel = window.document.getElementsByClassName('linhas')
  // var cel1 = cel[0]
  // cel1.addEventListener("click", function(){
  //   cel1.innerHTML = "X"
  // })
  var alvo = event.target.getAttribute('id')// pega o id do elemento clicado pelo cursor
  var marcacoes
  switch(alvo){
    case 'celula11':
      var cel = window.document.getElementById(alvo)
      cel.innerHTML = "X" //coloca o X na div que foi clicada
      //cel.style.pointerEvents('none')
      player = 0;//força a próxima jogada ser feita pela bolinha
      if (player == 0){
        document.getElementById('corpo').onclick = marcadoO;// o player 0 é a bolinha, dessa forma, o evento de click do elemento com o id=corpo, vai ser mucada para marcadoO
      }

      /*
      Marcações
      X 0 0
      0 0 0
      0 0 0
      
      */
      marcacoes[0][0] = 1

    break;

    case 'celula12':
      var cel = window.document.getElementById(alvo)
      cel.innerHTML = "X"

      player = 0;
      if (player == 0){
        document.getElementById('corpo').onclick = marcadoO;
      }

      marcacoes[0][1] = 1
    break;

    case 'celula13':
      var cel = window.document.getElementById(alvo)
      cel.innerHTML = "X"

      player = 0;
      if (player == 0){
        document.getElementById('corpo').onclick = marcadoO;
      }

      marcacoes[0][2] = 1
    break;

    case 'celula21':
      var cel = window.document.getElementById(alvo)
      cel.innerHTML = "X"

      player = 0;
      if (player == 0){
        document.getElementById('corpo').onclick = marcadoO;
      }

      marcacoes[1][0] = 1
    break;

    case 'celula22':
      var cel = window.document.getElementById(alvo)
      cel.innerHTML = "X"

      player = 0;
      if (player == 0){
        document.getElementById('corpo').onclick = marcadoO;
      }

      marcacoes[1][1] = 1
    break;

    case 'celula23':
      var cel = window.document.getElementById(alvo)
      cel.innerHTML = "X"

      player = 0;
      if (player == 0){
        document.getElementById('corpo').onclick = marcadoO;
      }

      marcacoes[1][2] = 1
    break;

    case 'celula31':
      var cel = window.document.getElementById(alvo)
      cel.innerHTML = "X"

      player = 0;
      if (player == 0){
        document.getElementById('corpo').onclick = marcadoO;
      }

      marcacoes[2][0] = 1
    break;

    case 'celula32':
      var cel = window.document.getElementById(alvo)
      cel.innerHTML = "X"

      player = 0;
      if (player == 0){
        document.getElementById('corpo').onclick = marcadoO;
      }

      marcacoes[2][1] = 1
    break;

    case 'celula33':
      var cel = window.document.getElementById(alvo)
      cel.innerHTML = "X"

      player = 0;
      if (player == 0){
        document.getElementById('corpo').onclick = marcadoO;
      }

      marcacoes[2][2] = 1
    break;
  }
}

marcadoX()

function marcadoO(event){
  var player = 0;
  // var cel = window.document.getElementsByClassName('linhas')
  // var cel1 = cel[0]
  // cel1.addEventListener("click", function(){
  //   cel1.innerHTML = "X"
  // })
  var alvo = event.target.getAttribute('id')

  switch(alvo){
    case 'celula11':
      var cel = window.document.getElementById(alvo)
      cel.innerHTML = "O"

      player = 1;
      if (player == 1){
        document.getElementById('corpo').onclick = marcadoX;
      }

      marcacoes[0][0] = 0
    break;

    case 'celula12':
      var cel = window.document.getElementById(alvo)
      cel.innerHTML = "O"

      player = 1;
      if (player == 1){
        document.getElementById('corpo').onclick = marcadoX;
      }

      marcacoes[0][1] = 0
    break;

    case 'celula13':
      var cel = window.document.getElementById(alvo)
      cel.innerHTML = "O"

      player = 1;
      if (player == 1){
        document.getElementById('corpo').onclick = marcadoX;
      }

      marcacoes[0][2] = 0
    break;

    case 'celula21':
      var cel = window.document.getElementById(alvo)
      cel.innerHTML = "O"

      player = 1;
      if (player == 1){
        document.getElementById('corpo').onclick = marcadoX;
      }

      marcacoes[1][0] = 0
    break;

    case 'celula22':
      var cel = window.document.getElementById(alvo)
      cel.innerHTML = "O"

      player = 1;
      if (player == 1){
        document.getElementById('corpo').onclick = marcadoX;
      }

      marcacoes[1][1] = 0
    break;

    case 'celula23':
      var cel = window.document.getElementById(alvo)
      cel.innerHTML = "O"

      player = 1;
      if (player == 1){
        document.getElementById('corpo').onclick = marcadoX;
      }

      marcacoes[1][2] = 0
    break;

    case 'celula31':
      var cel = window.document.getElementById(alvo)
      cel.innerHTML = "O"

      player = 1;
      if (player == 1){
        document.getElementById('corpo').onclick = marcadoX;
      }

      marcacoes[2][0] = 0
    break;

    case 'celula32':
      var cel = window.document.getElementById(alvo)
      cel.innerHTML = "O"

      player = 1;
      if (player == 1){
        document.getElementById('corpo').onclick = marcadoX;
      }

      marcacoes[2][1] = 0
    break;

    case 'celula33':
      var cel = window.document.getElementById(alvo)
      cel.innerHTML = "O"

      player = 1;
      if (player == 1){
        document.getElementById('corpo').onclick = marcadoX;
      }

      marcacoes[2][2] = 0
    break;
  }
}

marcadoO()