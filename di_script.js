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
  consultas:document.getElementById("tratamentos").firstElementChild
}

//Altera as informações a direita com as do paciente selecionado
function selecionarPaciente(pacienteSelecionado) {
  console.log(pacienteSelecionado.children[1].children[4].firstElementChild)
  pacienteInfo.container.hidden = false
  pacienteInfo.nome.textContent = pacienteSelecionado.children[1].firstElementChild.textContent
  pacienteInfo.telefone.textContent = pacienteSelecionado.children[1].children[3].children[1].textContent

  pacienteInfo.nascimento.textContent = "Data de Nascimento: " + pacienteSelecionado.children[1].children[3].children[0].textContent
  pacienteInfo.genero.textContent = "Sexo: " + pacienteSelecionado.children[1].children[3].children[3].textContent
  pacienteInfo.endereco.textContent = "Endereço: " + pacienteSelecionado.children[1].children[3].children[4].textContent
  pacienteInfo.telefonePrimario.textContent = "Telefone Primário: " + pacienteSelecionado.children[1].children[3].children[1].textContent
  pacienteInfo.telefoneSecundario.textContent = "Telefone Secundário: " + pacienteSelecionado.children[1].children[3].children[2].textContent
  pacienteInfo.email.textContent = "Email: " + pacienteSelecionado.children[1].children[3].children[5].textContent
  pacienteInfo.anamnese.textContent = pacienteSelecionado.children[1].children[3].children[6].textContent

  for(let i = 0; i < 3; i++) {
    pacienteInfo.consultas.appendChild(pacienteSelecionado.children[1].children[4].firstElementChild.children[i])
  }
}

//Declara objetos e variáveis que serão utilizadas recorrentemente
const lista = document.getElementById("lista")
const itens = document.querySelectorAll(".item")
const historico = document.getElementById("historico")
let listaItens = []
let historicoItens = []

let contadorPesquisa = 0
//Inicia uma pesquisa - "Eliminando" todos os itens da lista e depois a realiza
function pesquisar(entrada) {
  let listaAtual = [] //Cria uma lista para adicionar os resultados da pesquisa
  historico.hidden = true
  
  while (contadorPesquisa < 1) {
    for(let i = 0; i < itens.length; i++) {
      if(itens[i].parentElement.id == "lista") {
        listaItens[i] = itens[i]
      } else if(itens[i].parentElement.id == "historico") {
        historicoItens[i] = itens[i]
      } else { break }
      
      itens[i].remove() 
    }
    contadorPesquisa++
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

  if(entrada == "") {
    encerrarPesquisa() //Encerra a pesquisa caso ela seja apagada
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
  contadorPesquisa = 0
}

function selecionarAba(selecao) {
  const anterior = document.getElementById("selected")
  const info = document.getElementById("info")
  const tratamento = document.getElementById("tratamentos")
  const orcamento = document.getElementById("orcamento")

  switch(selecao.textContent) {
    case "INFORMAÇÕES":
      selecao.id = "selected"
      anterior.id = ""
      tratamento.hidden = true
      orcamento.hidden = true
      info.hidden = false
      break
    case "TRATAMENTOS":
      selecao.id = "selected"
      anterior.id = ""
      tratamento.hidden = false
      orcamento.hidden = true
      info.hidden = true
      break
    case "ORÇAMENTO":
      selecao.id = "selected"
      anterior.id = ""
      tratamento.hidden = true
      orcamento.hidden = false
      info.hidden = true
      break
    default:
      alert("erro")
      break
  }
}

const abaAgendamento = document.getElementById("novoAgendamento")
//Conclui um agendamento
function concluir(paciente) {
  console.log(paciente)
  paciente.children[2].children[2].hidden = true
  paciente.children[2].children[3].hidden = false
  historico.insertBefore(paciente, historico.children[0])
}
function agendar(paciente) {
  abaAgendamento.style.visibility = "visible"
  abaAgendamento.children[1].textContent = paciente.children[1].firstElementChild.textContent
  document.getElementById("main").classList.add("popup")
}
function cancelarAgendamento() {
  document.getElementById("novoAgendamento").style.visibility = "hidden"
  document.getElementById("editar").style.visibility = "hidden"
  document.getElementById("main").classList.remove("popup")
}
function finalizarAgendamento(data) {
  const agendamento = data.value.split("-")
  const dia = agendamento[2]; let mes = agendamento[1]; let ano = agendamento[0]
  const dataAtual = new Date(); const dataInput = new Date(data.value)
  let paciente

  if(dataInput.getTime() > dataAtual.getTime()) {
    for(let i = 0; i < itens.length; i++) {
      if(itens[i].children[1].firstElementChild.textContent == abaAgendamento.children[1].textContent) {
        itens[i].children[1].children[2].textContent = dia+"/"+mes+"/"+ano
        itens[i].children[2].children[3].hidden = true
        itens[i].children[2].children[2].hidden = false
        lista.appendChild(itens[i])

        cancelarAgendamento()
      }
    } 
  } else {
    window.alert("Invalido: data para nova consulta/remarcação é anterior a atual")
  }
}
function remarcar(paciente) {
  agendar(paciente)
}
function editarPopup(selecao) {
  for(let i = 0; i < itens.length; i++) {
    if(itens[i].children[1].firstElementChild.textContent == selecao) {
      const paciente = itens[i]
    }
  }

  document.getElementById("editar").style.visibility = "visible"
}
function editarInfo(paciente) {
  editarPopup(paciente)
}