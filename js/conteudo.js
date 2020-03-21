// atribui o evento de carregar as informações de cada passaro ao respectivo botão 
function adicionaEvento(passaro, i = 0){
    var botoes = document.querySelectorAll(".botao-opcao");
    console.log(botoes[i]);
    console.log(i)
    botoes[i].addEventListener("click", function(){
        carregaConteudo(passaro);
        destacaBotao(i-1);
    });
    i++;
}

// exibe as informações do passaro na tela
function carregaConteudo(passaro){
    var img = document.querySelector("#imagem-passaro");
    var nome = document.querySelector("#nome-passaro");
    var nomeCientifico = document.querySelector("#nome-cientifico");
    var descobrimento = document.querySelector("#descobrimento");
    var infoParagrafo = document.querySelectorAll(".info-p");

    img.src = passaro.src;
    nome.innerHTML = passaro.nome;
    nomeCientifico.innerHTML = passaro.nomeCientifico;
    descobrimento.innerHTML = passaro.descobrimento;
    infoParagrafo[0].innerHTML = passaro.familia;
    infoParagrafo[1].innerHTML = passaro.descricao;
    infoParagrafo[2].innerHTML = passaro.habitat;
    infoParagrafo[3].innerHTML = passaro.alimentacao;
}

// destaca o botão selecionado e volta o selecionado anteriormente ao normal
function destacaBotao(i){
    var botoes = document.querySelectorAll(".botao-opcao");
    botoes.forEach(function(botao){ botao.classList.remove("botao-selecionado") })
    botoes[i].classList.add("botao-selecionado");
}