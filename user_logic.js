let before = null; //define que é a primeira vez executando o codigo
let prefix = ["<strong>Data: </strong> ",
                "<strong>Paciente Registrado: </strong> ",
                "<strong>Doutora: </strong>",
                "<strong>Procedimento: </strong>",
                "<strong>Valor: </strong>",
                "<strong>Forma de Pagamento: </strong>"  ]
                
const oi = document.getElementById("inf").querySelectorAll("hr");
const io = document.getElementById("inf").querySelectorAll("p"); 

//função que sleciona a informação do historico
function selecionar(selecionado) {

    const divatual = selecionado //defne a div atual

    if(before){
        before.classList.add("sel");
        before.style.backgroundColor='';
        before.style.inlineSize = '';
        before.style.fontWeight = '';
        before.style.borderRadius = ''
    }
    if(divatual === before){
        document.querySelectorAll('.vazio').forEach(element => {
        element.removeAttribute("hidden"); })

        document.querySelectorAll('.icon').forEach(element => {
        element.setAttribute("hidden", true); })

        oi.forEach(hr => hr.setAttribute("hidden", "true"));
        io.forEach(p => p.setAttribute("hidden", "true"));

        before = null;

    } else{
        divatual.classList.remove("sel");
        divatual.style.backgroundColor = "rgb(137, 233, 214)";
        divatual.style.fontWeight = "bold";
        divatual.style.borderRadius = "10px"

        before= divatual;

        let info = []; //array
        const register = Array.from(selecionado.children); //array guaradando os elementos da div selcionado
        const result = document.getElementById('inf').querySelectorAll("p"); //definindo result para os elementos "p" filhos onde as informações serão exibidas
        for(i =0; i < register.length; i++ ){
            info[i] = (register[i].textContent);  
        } //for para armazenar o conteudo de register na array info

        for (i =0; i < result.length; i++){
            result[i].innerHTML = prefix[i] + info[i];
        }//for para escrever as informações na tabela

        const oi = document.getElementById("inf").querySelectorAll("hr"); //seleciona todos os hrs em inf   
        oi.forEach(hr => hr.removeAttribute("hidden")); //mostra eles

        document.querySelectorAll('.vazio').forEach(element => {
            element.setAttribute("hidden", "true"); 
        }) //esconde os elemntos com a class vazio
    
        document.querySelectorAll('.icon').forEach(element => {
            element.removeAttribute("hidden"); 
        })

        io.forEach(p => p.removeAttribute("hidden"));
     }}
   
   

    

