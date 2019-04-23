
let senha = " ";
let acesso = "2112js";

do{
    senha = prompt("Digite sua senha!")
    if(senha!=acesso){
        alert("Senha incorreta, insira a senha novamente!");
    } else{
        alert("Entrando no sistema, aguarde!");
    }
} while (senha!=acesso); 
