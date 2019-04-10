var elogios = [
    "Sexy",
    "Diva sem defeitos",
    "Você não é o Github, mas é um gatinho",
    "Máquina de vencer",
    "Ícone incompreendido",
    "Responsivo #SQN",
    "Maravilindo",
    "Cristal",
    "Sensato",
    "Fada sensata",
    "MaraviGold",
    "Zero defeitos",
    "Jóia rara",
    "Um neném",
    "Um pãozinho",
    "Bombonzinho",
    "Um caminho sem volta",
    "Uma deusa,uma louca uma feiticeira"
];

function elogiar(){
    var random = Math.floor(Math.random()*elogios.length);
        document.getElementById("titulo").innerHTML = elogios[random];
}