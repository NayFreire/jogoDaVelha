let vez = true
let celulas = document.querySelectorAll('.linhas')

console.log('celulas: ' + celulas)
let marcacoes = []
function start(vez){
  celulas.forEach(celula => {
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
    var teste = document.getElementById(cel)
    //celula.removeEventListener('click',start)
    vez = false
    start(vez)
    console.log(celula)
  }
  else{
   celula.innerHTML = 'O'
    cel = celula.getAttribute('id')
    var teste = document.getElementById(cel)
    //celula.removeEventListener('click',start)
    vez = true
    start(vez)
    console.log(celula)
  }
}