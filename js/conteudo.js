// atribui o evento de carregar as informações de cada passaro ao respectivo botão 
function adicionaEvento(passaro, i = 0){
    var botoes = document.querySelectorAll(".botao-opcao");
    botoes[i].addEventListener("click", function(){
        carregaConteudo(passaro);
    });
    i++;
}

// exibe as informações do passaro na tela
function carregaConteudo(passaro){
    var nome = document.querySelector("#nome-passaro");
    var nomeCientifico = document.querySelector("#nome-cientifico");
    var descobrimento = document.querySelector("#descobrimento");
    var infoParagrafo = document.querySelectorAll(".info-p");

    nome.innerHTML = passaro.nome;
    nomeCientifico.innerHTML = passaro.nomeCientifico;
    descobrimento.innerHTML = passaro.descobrimento;
    infoParagrafo[0].innerHTML = passaro.familia;
    infoParagrafo[1].innerHTML = passaro.descricao;
    infoParagrafo[2].innerHTML = passaro.habitat;
    infoParagrafo[3].innerHTML = passaro.alimentacao;
}