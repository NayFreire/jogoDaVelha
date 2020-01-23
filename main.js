let vez = true
let marcacoes = []
function start(vez){
  let alvo = document.querySelectorAll('.linhas')
  alvo.forEach(celulas => {
  celulas.addEventListener('click', function(){
    comeca(celulas, vez)
  }, {once:true})
});
}

start(vez)

function comeca(celulas, vez){
  let cel
  if(vez){
    celulas.innerHTML = 'X'
    // cel = celulas.getAttribute('id')
    // var teste = document.getElementById(cel)
    // teste.style.backgroundColor = '#ffffff'
    vez = false
    start(vez)
  }
  else{
    celulas.innerHTML = 'O'
    vez = true
    start(vez)
  }
  
}