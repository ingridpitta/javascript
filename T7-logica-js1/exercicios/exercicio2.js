// Crie uma função com dois argumentos, que retorna a subtração deles.
//Function é um bloco de código que pode ser chamado.
function sub(a,b){
    return a-b;
}
// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando "10" ao resultado retornado da função.
var qualquer = sub(50,5) + 10;
// Qual o valor atualizado dessa variável?
55
// Declare uma nova variável, sem valor.
var roberta;
/*
Crie uma função que adicione um valor à variável criada acima, e retorne a seguinte mensagem:
    "O novo valor da minha variável agora é VALOR."
    (onde VALOR é o novo valor da variável).
*/
roberta = 15;
function chamarRoberta(){
    var roberta = 15; 
    console.log("O novo valor da minha variável agora é " + roberta);
}

// Invoque a função criada acima.

// Qual o retorno da função? (Use comentários de bloco).

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando "2" ao resultado da multiplicação.
*/
function nome(a,b,c){
    if(a == undefined || b == undefined || c == undefined)
        {console.log("Preencha todos os valores corretamente!")
    }
    else{
        console.log(((a*b*c)+2))
    }     
}
// Invoque a função criada acima, passando só dois números como argumento.
// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// ===> Preencha todos os valores corretamente!
// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
8
/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano "false".
6. E ainda, se nenhuma das condições acima forem atendidas, retorne "null".
*/
function nome(a,b,c){
    if(a && !b && !c)
        {return a
    }
    else if(!a && b && !c)
        {return b
    }
    else if(!a && !b && c)
        {return c
    }
    else if(a && b && !c)
        {return a+b
    }
    else if(a && !b && c)
        {return a+c
    }
    else if(!a && b && c)
        {return b+c
    }
    else if(a && b && c){
        return ((a+b)/c)
    } 
    else if(!a && !b && !c)
        {return false
    } 
    else{
        return null
    }    
}
// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.