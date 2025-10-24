import {Administrador} from "./classes/administrador.js"
window.onload = () =>{
    carregarTabela();
       
}

function carregarTabela(){
    const listaAdm = Administrador.listar();
    const tabela = document.getElementById("tabela-listaAdm")as HTMLTableElement;

    
    tabela.innerHTML = `
    <tr>
        <th>Nome</Th>
        <th>E-mail</th>        
        <th>Mensagem</th>        
        <th>Ação</th>
    </tr>
    `;
    listaAdm.forEach(adm =>{
        const linha = tabela.insertRow();
        linha.insertCell().textContent = adm.nome;
        linha.insertCell().textContent = adm.email;        
        linha.insertCell().textContent = adm.mensagem;
       

        let btnExcluir = document.createElement("button");
        btnExcluir.textContent = "Excluir";
        btnExcluir.addEventListener("click", () => {
            excluirAdm(adm.id);
        });

        linha.insertCell().appendChild(btnExcluir)


        /*let btnAlterar = document.createElement("button");
        btnAlterar.textContent = "Altera";
        btnAlterar.addEventListener("click", () => {
            alterarCont(cont.id)
        });
        linha.insertCell().appendChild(btnAlterar);*/

    });

}

function excluirAdm(id: string){
    if(confirm("Deseja Realmente Excluir este Registro?")){
        Administrador.excluir(id);
        carregarTabela();
    }
    
}

/*function alterarCont(id: string){
    window.location.href = `formulario.html?id=${id}`
}*/


