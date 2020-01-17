// function Comeca(){
// // pega o id da sessão
// var sessao = document.getElementById("linha1");

// // pega todas as divs com a classe "linhas" dentro do section
// var celulas1 = sessao.getElementsByClassName("linhas");

// // Loop through the buttons and add the active class to the current/clicked button
// // teste teste teste teste
// for (var i = 0; i < celulas1.length; i++) {
//     celulas1[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("marcadoX");
//     current[0].className = current[0].className.replace(" marcadoX", "");
//     this.className += " marcadoX";
//   });
// }
// }

// Comeca();

function Comeca(){
  //pega o id da sessão
  var sessao1 = document.getElementById("linha1");

  //pega todas as divs com a classe "linhas" dentro do section
  var celulas1 = sessao1.getElementsByClassName("linhas");

  //Loop through the buttons and add the active class to the current/clicked button
  for (var i = 0; i < celulas1.length; i++) {
      celulas1[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("linhas");
        current[0].className = current[0].className.replace("linhas", "X");
        this.className += " marcadoX";
      });
    }

    var sessao2 = document.getElementById("linha2");

    //pega todas as divs com a classe "linhas" dentro do section
    var celulas2 = sessao2.getElementsByClassName("linhas");
  
    //Loop through the buttons and add the active class to the current/clicked button
    for (var i = 0; i < celulas1.length; i++) {
        celulas2[i].addEventListener("click", function() {
          var current = document.getElementsByClassName("linhas");
          current[0].className = current[0].className.replace("linhas", "X");
          this.className += " marcadoX";
        });
      }
  
    var sessao3 = document.getElementById("linha3");

    //pega todas as divs com a classe "linhas" dentro do section
    var celulas3 = sessao3.getElementsByClassName("linhasX");
    
    //Loop through the buttons and add the active class to the current/clicked button
    for (var i = 0; i < celulas1.length; i++) {
        celulas3[i].addEventListener("click", function() {
          var current = document.getElementsByClassName("linhasX");
          current[0].className = current[0].className.replace("linhasX", "linhasO");
          this.className += " marcadoX";
        });
    }
}

Comeca();