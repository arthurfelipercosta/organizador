// src/types.ts

export interface PaisInfo {
    nome: string;       // Nome do país
    bandeira?: string;  // URL da bandeira (preferência em .svg)
}

export interface MarcaInfo {
    nome: string;        // Nome da brand (Hot Wheels, Matchbox, etc)
    logoImage?: string;  // URL da logo (preferência em .svg)
}

export interface MontadoraInfo {
    nome: string;        // Nome da marca (Ferrari, Ford, etc)
    logoImage?: string;  // URL da logo (preferência em .svg)
}

export interface SerieInfo {
    nome: string;
    tipo?: string;      // Pack5, pack3, Premium, Mainline
    imageUrl?: string;  // Imagem da série (preferência em .svg)
}

export interface TreasureHuntInfo {
    tipo: 'RTH' | 'STH' | 'Mainline' | 'Premium' | 'RLC' | 'Nenhum';
    imageUrl?: string;  // Imagem para o tipo de série
}

export interface Carrinho {
    id: string;                         // identificador único
    codigo?: string;                    // Código do carrinho - Ex: CFH20
    nome: string;                       // LaFerrari

    marca?: MarcaInfo;                  // Hot Wheels, Matchbox, GreenLight, etc
    montadora?: MontadoraInfo;              // Ferrari
    
    cor?: string;                       // Vermelho
    color?: string;                     // Metalflake Red
    
    pais?: PaisInfo;                    // Itália
    anoLancamento ?: number;            // Ano que foi lançado
    serie?: SerieInfo;                  // Nome da série (Fast & Furious, etc)

    numeroSerie?:number;                // Número do carrinho na série (Ex: 2)
    totalSerie?:number;                 // Número total da série (Ex: 5)
    numeroAno?: number;                 // Número da mini naquele ano (Ex: 120/250)

    treasureHunt?: TreasureHuntInfo;    // R=RTH; S=STH; N=Mainline; 
    newModel?: {
        isNew: boolean;
        imageUrl?: string;
    };                                  // É o 1º modelo?
    rubber?: boolean;                   // Pneu de borracha?
    custom?: boolean;                   // É custom?

    urlImage?: string;                  // URL da imagem do carrinho
}