export class Contato{
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
        const listaCont: Contato[] = JSON.parse(localStorage.getItem("listaCont") || "[]");

        //adiciona o adm atual a lista.
        listaCont.push(this);

        //salva a lista atualizada no localstorage.
        localStorage.setItem("listaCont", JSON.stringify(listaCont));
       
    }

    static listar(): Contato[]{
        const listaCont: Contato[] = JSON.parse(localStorage.getItem("listaCont") || "[]");
        return listaCont;
    }

    static excluir(id: string): void{
        let listaCont: Contato[] = JSON.parse(localStorage.getItem("listaCont") || "[]");
        listaCont = listaCont.filter((cont: Contato) => cont.id !== id);
        localStorage.setItem("listaCont", JSON.stringify(listaCont));
    }

    static alterar(contAlterado: Contato): void{
        let listaCont: Contato[] = JSON.parse(localStorage.getItem("listaCont") || "[]");
        listaCont = listaCont.map((cont: Contato) => {
            if(cont.id === contAlterado.id){
                return contAlterado;
            }
            return cont;
        });
        localStorage.setItem("listaCont", JSON.stringify(listaCont)); 
        
    }

    static buscarCont(id: string){
        let listaCont: Contato[] = this.listar();
        let cont = listaCont.find(cont => cont.id === id);
        return cont;
    }
         
}

     



