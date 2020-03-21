var passaros = getData();
var check = document.querySelector("#check");


// cria itens do menu
passaros.forEach(iteraMenu);

// setta efeito de transição fade in e out dos botões
check.addEventListener("click", fadeInOutBotoes);

// adiciona evento que altera as informações da tela
passaros.forEach(adicionaEvento);
    
