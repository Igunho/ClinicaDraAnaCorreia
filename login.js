function logar() {
    const cpf = document.getElementById("cpf").value

    if(cpf == "1234") {
        window.location.assign("user_interface.html")
    } else if(cpf == "admin") {
        window.location.assign("doutora_interface.html")
    } else {
        window.alert("Erro cpf não possui histórico")
    }

}
