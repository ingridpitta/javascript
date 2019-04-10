var gifs = [
    `<img src="https://giphy.com/gifs/cat-gif-lasers-3o85xoi6nNqJQJ95Qc" alt="">`,
    `<img src="https://giphy.com/gifs/omrop-fryslan-computer-expert-xT9IgvSYNAaxOvDHna" alt="">`,
    `<img src="https://giphy.com/gifs/cat-christmas-yzY6HreJLiC6Q" alt="">`,
];

function sortearGifs() {
    var random = Math.floor
    (Math.random() * 3);
    document.getElementById
    ("ondeVaoOsGifs").innerHTML = gifs[random];
};