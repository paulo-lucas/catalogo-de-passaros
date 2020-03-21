var check = document.querySelector("#check");
var opcoes = document.querySelectorAll(".botao-opcao");
check.addEventListener("click", function(){
    var i = 0;
    var id = setInterval(function(){
        opcoes[i].classList.toggle("botao-visivel");
        i++;
        if(i == opcoes.length){ clearInterval(id); }
    }, 50);
});