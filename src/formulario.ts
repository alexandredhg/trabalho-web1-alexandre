import {Administrador} from "./classes/administrador.js"

const formFormulario = document.getElementById("formFormulario") as HTMLFormElement;
const txtNome = document.getElementById("txtNome") as HTMLInputElement;
const txtEmail = document.getElementById("txtEmail") as HTMLInputElement;
const txtMensagem = document.getElementById("txtMensagem") as HTMLInputElement;

const divMensagem = document.getElementById("divMensagem") as HTMLDivElement;
const btnSubmit = document.getElementById("btnSubmit") as HTMLButtonElement;
const btnLimpa = document.getElementById("btnLimpa") as HTMLButtonElement;
let params = new URLSearchParams(window.location.search);
let id = params.get("id");

/*window.onload = () => {
    if(id){
        btnSubmit.textContent = "Alterar";
        carregarDadosAdm(id);
    }
}*/


function exibirMensagem(color: string, msg: string){
   divMensagem.style.color = color;
    divMensagem.textContent = msg
}

formFormulario.addEventListener("submit", (event) =>{
    event.preventDefault();

    const nome = txtNome.value.trim();
    const email = txtEmail.value .trim();    
    const mensagem = txtMensagem.value.trim(); 

  
    if(!id){
        const adm = new Administrador(nome, email, mensagem);
        adm.cadastrar();
        exibirMensagem("green", "Mensagem Enviada com Sucesso!");
        formFormulario.reset();
    }
    /*else{
        let contAlterado = new Contato(nome, email, mensagem);
        contAlterado.id = id;
        Contato.alterar(contAlterado);
        exibirMenssagem("Green", "Alteralção Realizada com Sucesso!");
        
    }*/ 
   

});

function carregarDadosAdm(id: string){
    let adm = Administrador.buscarAdm(id);
    if(adm){
        txtNome.value = adm.nome;
        txtEmail.value = adm.email;        
        txtMensagem.value = adm.mensagem;
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

    exibirMensagem("blue", "Limpeza dos Campos Realizada com sucesso!"); 
           
}