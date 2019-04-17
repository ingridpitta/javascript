window.addEventListener('DOMContentLoaded', function (event) {

    const botao = document.getElementById("btn");
    
   
    botao.addEventListener("click", function gerarGifs(){
        const listaGifs = ["./assets/img/enter_the_void.gif","./assets/img/love.gif","./assets/img/climax.gif"]
        const listaFilmes = ["Enter the Void ", " Love ", " Clímax"]
        const resposta = document.getElementById("resposta");
        let gifs = document.getElementById("gif");
        console.log(listaGifs);


        gifs.src = listaGifs[0];
        setTimeout(function(){
            gifs.src = listaGifs[1];
        }, 3000);

        setTimeout(function(){
            gifs.src = listaGifs[2];
        }, 6000);

        setTimeout(function(){
            gifs.style.display = "none";
            resposta.innerHTML = listaFilmes;
        }, 9000);
    });  
});