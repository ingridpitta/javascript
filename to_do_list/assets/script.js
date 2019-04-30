const btnSubmit = document.getElementById("btn") // Botão ADD
const input = document.getElementById("input") // Campo Input
const divTarefas = document.getElementById("tarefas") // Div onde ficará a lista de tarefas




btnSubmit.addEventListener('click', function(){ // Função btn ADD
    const divConteudo = document.createElement("div") // Div conteúdo de cada tarefa
    divConteudo.className = "div-conteudo" // Add uma classe à Div conteúdo

    const btnCheck = document.createElement("input") // Criar botão check
    btnCheck.setAttribute("type", "checkbox") // Definindo as propriedades do btn check

    const tarefasAdded = document.createElement("p") // Criar parágrafo ao clicar no btn ADD
    tarefasAdded.style.display="inline" // Alinhar parágrafo

    const btnExcluir = document.createElement("button")// Criar botão excluir
    btnExcluir.className = "btn-excluir" // Atribuir uma classe ao btn excluir
    btnExcluir.innerHTML = "X" // Incluir o x no HTML

    const btnConcluir = document.getElementById("btnRodapeConcluir")// Criar botão concluir tarefas
    const btnLimparLista = document.getElementById("btnRodapeLimpar")// Criar botão limpar tarefas

    btnLimparLista.style.display = "inline-block";
    btnConcluir.style.display = "inline-block";
    
    let inputValor = input.value // Pegar valor do input
   
    if (inputValor == "") // Caso input seja vazio (inválido)
    {
        alert("Por favor, adicione uma tarefa válida!") // Invalidar campos vazios
    }

    else { // Caso input seja válido
    divTarefas.appendChild(divConteudo)  // Div conteudo é filha da div tarefas
    divConteudo.appendChild(btnCheck) // Btn check é filho da div conteúdo
    divConteudo.appendChild(btnExcluir) // Btn excluir é filho da div conteúdo

    tarefasAdded.innerHTML = inputValor  // O valor do parágrafo criado deve ser inserido no HTML
    divConteudo.appendChild(tarefasAdded) // O parágrafo é filho da div conteúdo

    input.value = "" // Limpar o input 
    }

    btnCheck.addEventListener('click', function(){ // Função para alternar o estilo do parágrafo (done not done)
        if(this.checked){
        tarefasAdded.style.color = "grey";
        tarefasAdded.style.textDecoration = "line-through";
        }else{
        tarefasAdded.style.color = "black";
        tarefasAdded.style.textDecoration = "none";
        }
    });

    btnExcluir.addEventListener("click", function(){ // btn exclui as tarefas uma a uma e esconde os btns limpar tudo e conluir tarefas caso não tenha nenhum ítem na lista
        tarefasAdded.remove();
        btnCheck.remove();
        btnExcluir.remove();
        // console.log(divConteudo);
        // console.log(divTarefas.innerHTML)
        const tarefasContainer = document.querySelectorAll('.div-conteudo')
        // console.log(tarefasContainer)

        let vazio = false

        tarefasContainer.forEach(function(item){ // esconder btns
            if (item.innerHTML != "") {
                vazio = false
            } else {
                vazio = true
            }
        })

        if (vazio) {
            btnLimparLista.style.display = "none";
            btnConcluir.style.display = "none";
        }
    });

    btnConcluir.addEventListener("click", function(){ // Marcar ou desmarcar todas as tarefas como concluídas
        if(btnCheck.checked == true){
        btnCheck.checked = false;
        tarefasAdded.style.color = "black";
        tarefasAdded.style.textDecoration = "none";
        }else{
        btnCheck.checked = true;
        tarefasAdded.style.color = "grey";
        tarefasAdded.style.textDecoration = "line-through";
        }
    });

    btnLimparLista.addEventListener("click", function(){ // Limpar a lista excluindo todas as tarefas e escondendo os btns concluir e excluir tudo
        tarefasAdded.remove();
        btnCheck.remove();
        btnExcluir.remove();
        btnLimparLista.style.display = "none";
        btnConcluir.style.display = "none";
    });
}); //mudar ordem dos elementos da div-conteudo, estilizar botões e fazer o drop (extra)