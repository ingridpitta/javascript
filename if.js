function bolacha(x){

    if(x > 20){
        console.log("Eu sou do Rio de Janeiro")
    }

    else {
        console.log("Eu sou de São Paulo")
    }
}


function sairProRole(dinheiro){

    if(dinheiro > 10 && dinheiro < 100){
        return "Bora sair!"
    }

    else if (dinheiro >= 100 && dinheiro < 1000)
        return "Eu pago!"

    else if ( dinheiro >=1000)
        return "Uhhhhu, tá estribado hein fi!!!"

    else {
        return "Netflix"
    }
}


function sairProRole(dinheiro){

    switch(dinheiro){
        case "pouco":
            return "Bora sair!";
        case "muito":
            return "Eu pago!";
        case "pra caralho":
            return "Uhhhhu, tá estribado hein fi!!!";
        default:
            return "Netflix";
    }
}

