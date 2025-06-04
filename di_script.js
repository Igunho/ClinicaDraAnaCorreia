function atualizarHorario() {
    const exibirHora = document.getElementById("horario")
    let horario = new Date()

    exibirHora.textContent = adicionarZero(horario.getHours()) + ":" + adicionarZero(horario.getMinutes()) + ":" + adicionarZero(horario.getSeconds()) 
    setTimeout(atualizarHorario, 1000)
}

function adicionarZero(tempo) {
  if (tempo < 10) {tempo = "0" + tempo};
  return tempo;
}