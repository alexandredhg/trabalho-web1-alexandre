export declare class Contato {
    nome: string;
    email: string;
    mensagem: string;
    id: string;
    constructor(nome: string, email: string, mensagem: string);
    cadastrar(): void;
    static listar(): Contato[];
    static excluir(id: string): void;
    static alterar(contAlterado: Contato): void;
    static buscarCont(id: string): Contato | undefined;
}
//# sourceMappingURL=contato.d.ts.map