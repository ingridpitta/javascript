function calcularIMC(){
    var altura = prompt("Qual é a sua altura?");
    var peso = prompt("Qual é a seu peso?");
    var calculo = (peso/(altura*altura)).toFixed(2);

    console.log("Seu IMC é igual a: " + calculo);

    if(calculo <18.5){
        console.log("Você está abaixo do peso.Seu índice é: " + calculo);
    }
    else if(calculo >= 18.5 && calculo <24.9){
        console.log("Você está saudável.Seu índice é:" + calculo);
    }
    else if(calculo >= 25 && calculo <29.9){
        console.log("Você está acima do peso. Seu índice é: " + calculo);
    }
    else{
        console.log("Você está com obesidade. Seu índice é: " + calculo);
    }
}

