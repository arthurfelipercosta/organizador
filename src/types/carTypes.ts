// src/types/carTypes.ts
export interface Carro {
    id: string;     // Um ID único para cada carrinho
    name: string;   // Nome de cada carrinho
    marca: string;  // Hot Wheels, Matchbox, Greenlight, ...
    cor?: string;  // Cor do carrinho (opcional)
    ano?: number;  // Ano do carrinho
    escala?: string;   // 1:64, 1:43, ...
    obs?: string;   // Observações
    fotoUrl?: string;  // URL para a imagem do carrinho
    tipoPneu?: string; // Borracha, plástico, ...
}

export type newCarro = Omit<Carro, 'id'>;