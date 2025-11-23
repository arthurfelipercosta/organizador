// src/types.ts

export interface Carrinho {
    id: string;                 // identificador único
    codigo?: string;            // Código do carrinho - Ex: CFH20
    nome: string;               // LaFerrari
    brand?: string;             // Hot Wheels, Matchbox, GreenLight, etc
    marca?: string;             // Ferrari
    cor?: string;               // Vermelho
    color?: string;             // Metalflake Red
    pais?: string;              // Itália
    anoLancamento ?: number;    // Ano que foi lançado
    serieName?: string;         // Nome da série (Fast & Furious, etc)
    serieTipo?: string;         // Tipo da série (pack 5, mainline, premium, etc)
    numeroSerie?:number;        // Número do carrinho na série (Ex: 2)
    totalSerie?:number;         // Número total da série (Ex: 5)
    numeroAno?: number;         // Número da mini naquele ano (Ex: 120/250)

    treasureHunt?: string;      // R=RTH; S=STH; N=Mainline; 
    newModel?: boolean;         // É o 1º modelo?
    rubber?: boolean;           // Pneu de borracha?
    custom?: boolean;           // É custom?

    urlImage?: string;          // URL da imagem do carrinho
}