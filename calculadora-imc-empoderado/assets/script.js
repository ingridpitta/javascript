function calculoIMC(){
    var altura = document.getElementById("altura").value; //"value" armazena numa variável o valor que estiver dentro desse Id (altura).
    var peso = document.getElementById("peso").value;
    var resposta = document.getElementById("resposta");
    var lugarGif = document.getElementById("lugarGif");
    var gif;
    var calculo = (peso/(altura*altura)).toFixed(2); // to.Fixed(2); é um método do Javascript e indica - entre parênteses - quantas casas decimais desejamos mostrar.
    var text;
    var cssclass;

    if(calculo <18.5){
        text = "Uma deusa! 🎵";
        gif = `<img src="https://media1.tenor.com/images/8e6eaa0cc262ec7e781184ea0bbbb4f5/tenor.gif?itemid=8086430" alt="Gretchen Coroada" title="Gretchen Coroada">`;
        cssclass = "linha_1";
    }
    else if(calculo >= 18.5 && calculo <24.9){
        text = "Uma louca! 🎵";
        gif = `<img src="https://media1.tenor.com/images/7e91647a2c54d5b40b073035498287ed/tenor.gif?itemid=10476415" alt="Gretchen Louca" title="Gretchen Louca">`;
        cssclass = "linha_2";
    }
    else if(calculo >= 25 && calculo <29.9){
        text = "Uma feiticeira! 🎵";
        gif = `<img src="https://media1.tenor.com/images/9029659423a5bf6f45cc11f19464c15b/tenor.gif?itemid=13241560" alt="Gretchen Feiticeira" title="Gretchen Feiticeira">`;
        cssclass = "linha_3";
    }
    else if(calculo >= 30 && calculo <40){
        text = "Ela é demais! 🎵";
        gif = `<img src="https://media.tenor.com/images/e6f240310f83fb8bc75eb8b1cdf60c0f/tenor.gif" alt="Gretchen Demais" title="Gretchen Demais">`;
        cssclass = "linha_4";
    }
    else{
        text = "Meu Deus, ela é demais! 🎵";
        gif = `<img src="https://media.tenor.com/images/f669bfb13377f806bede827fdc2282ec/tenor.gif" alt="Gretchen Deusa, Louca, Feticieira Demais" title="retchen Deusa, Louca, Feticieira Demais">`;
        cssclass = "linha_5";
    }

    resposta.innerHTML = calculo + " - " + text;
    resposta.className = cssclass;
    lugarGif.innerHTML = gif;
}

