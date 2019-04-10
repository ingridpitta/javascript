// Declare uma variável chamada "meunumero", sem valor.
var meunumero;
// Após declarada, atribua o seu número da sorte à variavel "meunumero".
meunumero = 11;
// Declare uma nova variável chamada "soma", e adicione a adição de dois números.
var soma = 2+6;
// Atribua à variável "soma" todo o valor dela, somando 1, usando o operador de soma abreviado.
soma++;
// Atribua à variável "soma" todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.
soma *=3;
// Qual é o valor da variável "soma" até aqui?
27
// Declare uma variável chamada "turma7", atribuindo à ela o valor booleano que representa "verdadeiro".
var turma7 = true;
// Declare uma variável chamada "comida" que recebe um array com strings referentes ao que você comeu hoje.
var comida = ["bolo","iogurte","uvas","passatempo","macarrao","chocolate","cafe"];
// Digite a instrução que imprime o valor do último item da lista.
comida[-1];
// Digite o código que verifica se a variável "soma' é igual a variável "meunumeror" (testando também o tipo).
soma===meunumero;
// Digite o código que verifica se a variável "meunumero" é menor ou igual à variável "soma".
meunumero <= soma;
// Crie uma função chamada "divisao" que receba como parâmetro dois números, e retorne o resultado da divisão entre eles.
function divisao (a,b){
    var a,b;
    
    var resultado = a/b;
    return resultado;
}
// Invoque a função criada acima, passando os parâmetros 30 e 2.
function divisao (){
    var numero_1 = 30;
    var numero_2 = 2
    
    var resultado = numero_1+numero_2;
    return resultado;
}
// Crie uma função para calcular a média entre três números.
function media (a,b,c){
    var a,b,c;
    
    var resultado = (a+b+c)/3;
    console.log("Sua média é igual a " + resultado.toFixed(2));
}