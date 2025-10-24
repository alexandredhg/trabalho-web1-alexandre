export class Administrador{
    public id: string;
    constructor(
        public nome: string,
        public email: string,        
        public mensagem: string
    ){
        this.id = crypto.randomUUID();
        this.nome = nome;
        this.email = email;        
        this.mensagem = mensagem;
    }

    cadastrar(): void{
        //recupera a lista de adm armazenada no localstored
        const listaAdm: Administrador[] = JSON.parse(localStorage.getItem("listaAdm") || "[]");

        //adiciona o adm atual a lista.
        listaAdm.push(this);

        //salva a lista atualizada no localstorage.
        localStorage.setItem("listaAdm", JSON.stringify(listaAdm));
       
    }

    static listar(): Administrador[]{
        const listaAdm: Administrador[] = JSON.parse(localStorage.getItem("listaAdm") || "[]");
        return listaAdm;
    }

    static excluir(id: string): void{
        let listaAdm: Administrador[] = JSON.parse(localStorage.getItem("listaAdm") || "[]");
        listaAdm = listaAdm.filter((adm: Administrador) => adm.id !== id);
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

    static buscarAdm(id: string){
        let listaAdm: Administrador[] = this.listar();
        let adm = listaAdm.find(adm => adm.id === id);
        return adm;
    }
         
}

     



