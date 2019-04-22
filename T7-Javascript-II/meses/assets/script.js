window.addEventListener('DOMContentLoaded', function (event) {
    let botao = document.getElementById("btn");


    botao.addEventListener("click", function gerarMes(){

        let input = parseInt(document.getElementById("input").value);
        switch(input){

            case 1 :
                document.getElementById("mes").innerHTML = "Janeiro";
            break;
    
            case 2 :
                document.getElementById("mes").innerHTML = "Fevereiro";
            break;
    
            case 3 :
                document.getElementById("mes").innerHTML = "Março";
            break;
    
            case 4 :
                document.getElementById("mes").innerHTML = "Abril";
            break;
    
            case 5 :
                document.getElementById("mes").innerHTML = "Maio";
            break;
    
            case 6 :
                document.getElementById("mes").innerHTML = "Junho";
            break;
    
            case 7 :
                document.getElementById("mes").innerHTML = "Julho";
            break;
    
            case 8 :
                document.getElementById("mes").innerHTML = "Agosto";
            break;
    
            case 9 :
                document.getElementById("mes").innerHTML = "Setembro";
            break;
    
            case 10 :
             document.getElementById("mes").innerHTML = "Outubro";
            break;
    
            case 11 :
                document.getElementById("mes").innerHTML = "Novembro";
            break;
    
            case 12 :
                document.getElementById("mes").innerHTML = "Dezembro";
            break;
    
            default:
                 alert("Insira um número entre 1 e 12!")
            break;
        }})
});