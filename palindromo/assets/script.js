function palindromo(){
    var palavra = document.getElementById("input").value.toLowerCase();
    var resposta = document.getElementById("resposta");


    while(palavra.indexOf(" ") != -1){
        palavra = palavra.replace(" ", "");
        return palavra;
    }
    
    for(var i = 0; i < palavra.length/2; i++){

        if(palavra[i] !== palavra[palavra.length -1 -i]){
            resposta.innerText = "Não é =("
            return
        }

        else{
            resposta.innerText = "Sim! =D"
            return
        }
    }

   

}