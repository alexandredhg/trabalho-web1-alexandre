export class Administrador {
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
        const listaAdm = JSON.parse(localStorage.getItem("listaAdm") || "[]");
        //adiciona o adm atual a lista.
        listaAdm.push(this);
        //salva a lista atualizada no localstorage.
        localStorage.setItem("listaAdm", JSON.stringify(listaAdm));
    }
    static listar() {
        const listaAdm = JSON.parse(localStorage.getItem("listaAdm") || "[]");
        return listaAdm;
    }
    static excluir(id) {
        let listaAdm = JSON.parse(localStorage.getItem("listaAdm") || "[]");
        listaAdm = listaAdm.filter((adm) => adm.id !== id);
        localStorage.setItem("listaAdm", JSON.stringify(listaAdm));
    }
    /*static alterar(contAlterado: Contato): void{
        let listaCont: Contato[] = JSON.parse(localStorage.getItem("listaCont") || "[]");
        listaCont = listaCont.map((cont: Contato) => {
            if(cont.id === contAlterado.id){
                return contAlterado;
            }
            return cont;
        });
        localStorage.setItem("listaCont", JSON.stringify(listaCont));
        
    }*/
    static buscarAdm(id) {
        let listaAdm = this.listar();
        let adm = listaAdm.find(adm => adm.id === id);
        return adm;
    }
}
//# sourceMappingURL=administrador.js.map