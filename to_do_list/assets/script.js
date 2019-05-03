const btnSubmit = document.getElementById("btn") // Botão ADD
const input = document.getElementById("input") // Campo Input
const divTarefas = document.getElementById("tarefas") // Div onde ficará a lista de tarefas
const btnConcluir = document.getElementById("btnRodapeConcluir")// Criar botão concluir tarefas
const btnLimparLista = document.getElementById("btnRodapeLimpar")// Criar botão limpar tarefas


window.addEventListener('keypress', function (event) { // Ativar a função submit com bnt Enter
    if (event.key == "Enter") {
        submit();
    }
});

function submit() { // ações possíveis
    const divConteudo = document.createElement("div") // Div conteúdo de cada tarefa
    divConteudo.className = "div-conteudo" // Add uma classe à Div conteúdo
    divConteudo.setAttribute('draggable', true) // Habilitar Drag and Drop

    const btnCheck = document.createElement("input") // Criar botão check
    btnCheck.setAttribute("type", "checkbox") // Definindo as propriedades do btn check
    btnCheck.className = "btnCheck" // Add uma classe ao checkbox

    const tarefasAdded = document.createElement("p") // Criar parágrafo ao clicar no btn ADD
    tarefasAdded.style.display = "inline" // Alinhar parágrafo

    const btnExcluir = document.createElement("button")// Criar botão excluir
    btnExcluir.className = "btn-excluir" // Atribuir uma classe ao btn excluir
    btnExcluir.innerHTML = "🗑️" // Incluir o ícone de excluir no HTML

    btnLimparLista.style.display = "inline-block"; // Mostrar btn ao add tarefa
    btnConcluir.style.display = "inline-block"; // Mostrar btn ao add tarefa

    let inputValor = input.value.trim() // Pegar valor do input, o trim() serve para eliminar os espaços vazios

    if (inputValor == "") {
        const tarefasContainer = document.querySelectorAll(".div-conteudo") // Chamo todos as tarefas adicionadas pelo usuário

        const tarefasArray = Object.values(tarefasContainer) // Esse método retorna todas as propriedades do meu objeto como em um array
        if (tarefasArray.length == 0) { // Se não tiver nenhuma tarefa, os botões do rodapé somem
            btnLimparLista.style.display = "none"; // Esconder btn 
            btnConcluir.style.display = "none"; // Esconder btn 
        }
        alert("Por favor, adicione uma tarefa válida!") // Invalidar campos vazios
    }
    else { // Caso input seja válido
        divTarefas.appendChild(divConteudo)  // Div conteudo é filha da div tarefas

        tarefasAdded.innerHTML = inputValor // O valor do parágrafo criado deve ser inserido no HTML
        divConteudo.appendChild(btnCheck) // Btn check é filho da div conteúdo
        divConteudo.appendChild(tarefasAdded) // O parágrafo é filho da div conteúdo
        divConteudo.appendChild(btnExcluir) // Btn excluir é filho da div conteúdo

        input.value = "" // Limpar o input 
    }

    btnCheck.addEventListener('click', function () { // Função para alternar o estilo do parágrafo (done not done)
        if (this.checked) { // Se marcado atribua este estilo
            tarefasAdded.style.color = "grey";
            tarefasAdded.style.textDecoration = "line-through";
        } else { // Se desmarcado atribua este estilo
            tarefasAdded.style.color = "black";
            tarefasAdded.style.textDecoration = "none";
        }
    });

    btnExcluir.addEventListener('click', function () { // Função para excluir tarefas individualmente
        divConteudo.remove();
        const tarefasContainer = document.querySelectorAll(".div-conteudo") // Chamo todos as tarefas adicionadas pelo usuário

        const tarefasArray = Object.values(tarefasContainer) // Esse método retorna todas as propriedades do meu objeto como em um array
        if (tarefasArray.length == 0) { // Se não tiver nenhuma tarefa, os botões do rodapé somem
            btnLimparLista.style.display = "none"; // Esconder btn 
            btnConcluir.style.display = "none"; // Esconder btn 
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
        this.style.opacity = "0.5";
        this.style.opacity = "1";
    })

    divConteudo.addEventListener("dragend", function (ev) {
        ev.preventDefault();
        const node = ev.target.closest(".div-conteudo")
        this.parentNode.insertBefore(dragging, node)
    })

    btnLimparLista.addEventListener("click", function () { // Limpar a lista excluindo todas as tarefas e escondendo os btns concluir e excluir tudo
        divConteudo.remove(); // Remover div das tarefas
        btnLimparLista.style.display = "none"; // Esconder btn
        btnConcluir.style.display = "none"; // Esconder btn
    });
}
btnSubmit.addEventListener('click', submit) // função submit aplicada ao botão ADD

btnConcluir.addEventListener("click", function () { // Marcar/Desmarcar todas as tarefas
    const tarefas = document.querySelectorAll(".div-conteudo");

    let action = false; // desmarcado
    //validação do action
    for (i = 0; i < tarefas.length; i++) {
        const check = tarefas[i].querySelector(".btnCheck").checked //pegar os checkboxes marcados dentro do loop um a um
        if (!check) { // pegar os checkboxes não marcados em tarefas.length
            action = true //  marcar os checkboxes não marcados
            break; // pare de rodar a função e só rode de novo no próximo clique onde cairá no else
        } else { 
            action = false // desmarcar os checkboxes marcados no clique anterior e os que já estavam marcados anteriormente
        }
    }
    // Add estilo a partir da validação do action
    tarefas.forEach(function (item) {
        item.querySelector(".btnCheck").checked = action // marcar ou desmarcar checkboxes
        const paragrafo = item.querySelector("p") // pegar os parágrafos
        if (action) { // action == true então estão marcados e deve-se aplicar este estilo
            paragrafo.style.color = "grey"
            paragrafo.style.textDecoration = "line-through"
        } else { // action == false então estão desmarcados e deve-se aplicar este estilo
            paragrafo.style.color = "black"
            paragrafo.style.textDecoration = "none"
        }
    })
})