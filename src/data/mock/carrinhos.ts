// src/data/mock/carrinhos.ts

//import de arquivos
import { Carrinho, MarcaInfo, MontadoraInfo, PaisInfo, SerieInfo, TreasureHuntInfo } from '@/src/types';

// Exemplo de dados para as sub-interfaces (você pode ter arquivos de dados reais para isso depois)
const mockMarcaHotWheels: MarcaInfo = { nome: 'Hot Wheels', logoImage: 'https://via.placeholder.com/30/FF0000/FFFFFF?text=HW' };
const mockMontadoraFerrari: MontadoraInfo = { nome: 'Ferrari', logoImage: 'https://via.placeholder.com/30/FF4500/FFFFFF?text=FR' };
const mockMontadoraPorsche: MontadoraInfo = { nome: 'Porsche', logoImage: 'https://via.placeholder.com/30/000000/FFFFFF?text=PO' };
const mockMontadoraNissan: MontadoraInfo = { nome: 'Nissan', logoImage: 'https://via.placeholder.com/30/0000FF/FFFFFF?text=NI' };
const mockPaisItalia: PaisInfo = { nome: 'Itália', bandeira: 'https://via.placeholder.com/30/008C45/FFFFFF?text=IT' };
const mockPaisAlemanha: PaisInfo = { nome: 'Alemanha', bandeira: 'https://via.placeholder.com/30/000000/FFCC00?text=DE' };
const mockPaisJapao: PaisInfo = { nome: 'Japão', bandeira: 'https://via.placeholder.com/30/BC002D/FFFFFF?text=JP' };
const mockSerieMainline: SerieInfo = { nome: 'Mainline', tipo: 'Mainline', imageUrl: 'https://via.placeholder.com/30/000000/FFFFFF?text=ML' };
const mockSerieFastFurious: SerieInfo = { nome: 'Fast & Furious', tipo: 'Premium', imageUrl: 'https://via.placeholder.com/30/000000/FFFFFF?text=FF' };
const mockRTH: TreasureHuntInfo = { tipo: 'RTH', imageUrl: 'https://via.placeholder.com/30/FFD700/000000?text=RTH' };
const mockSTH: TreasureHuntInfo = { tipo: 'STH', imageUrl: 'https://via.placeholder.com/30/FF4500/FFFFFF?text=STH' };

export const mockCarrinhos: Carrinho[] = [
    {
        id: '1',
        nome: 'LaFerrari',
        codigo: 'CFH20',
        marca: mockMarcaHotWheels,
        montadora: mockMontadoraFerrari,
        cor: 'Vermelho',
        color: 'Metalflake Red',
        pais: mockPaisItalia,
        anoLancamento: 2014,
        serie: mockSerieMainline,
        numeroSerie: 1,
        numeroAno: 120,
        treasureHunt: mockRTH,
        newModel: { isNew: true, imageUrl: 'https://via.placeholder.com/30/00FF00/000000?text=NEW' },
        rubber: true,
        custom: false,
        urlImage: 'https://via.placeholder.com/100/FF0000/FFFFFF?text=LaFerrari',
    },
    {
        id: '2',
        nome: 'Porsche 911 GT3 RS',
        codigo: 'DWH79',
        marca: mockMarcaHotWheels,
        montadora: mockMontadoraPorsche,
        cor: 'Azul',
        color: 'Viper Green',
        pais: mockPaisAlemanha,
        anoLancamento: 2017,
        serie: mockSerieMainline,
        numeroSerie: 2,
        treasureHunt: mockSTH,
        newModel: { isNew: false },
        rubber: false,
        custom: false,
        urlImage: 'https://via.placeholder.com/100/0000FF/FFFFFF?text=Porsche',
    },
    {
        id: '3',
        nome: 'Nissan GT-R',
        codigo: 'FNN49',
        marca: mockMarcaHotWheels,
        montadora: mockMontadoraNissan,
        cor: 'Prata',
        color: 'Metallic Silver',
        pais: mockPaisJapao,
        anoLancamento: 2019,
        serie: mockSerieFastFurious,
        numeroSerie: 3,
        treasureHunt: { tipo: 'Nenhum' },
        newModel: { isNew: false },
        rubber: true,
        custom: true,
        urlImage: 'https://via.placeholder.com/100/C0C0C0/000000?text=GT-R',
    },
];