// src/types.ts

export interface Carrinho {
    id: string;         // identificador único
    codigo?: string;    // Código do carrinho - Ex: CFH20
    nome: string;       // LaFerrari
    brand?: string;     // Hot WHeels, Matchbox, GreenLight, etc
    marca?: string;     // Ferrari
    cor?: string;       // Vermelho
    color?: string;     // Metalflake Red
    pais?: string;      // Itália

    rubber?: boolean;   // Pneu de borracha?
}