const btnSubmit = document.getElementById("btn") // Botão ADD
const input = document.getElementById("input") // Campo Input
const divTarefas = document.getElementById("tarefas") // Div onde ficará a lista de tarefas



window.addEventListener('keypress', function(event){ // Ativar a função submit com bnt Enter
    if (event.key == "Enter") {
    submit();
    }
});

function submit (){ // script de ações possíveis
    const divConteudo = document.createElement("div") // Div conteúdo de cada tarefa
    divConteudo.className = "div-conteudo" // Add uma classe à Div conteúdo
    divConteudo.setAttribute('draggable', true) // Habilitar Drag and Drop

    const btnCheck = document.createElement("input") // Criar botão check
    btnCheck.setAttribute("type", "checkbox") // Definindo as propriedades do btn check
    btnCheck.className = "btnCheck"

    const tarefasAdded = document.createElement("p") // Criar parágrafo ao clicar no btn ADD
    tarefasAdded.style.display="inline" // Alinhar parágrafo

    const btnExcluir = document.createElement("button")// Criar botão excluir
    btnExcluir.className = "btn-excluir" // Atribuir uma classe ao btn excluir
    btnExcluir.innerHTML = "🗑️" // Incluir o x no HTML

    const btnConcluir = document.getElementById("btnRodapeConcluir")// Criar botão concluir tarefas
    const btnLimparLista = document.getElementById("btnRodapeLimpar")// Criar botão limpar tarefas

    btnLimparLista.style.display = "inline-block";
    btnConcluir.style.display = "inline-block";
    
    let inputValor = input.value // Pegar valor do input
    
    if (inputValor == ""){
    const tarefasContainer = document.querySelectorAll(".div-conteudo") // Chamo todos as tarefas adicionadas pelo usuário

    const tarefasArray = Object.values(tarefasContainer) // Esse método retorna todas as propriedades do meu objeto como em um array
    if (tarefasArray.length==0) { // Se não tiver nenhuma tarefa, os botões do rodapé somem
        btnLimparLista.style.display = "none";
        btnConcluir.style.display = "none";
    }
    alert("Por favor, adicione uma tarefa válida!") // Invalidar campos vazios
    }
    else{ // Caso input seja válido
    divTarefas.appendChild(divConteudo)  // Div conteudo é filha da div tarefas
    
    tarefasAdded.innerHTML = inputValor // O valor do parágrafo criado deve ser inserido no HTML
    divConteudo.appendChild(btnCheck) // Btn check é filho da div conteúdo
    divConteudo.appendChild(tarefasAdded) // O parágrafo é filho da div conteúdo
    divConteudo.appendChild(btnExcluir) // Btn excluir é filho da div conteúdo

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

    btnExcluir.addEventListener('click', function(){ // Função para excluir tarefas individualmente
        divConteudo.remove();
        const tarefasContainer = document.querySelectorAll(".div-conteudo") // Chamo todos as tarefas adicionadas pelo usuário

        const tarefasArray = Object.values(tarefasContainer) // Esse método retorna todas as propriedades do meu objeto como em um array
        if (tarefasArray.length==0) { // Se não tiver nenhuma tarefa, os botões do rodapé somem
            btnLimparLista.style.display = "none";
            btnConcluir.style.display = "none";
        }
    });   

    // Drag and Drop
    divConteudo.addEventListener("dragstart", function (ev) { 
        dragging = ev.target.closest(".div-conteudo")
    })

    divConteudo.addEventListener("dragover", function (ev) {
        ev.preventDefault();
        const node = ev.target.closest(".div-conteudo")
        ev.dataTransfer.dropEffect = 'move';
        this.parentNode.insertBefore(dragging, node)  
    })

    divConteudo.addEventListener("dragend", function (ev) {
        ev.preventDefault();
        const node = ev.target.closest(".div-conteudo")
        this.parentNode.insertAfter(dragging, node)
    })

    // MELLLLL OLHA AQUIIII!!!
    btnConcluir.addEventListener("click", function(){ // Marcar ou desmarcar todas as tarefas como concluídas
        const marcarTarefas = document.querySelectorAll(".btnCheck") // Pegar todos os inputs checkbox
        
        let checados = btnCheck.checked;

        marcarTarefas.forEach(function(item){
            if (item.checked == true) {
                checados = true
            } else {
                checados = false
            }
        })

        if (!checados) {
            tarefasAdded.style.color = "grey";
            tarefasAdded.style.textDecoration = "line-through";
            btnCheck.checked = true;
        }else{
            btnCheck.checked = false;
            tarefasAdded.style.color = "black";
            tarefasAdded.style.textDecoration = "none";
        }
    });

    btnLimparLista.addEventListener("click", function(){ // Limpar a lista excluindo todas as tarefas e escondendo os btns concluir e excluir tudo
        tarefasAdded.remove();
        btnCheck.remove();
        btnExcluir.remove();
        divConteudo.remove();
        btnLimparLista.style.display = "none";
        btnConcluir.style.display = "none";
    }); //mudar ordem dos elementos da div-conteudo, estilizar botões e fazer o drop (extra)
}
btnSubmit.addEventListener('click', submit) // função submit aplicada ao botão ADD
