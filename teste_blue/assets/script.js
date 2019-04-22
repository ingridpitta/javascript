window.addEventListener('DOMContentLoaded', function (event) {

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
        let listaResultado = ["./assets/img/blue_ata.jpg", "./assets/img/blue_domadora_de_brancas.jpg", "./assets/img/blue_dona_da_porra_toda.gif","./assets/img/blue_forcada.jpeg", "./assets/img/blue_domadora.jpg", "./assets/img/blue_meiga.jpeg", "./assets/img/blue_minha_filhaaaaa.jpg", "./assets/img/blue_nhaaam.jpg", "./assets/img/blue_princesa.jpg", "./assets/img/blue_really.jpg", "./assets/img/blue_sem_paciencia.jpg", "./assets/img/blue_sem_tempo_irmao.jpg"];
        
        let selecionado = document.querySelectorAll('.habilitado');
        let value1 = selecionado[0]
        let value2 = selecionado[1]
        let value3 = selecionado[2]

        let opcao1 = value1.id;
        let opcao2 = value2.id;
        let opcao3 = value3.id;


        let escolhaNegros = ["#childishGambino" ,"#hER" , "#cardiB"] ;
        let escolhaBrancos =  ["#duaLipa" , "#ladyGaga" , "#mileyCyrus"];
        let escolhaBlue = ["#arte" , "#bitcoin" , "#viagem"];
        let escolhaOutro =  ["#carro", "#casa" , "#festa"] ;
        let escolhaBey = ["#ohYeah" , "#teyTey" , "#aham"] ;
        let escolhaJay =  ["#rsrs" , "#omg" , "#naoCreio"];


        console.log(opcao1,opcao2,opcao3);
        switch(opcao1,opcao2,opcao3){

            case ([escolhaNegros].includes(opcao1) && [escolhaBlue].includes(opcao2) && [escolhaBey].includes(opcao3)):
                blueResultado.src = listaResultado[0];
            break;

            case ([escolhaBrancos].includes(opcao1) && [escolhaOutro].includes(opcao2) && [escolhaJay].includes(opcao3)):
                blueResultado.src = listaResultado[1];
            break;

            case ([escolhaNegros].includes(opcao1) && [escolhaBlue].includes(opcao2) && [escolhaJay].includes(opcao3)):
                blueResultado.src = listaResultado[2];
            break;

            case ([escolhaBrancos].includes(opcao1) && [escolhaBlue].includes(opcao2) && [escolhaBey].includes(opcao3)):
                blueResultado.src = listaResultado[3];
            break;

            case ([escolhaNegros].includes(opcao1) && [escolhaOutro].includes(opcao2) && [escolhaJay].includes(opcao3)):
                blueResultado.src = listaResultado[4];
            break;

            case ([escolhaBrancos].includes(opcao1) && [escolhaOutro].includes(opcao2) && [escolhaBey].includes(opcao3)):
                blueResultado.src = listaResultado[5];
            break;
            default:
                alert("Por favor selecione uma imagem para cada pergunta!");
            break;
        };
    });     
});
