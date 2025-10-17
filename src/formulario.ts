import {Contato} from "./classes/contato.js"

const formFormulario = document.getElementById("formFormulario") as HTMLFormElement;
const txtNome = document.getElementById("txtNome") as HTMLInputElement;
const txtEmail = document.getElementById("txtEmail") as HTMLInputElement;
const txtMensagem = document.getElementById("txtMensagem") as HTMLInputElement;
const divMensagem = document.getElementById("divMensagem") as HTMLDivElement;
const btnSubmit = document.getElementById("btnSubmit") as HTMLButtonElement;
const btnLimpa = document.getElementById("btnLimpa") as HTMLButtonElement;
let params = new URLSearchParams(window.location.search);
let id = params.get("id");

window.onload = () => {
    if(id){
        btnSubmit.textContent = "Alterar";
        carregarDadosCont(id);
    }
}


function exibirMenssagem(color: string, msg: string){
   divMensagem.style.color = color;
    divMensagem.textContent = msg
}

formFormulario.addEventListener("submit", (event) =>{
    event.preventDefault();
    const nome = txtNome.value;
    const email = txtEmail.value;
    const mensagem = txtMensagem.value;
if(!id){
    const cont = new Contato(nome, email, mensagem);
    cont.cadastrar();
    exibirMenssagem("green", "Menssagem Enviada com Sucesso!");
}else{
    let contAlterado = new Contato(nome, email, mensagem);
    contAlterado.id = id;
    Contato.alterar(contAlterado);
    exibirMenssagem("Green", "Alteralção Realizada com Sucesso!");
    
} 
   

});

function carregarDadosCont(id: string){
    let cont = Contato.buscarCont(id);
    if(cont){
        txtNome.value = cont.nome;
        txtEmail.value = cont.email;
        txtMensagem.value = cont.mensagem;
    }

}

btnLimpa.addEventListener("click", (event) => {
    limparCampos();   
    
});

function limparCampos(): void {    

    // Limpa o valor de cada campo
    txtNome.value = '';
    txtEmail.value = '';
    txtMensagem.value = '';

    exibirMenssagem("blue", "Limpeza dos Campos Realizada com sucesso!"); 
           
}