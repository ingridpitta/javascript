window.addEventListener('DOMContentLoaded', function (event) {

    const escolhePais = document.getElementById('escolhePais');
    const escolheCidade = document.getElementById('escolheCidade');
    const frase = document.getElementById('frase');
    const cidade = document.getElementById('cidade');

    escolhePais.addEventListener('click', function () {

        cidade.classList.add('cidade');

        if (escolhePais.value == 'aus') {
            frase.innerHTML = `Minha amiga vai ganhar dois ovos de chocolate branco`;

        } else if (escolhePais.value == 'br') {
            cidade.classList.remove('cidade');

            escolheCidade.addEventListener('click', function () {
                
                if (escolheCidade.value == 'cxs') {
                    frase.innerHTML = `Minha amiga vai ganhar um ovo de chocolate ao leite e um ovo de chocolate branco`;

                } else if (escolheCidade.value == 'poa') {
                    frase.innerHTML = `Minha amiga vai ganhar um ovo de chocolate amargo e um ovo de chocolate ao leite`;

                } else if (escolheCidade.value == 'sp') {
                    frase.innerHTML = `Minha amiga vai ganhar duas caixas de bombons`;

                } else {
                    frase.innerHTML = ``;
                }
            });

        } else if (escolhePais.value == 'eua') {
            frase.innerHTML = `Minha amiga vai ganhar dois ovos de chocolate ao leite`;

        } else if (escolhePais.value == 'uk') {
            frase.innerHTML = `Minha amiga vai ganhar dois ovos de chocolate amargo`;

        } else {
            frase.innerHTML = ``;
        }

    });

});