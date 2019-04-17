window.addEventListener('DOMContentLoaded', function (event) {
    // botões
    let pegarNome = document.getElementById("nomeUsuario")// Pegar esse id e gerar uma função(nome)
    

    //Resultado
    let resultado = document.getElementById("resposta"); // O que vai aparecer na tela.

   
    //Mostrar Ocultar
    const esconderNome = document.querySelector(".escondido--nome"); // Vai atribuir estilo a esse id sobrepondo o css
    const mostrarEscolha = document.querySelector(".escondido--escolha"); // Vai atribuir estilo a esse id sobrepondo o css

    pegarNome.addEventListener("click", function(){
        // esconderNome.style.display = "block";
        // mostrarEscolha.style.display = "none";
    
        let nomeJogador = document.getElementById("nomeUsuario").value; // Vai armazenar o nome do jogador.
    });

    //Botão
    let gerarResultado = document.getElementById("escolhaUser"); // Pegar esse id e gerar uma função(resultado)

    //Jogo
    gerarResultado.addEventListener("click", function(){
        // esconderNome.style.display = "none";
        // mostrarEscolha.style.display = "block";

        // lista de opções
        const listaEscolhas = ["pedra","papel","tesoura","lagarto","spock"];// valores para sortear (random)
       
        //Escolha Computador
        const escolhaComputador = listaEscolhas[Math.floor(Math.random() *5)]; // está entre colchetes pois se refere à lista; escolhe a resposta do computador

        //Escolha do Jogador
        const escolhaJogador = document.getElementById("escolha").value.toLowerCase(); // Vai armazenar a resposta do jogador

        switch(escolhaComputador) {
            //Computador escolheu pedra:
            case listaEscolhas[0]: // Tem que referenciar à lista
                if(escolhaJogador == escolhaComputador){ 
                    resultado.innerHTML = "Empate!";
                } // strings entre aspas sempre
                else if (escolhaJogador == "tesoura" || escolhaJogador == "lagarto"){
                    resultado.innerHTML = `${nomeJogador}, você perdeu! Computador colocou  ${escolhaComputador}!` // ${nomeDaVariavel} serve para chamar a variável na concatenação que está entre crases
                }
                else{
                    resultado.innerHTML = `${nomeJogador}, você ganhou! Computador colocou  ${escolhaComputador}!`
                }
                break;

                 //Computador escolheu papel:
                case listaEscolhas[1]: // Tem que referenciar à lista
                if(escolhaJogador == escolhaComputador){ 
                    resultado.innerHTML = "Empate!";
                } // strings entre aspas sempre
                else if (escolhaJogador == "pedra" || escolhaJogador == "spock"){
                    resultado.innerHTML = `${nomeJogador}, você perdeu! Computador colocou  ${escolhaComputador}!` // ${nomeDaVariavel} serve para chamar a variável na concatenação que está entre crases
                }
                else{
                    resultado.innerHTML = `${nomeJogador}, você ganhou! Computador colocou  ${escolhaComputador}!`
                }
                break;

                 //Computador escolheu tesoura:
                 case listaEscolhas[2]: // Tem que referenciar à lista
                 if(escolhaJogador == escolhaComputador){ 
                     resultado.innerHTML = "Empate!";
                 } // strings entre aspas sempre
                 else if (escolhaJogador == "papel" || escolhaJogador == "lagarto"){
                     resultado.innerHTML = `${nomeJogador}, você perdeu! Computador colocou ${escolhaComputador}!` // ${nomeDaVariavel} serve para chamar a variável na concatenação que está entre crases
                 }
                 else{
                     resultado.innerHTML = `${nomeJogador}, você ganhou! Computador colocou  ${escolhaComputador}!`
                 }
                 break;

                 //Computador escolheu lagarto:
                 case listaEscolhas[3]: // Tem que referenciar à lista
                 if(escolhaJogador == escolhaComputador){ 
                     resultado.innerHTML = "Empate!";
                 } // strings entre aspas sempre
                 else if (escolhaJogador == "papel" || escolhaJogador == "spock"){
                     resultado.innerHTML = `${nomeJogador}, você perdeu! Computador colocou ${escolhaComputador}!` // ${nomeDaVariavel} serve para chamar a variável na concatenação que está entre crases
                 }
                 else{
                     resultado.innerHTML = `${nomeJogador}, você ganhou! Computador colocou  ${escolhaComputador}!`
                 }
                 break;

                 //Computador escolheu spock:
                 case listaEscolhas[4]: // Tem que referenciar à lista
                 if(escolhaJogador == escolhaComputador){ 
                     resultado.innerHTML = "Empate!";
                 } // strings entre aspas sempre
                 else if (escolhaJogador == "pedra" || escolhaJogador == "tesoura"){
                     resultado.innerHTML = `${nomeJogador}, você perdeu! Computador colocou ${escolhaComputador}!` // ${nomeDaVariavel} serve para chamar a variável na concatenação que está entre crases
                 }
                 else{
                     resultado.innerHTML = `${nomeJogador}, você ganhou! Computador colocou  ${escolhaComputador}!`
                 }
                 break;
            default:
                alert("Por favor insira pedra, papel, tesoura, lagarto ou spock para jogar!")
        }


    })

});


    