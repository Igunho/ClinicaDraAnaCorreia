function atualizarHorario() { // Atualiza o horário a cada um segundo, a funcão é inicializada ao carregar o corpo do página
    const exibirHora = document.getElementById("horario")
    let horario = new Date()

    exibirHora.textContent = adicionarZero(horario.getHours()) + ":" + adicionarZero(horario.getMinutes()) + ":" + adicionarZero(horario.getSeconds()) 
    setTimeout(atualizarHorario, 1000)
}

function adicionarZero(tempo) { //Verifica se uma das unidades de tempo enviada pela funcão atualizarHorario é menor que dez, caso seja adiciona um zero a esquerda
  if (tempo < 10) {tempo = "0" + tempo};
  return tempo;
}

//Acesso rapido ao container para as informações do paciente
const pacienteInfo = {
  container:document.getElementById("paciente"),
  foto:document.getElementById("paciente").firstElementChild.children[0],
  nome:document.getElementById("paciente").firstElementChild.children[1],
  telefone:document.getElementById("paciente").firstElementChild.children[2]
}

//Altera as informações a direita com as do paciente selecionado
function selecionarPaciente(pacienteSelecionado) {
  pacienteInfo.container.hidden = false
  pacienteInfo.nome.textContent = pacienteSelecionado.children[1].firstElementChild.textContent
  pacienteInfo.telefone.textContent = pacienteSelecionado.children[1].children[2].textContent
}

const lista = document.getElementById("lista")
const itens = document.querySelectorAll(".item")
const historico = document.getElementById("historico")
let listaItens = []
let historicoItens = []

//Inicia uma pesquisa
function iniciarPesquisa() {
  historico.hidden = true

  for(let i = 0; i < itens.length; i++) {
    if(itens[i].parentElement.id == "lista") {
      listaItens[i] = itens[i]
    } else if(itens[i].parentElement.id == "historico") {
      historicoItens[i] = itens[i]
    }

    itens[i].remove()
    console.log(listaItens[i])
  }
}

function encerrarPesquisa() {
  historico.hidden = false

  for(let i = 0; i < listaItens.length; i++) {
    lista.appendChild(listaItens[i])
  }

  for(let i = 0; i < historicoItens.length; i++) {
    historico.appendChild(historicoItens[i])
  }
}