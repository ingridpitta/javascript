/* 
Crie uma função indique se o número passado por parâmetro é primo ou não. 
Lembrando: todo número primo é apenas divisível por 1 e por ele mesmo.
*/
function primo(x) {
    for(var i = 1; i < x; i++){
        if(x % i === 0) {
            return true;
        };
    }
    return false;
}

// % significa resto da divisão
// número primo só é divisível por 1 e por ele mesmo e a soma de seus únicos dois divisores é ele + 1 = n+1