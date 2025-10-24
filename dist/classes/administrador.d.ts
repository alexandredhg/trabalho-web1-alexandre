export declare class Administrador {
    nome: string;
    email: string;
    mensagem: string;
    id: string;
    constructor(nome: string, email: string, mensagem: string);
    cadastrar(): void;
    static listar(): Administrador[];
    static excluir(id: string): void;
    static buscarAdm(id: string): Administrador | undefined;
}
//# sourceMappingURL=administrador.d.ts.map