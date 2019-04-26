window.addEventListener('DOMContentLoaded', function (event) {
    //Mudar classe (css) de acordo com click do usuário
    let allForms = document.querySelectorAll('.conteudo');

    allForms.forEach(function(form){
        let characters = form.querySelectorAll('img');

        form.onclick = (e) => {
        characters.forEach(function(item){
            if(item.classList.contains('habilitado')){
                item.classList.remove('habilitado')
                item.classList.add('desabilitado')
            }
            
            if(item == e.target){
                item.classList.toggle('habilitado')
            }else{
                item.classList.add('desabilitado')
            }
        })
    }
    });
    
    let resultado = document.querySelector("#btnResultado");

    resultado.addEventListener("click", function gerarResultado(){
        //Resultados Possíveis
        let listaResultado = ["./assets/img/blue_ata.jpg", "./assets/img/blue_domadora_de_brancas.jpg", "./assets/img/blue_dona_da_porra_toda.gif","./assets/img/blue_forcada.jpeg", "./assets/img/blue_julgadora.jpg", "./assets/img/blue_meiga.jpeg", "./assets/img/blue_minha_filhaaaaa.jpg", "./assets/img/blue_nhaaam.jpg", "./assets/img/blue_princesa.jpg", "./assets/img/blue_really.jpg", "./assets/img/blue_sem_paciencia.jpg", "./assets/img/blue_sem_tempo_irmao.jpg"];
        //Pegar valor das seleções
        let selecionado = document.querySelectorAll('.habilitado');
        let value1 = selecionado[0]
        let value2 = selecionado[1]
        let value3 = selecionado[2]

        let opcao1 = value1.id;
        let opcao2 = value2.id;
        let opcao3 = value3.id;

        //Respostas Primeira Pergunta
        let escolhaNegros = ["childishGambino" ,"hER" , "cardiB"] ;
        let escolhaBrancos =  ["duaLipa" , "ladyGaga" , "mileyCyrus"];
        //Respostas Segunda Pergunta
        let escolhaBlue = ["arte" , "bitcoin" , "viagem"];
        let escolhaOutro =  ["carro", "casa" , "festa"] ;
        //Respostas Terceira Pergunta
        let escolhaBey = ["ohYeah" , "teyTey" , "aham"] ;
        let escolhaJay =  ["rsrs" , "omg" , "naoCreio"];
        //Respostas Selecionadas
        let resultado = [opcao1,opcao2,opcao3];
        //Condições possíveis
        for(let i=0; i < resultado.length; i++){
            if(escolhaNegros.includes(resultado[i]) && escolhaBlue.includes(resultado[i+1]) && escolhaBey.includes(resultado[i+2])){
                blueResultado.src = listaResultado[8];
            break;
            }
            else if(escolhaBrancos.includes(resultado[i]) && escolhaOutro.includes(resultado[i+1]) && escolhaJay.includes(resultado[i+2])){
                blueResultado.src = listaResultado[6];
            break;
            }
            else if(escolhaNegros.includes(resultado[i]) && escolhaBlue.includes(resultado[i+1]) && escolhaJay.includes(resultado[i+2])){
                blueResultado.src = listaResultado[2];
            break;
            }
            else if(escolhaBrancos.includes(resultado[i]) && escolhaBlue.includes(resultado[i+1]) && escolhaBey.includes(resultado[i+2])){
                blueResultado.src = listaResultado[3];
            break;
            }
            else if(escolhaNegros.includes(resultado[i]) && escolhaOutro.includes(resultado[i+1]) && escolhaJay.includes(resultado[i+2])){
                blueResultado.src = listaResultado[9];
            break;
            }
            else if(escolhaBrancos.includes(resultado[i]) && escolhaOutro.includes(resultado[i+1]) && escolhaBey.includes(resultado[i+2])){
                blueResultado.src = listaResultado[11];
            break;
            }
            else if(escolhaNegros.includes(resultado[i]) && escolhaOutro.includes(resultado[i+1]) && escolhaBey.includes(resultado[i+2])){
                blueResultado.src = listaResultado[10];
            break;
            }
            else{
                blueResultado.src = listaResultado[5];
            }
        };
    });     
});
