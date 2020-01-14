function Comeca(){
// pega o id da sessão
var sessao = document.getElementById("linha1");

// pega todas as divs com a classe "linhas" dentro do section
var celulas1 = sessao.getElementsByClassName("linhas");

// Loop through the buttons and add the active class to the current/clicked button
// teste teste teste teste
for (var i = 0; i < celulas1.length; i++) {
    celulas1[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("marcadoX");
    current[0].className = current[0].className.replace(" marcadoX", "");
    this.className += " marcadoX";
  });
}
}

Comeca();