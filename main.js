let vez = true
let celulas = document.querySelectorAll('.linhas')
let marcacoesX = []
let marcacoesO = []
let quadros = []


function start(vez){
  celulas.forEach(celula => {
    quadros.push(celula.getAttribute('id'));
    celula.addEventListener('click', comeca, {once:true})
  });
}

start(vez)
let selecionado
function comeca(e){

  let cel
  let selecionado

  cel = e.target
  if(vez){
    cel.classList.add('x')
    vez = false
    clicado(cel,vez)
    
  }
  else{
   cel.classList.add('o')
    vez = true
    clicado(cel,vez)
  }
}

function clicado(cel,vez){
  let p1 = ['celula11', 'celula12', 'celula13']
  let p2 = ['celula21', 'celula22', 'celula23']
  let p3 = ['celula31', 'celula32', 'celula33']

  let p4 = ['celula11', 'celula21', 'celula31']
  let p5 = ['celula12', 'celula22', 'celula32']
  let p6 = ['celula13', 'celula23', 'celula33']

  let p7 = ['celula11', 'celula22', 'celula33']
  let p8 = ['celula13', 'celula22', 'celula31']

  let a=0, b=0, c=0, d=0, e=0, f=0, g=0, h=0, k=0
  let tab

  if(!vez){
    cel.innerHTML='X'
    marcacoesX.push(cel.getAttribute('id'))
    console.log('mX = ' + marcacoesX)
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
    if(a==3 || b==3 || c==3 || d==3 || e==3 || f==3 || g==3 || h==3 || k==3){
      alert('Venceu X')
      document.location.reload()
    }
    else if(marcacoesX.length == 5){
      velha()
    }
    
  }
  else{
    cel.innerHTML='O'
    marcacoesO.push(cel.getAttribute('id'))
    console.log('mO = ' + marcacoesO)
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
  total = ['celula11', 'celula12', 'celula13', 'celula21', 'celula22', 'celula23', 'celula31', 'celula32', 'celula33']
  totalJogadas.push(marcacoesX)
  totalJogadas.push(marcacoesO)
  for(var l=0; l<total.length; l++){
    for(var m=0; m<totalJogadas.length; m++){
      if(total[l].indexOf(totalJogadas[m] != -1)){
        alert('velha')
        document.location.reload()
      }
    }
  }
}