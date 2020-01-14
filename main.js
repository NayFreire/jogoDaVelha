function Comeca(){
// Get the container element
var sessao = document.getElementById("linha1");

// Get all buttons with class="btn" inside the container
var celulas1 = sessao.getElementsByClassName("linhas");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < celulas1.length; i++) {
    celulas1[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("marcado");
    current[0].className = current[0].className.replace(" marcado", "");
    this.className += " marcado";
  });
}
}

Comeca();