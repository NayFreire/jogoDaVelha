let vez = true
let celulas = document.querySelectorAll('.linhas')
console.log('celulas: ' + celulas)
let marcacoes = []
let quadros = []
function start(vez){
  celulas.forEach(celula => {
    quadros.push(celula.getAttribute('id'))
    console.log(quadros)
    celula.addEventListener('click', function(){
      comeca(celula, vez)
    }, {once:true})
  });
}

start(vez)

function comeca(celula, vez){
  let cel
  if(vez){
    celula.innerHTML = 'X'
    cel = celula.getAttribute('id')
    // var id = document.getElementById(cel)
    marcacoes.push(cel)
    //celula.removeEventListener('click',start)
    vez = false
    start(vez)
    // console.log(celula)
    // console.log(marcacoes)
  }
  else{
   celula.innerHTML = 'O'
    cel = celula.getAttribute('id')
    // var id = document.getElementById(cel)
    marcacoes.push(cel)
    //celula.removeEventListener('click',start)
    vez = true
    start(vez)
    // console.log('*'+celula)
    // console.log('Marcacoes: '+marcacoes)
  }
}