import { Contato } from "./classes/contato.js";
window.onload = () => {
    carregarTabela();
};
function carregarTabela() {
    const listaCont = Contato.listar();
    const tabela = document.getElementById("tabela-listaCont");
    tabela.innerHTML = `
    <tr>
        <th>Nome</Th>
        <th>E-mail</th>
        <th>Mensagem</th>        
        <th colspan= "2">Ações</th>
    </tr>
    `;
    listaCont.forEach(cont => {
        const linha = tabela.insertRow();
        linha.insertCell().textContent = cont.nome;
        linha.insertCell().textContent = cont.email;
        linha.insertCell().textContent = cont.mensagem;
        let btnExcluir = document.createElement("button");
        btnExcluir.textContent = "excluir";
        btnExcluir.addEventListener("click", () => {
            excluirCont(cont.id);
        });
        linha.insertCell().appendChild(btnExcluir);
        let btnAlterar = document.createElement("button");
        btnAlterar.textContent = "Altera";
        btnAlterar.addEventListener("click", () => {
            alterarCont(cont.id);
        });
        linha.insertCell().appendChild(btnAlterar);
    });
}
function excluirCont(id) {
    if (confirm("Deseja Realmente Excluir este Registro?")) {
        Contato.excluir(id);
        carregarTabela();
    }
}
function alterarCont(id) {
    window.location.href = `formulario.html?id=${id}`;
}
//# sourceMappingURL=contato.js.map