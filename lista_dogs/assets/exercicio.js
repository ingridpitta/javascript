window.addEventListener('DOMContentLoaded', function (event) {
let dogs = ["Dakota","Arizona", "Glória","Rex","Bolinha"];

document.getElementById("frase").innerHTML = dogs.length;

dogs.forEach(function(item){
    let listaNomes = document.createElement("li");
    listaNomes.innerHTML = item;
    document.getElementById("resposta").appendChild(listaNomes);
})});
