window.addEventListener('DOMContentLoaded', function (event) {
 
    let escolha = document.getElementsByClassName("imagem");

    document.querySelector(".opcao").addEventListener("click",(e) => {
        escolha.classList.add("desabilitado");
        e.target.classList.remove("desabilitado");
        e.target.classList.add("habilitado");    
    })
});

