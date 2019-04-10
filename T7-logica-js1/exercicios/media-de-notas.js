/*
Crie uma função que receba três notas como parâmetro e retorne a média, 
indicando se a pessoa passou ou se foi reprovada. A pessoa será reprovada casa tenha média menor que 5!
*/

function media (a,b,c) {
    var a,b,c;
    var resultado = (a + b + c) / 3;
    console.log("Sua média é igual a " + resultado.toFixed(2));
    
    /* to.Fixed(2) serve para informar quantas casas decimais levar em consideração*/

    if (resultado >= 5) {
        console.log ("Aprovado!")
    }

    else {
        console.log("Reprovado!")
    }
}
