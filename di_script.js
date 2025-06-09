//Atualiza o horário a cada um segundo, a funcão é inicializada ao carregar o corpo do página
function atualizarHorario() { 
    const exibirHora = document.getElementById("horario")
    let horario = new Date()

    exibirHora.textContent = adicionarZero(horario.getHours()) + ":" + adicionarZero(horario.getMinutes()) + ":" + adicionarZero(horario.getSeconds()) 
    setTimeout(atualizarHorario, 1000)
}

//Verifica se uma das unidades de tempo enviada pela funcão atualizarHorario é menor que dez, caso seja adiciona um zero a esquerda
function adicionarZero(tempo) { 
  if (tempo < 10) {tempo = "0" + tempo};
  return tempo;
}

//Acesso rapido ao container para as informações do paciente
const pacienteInfo = {
  container:document.getElementById("paciente"),
  foto:document.getElementById("paciente").firstElementChild.children[0],
  nome:document.getElementById("paciente").firstElementChild.children[1],
  telefone:document.getElementById("paciente").firstElementChild.children[2],
  nascimento:document.getElementById("info").children[0],
  genero:document.getElementById("info").children[1],
  endereco:document.getElementById("info").children[2],
  telefonePrimario:document.getElementById("info").children[3].children[0],
  telefoneSecundario:document.getElementById("info").children[3].children[1],
  email:document.getElementById("info").children[3].children[2],
  anamnese:document.getElementById("info").children[4],
}

//Altera as informações a direita com as do paciente selecionado
function selecionarPaciente(pacienteSelecionado) {
  console.log(pacienteInfo)

  pacienteInfo.container.hidden = false
  pacienteInfo.nome.textContent = pacienteSelecionado.children[1].firstElementChild.textContent
  pacienteInfo.telefone.textContent = pacienteSelecionado.children[1].lastElementChild.children[1].textContent

  pacienteInfo.nascimento.textContent = "Data de Nascimento: " + pacienteSelecionado.children[1].lastElementChild.children[0].textContent
  pacienteInfo.genero.textContent = "Sexo: " + pacienteSelecionado.children[1].lastElementChild.children[3].textContent
  pacienteInfo.endereco.textContent = "Endereço: " + pacienteSelecionado.children[1].lastElementChild.children[4].textContent
  pacienteInfo.telefonePrimario.textContent = "Telefone Primário: " + pacienteSelecionado.children[1].lastElementChild.children[1].textContent
  pacienteInfo.telefoneSecundario.textContent = "Telefone Secundário: " + pacienteSelecionado.children[1].lastElementChild.children[2].textContent
  pacienteInfo.email.textContent = "Email: " + pacienteSelecionado.children[1].lastElementChild.children[5].textContent
  pacienteInfo.anamnese.textContent = pacienteSelecionado.children[1].lastElementChild.children[6].textContent
}

//Declara objetos e variáveis que serão utilizadas recorrentemente
const lista = document.getElementById("lista")
const itens = document.querySelectorAll(".item")
const historico = document.getElementById("historico")
let listaItens = []
let historicoItens = []

//Inicia uma pesquisa - "Eliminando" todos os itens da lista
function iniciarPesquisa() {
  historico.hidden = true

  for(let i = 0; i < itens.length; i++) {
    if(itens[i].parentElement.id == "lista") {
      listaItens[i] = itens[i]
    } else if(itens[i].parentElement.id == "historico") {
      historicoItens[i] = itens[i]
    }

    itens[i].remove()
  }
}

//Encerra uma pesquisa - Retornando todos os itens a lista
function encerrarPesquisa() {
  for(let i = 0; i < listaItens.length; i++) {
    lista.appendChild(listaItens[i])
  }

  for(let i = 3; i < historicoItens.length; i++) {
    historico.appendChild(historicoItens[i])
  }

  historico.hidden = false
}

//Realiza uma pesquisa
function pesquisar(entrada) {
  let listaAtual = [] //Cria uma lista para adicionar os resultados da pesquisa

  if(entrada == "") {
    encerrarPesquisa() //Encerra a pesquisa caso ela seja apagada
  }

  for(let i = 0; i < itens.length; i++) { 
    if(listaAtual.includes(itens[i].id) == false) { //Verifica se o item atual da iteração já está sendo mostrado como resultado
      if(itens[i].children[1].firstElementChild.textContent.toLowerCase() == entrada.toLowerCase()) {
        //Caso exista um item com o mesmo nome da pesquisa ele será exibido na lista
        lista.appendChild(itens[i])
        listaAtual.push(itens[i].id)
      }
    }
  }

  console.log(listaAtual)
}