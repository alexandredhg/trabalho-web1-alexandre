export class Contato {
    constructor(nome, email, mensagem) {
        this.nome = nome;
        this.email = email;
        this.mensagem = mensagem;
        this.id = crypto.randomUUID();
        this.nome = nome;
        this.email = email;
        this.mensagem = mensagem;
    }
    cadastrar() {
        //recupera a lista de adm armazenada no localstored
        const listaCont = JSON.parse(localStorage.getItem("listaCont") || "[]");
        //adiciona o adm atual a lista.
        listaCont.push(this);
        //salva a lista atualizada no localstorage.
        localStorage.setItem("listaCont", JSON.stringify(listaCont));
    }
    static listar() {
        const listaCont = JSON.parse(localStorage.getItem("listaCont") || "[]");
        return listaCont;
    }
    static excluir(id) {
        let listaCont = JSON.parse(localStorage.getItem("listaCont") || "[]");
        listaCont = listaCont.filter((cont) => cont.id !== id);
        localStorage.setItem("listaCont", JSON.stringify(listaCont));
    }
    static alterar(contAlterado) {
        let listaCont = JSON.parse(localStorage.getItem("listaCont") || "[]");
        listaCont = listaCont.map((cont) => {
            if (cont.id === contAlterado.id) {
                return contAlterado;
            }
            return cont;
        });
        localStorage.setItem("listaCont", JSON.stringify(listaCont));
    }
    static buscarCont(id) {
        let listaCont = this.listar();
        let cont = listaCont.find(cont => cont.id === id);
        return cont;
    }
}
//# sourceMappingURL=contato.js.map