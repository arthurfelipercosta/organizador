// src/data/anoTotais.ts

export const totaisPorAno: { [key: number]: number } = {
    1998: 187,
    2000: 250,
    2001: 240,
    2002: 240,
    2003: 220,
    2004: 212,
    2005: 187,
    2006: 223,
    2007: 180,
    2008: 196,
    2009: 190,
    2010: 240,
    2011: 244,
    2012: 248,
    2013: 250,
    2014: 250,
    2015: 250,
    2016: 250,
    2017: 365,
    2018: 365,
    2019: 250,
    2020: 250,
    2021: 250,
    2022: 250,
    2023: 250,
    2024: 250,
    2025: 250,
};

// Se você precisar de um valor padrão para anos não listados, pode adicionar uma função auxiliar
export function getTotalPorAno(ano: number): number | undefined {
    return totaisPorAno[ano] || 250;
}