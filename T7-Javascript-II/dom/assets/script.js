window.addEventListener('DOMContentLoaded', function (event) {

    let titulo = document.querySelector("h1"); // querySelector busca seletores no CSS e me entrega o primeiro resultado. querySelectorAll me entrega todos os seletores com o mesmo nome indicado na pesquisa; também no CSS.

    //Obs.: getElemtnByTagName só funciona com tags estruturais do HTML, portanto não funcionaria com a tag H1, mas com as tags DIV, IMG, P, FOOTER, SECTION, FORM, BODY ... etc, funcionaria.

    titulo.textContent = "Eu sou um título"; // textContent insere ou modifica um texto/conteúdo.

    let texto = document.querySelector(".HERO");
    console.log(texto)
    texto.style.color = "red";
    texto.style.backgroundColor = "#fff";
});


//Olhar ECMAS6 para verificar novas regras para seleção com querySelector().
