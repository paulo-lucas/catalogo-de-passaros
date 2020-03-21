//cria um itens do menu
function iteraMenu(passaro){
    var menu = document.querySelector("#menu");
    var botao = criaBotao();
    var div = criaDiv(passaro.nome);
    botao.appendChild(div);
    menu.appendChild(botao);
}

//evento de transição dos botões
function fadeInOutBotoes(){
    var opcoes = document.querySelectorAll(".botao-opcao");
    var i = 0;
    var id = setInterval(function(){
        opcoes[i].classList.toggle("botao-visivel");
        i++;
        if(i == opcoes.length){ fadeInOutBarra(); clearInterval(id); }
    }, 50);
}

function criaBotao(){
    var botao = document.createElement("button");
    botao.classList.add("botao-opcao");
    return botao;
}

function criaDiv(nomePassaro){
    var div = document.createElement("div");
    div.classList.add("opcao");
    div.innerHTML = nomePassaro;
    return div;
}

function fadeInOutBarra(){
    var barra = document.querySelectorAll(".barra")
    barra[0].classList.toggle("barra-visivel");
    
}