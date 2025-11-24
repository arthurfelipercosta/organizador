// src/styles/colors.ts

export interface Theme {
    background: string;
    text: string;
    primary: string;
    secondary: string;
    cardBackground: string;
    borderColor: string;
}

export const lightTheme: Theme = {
    background: '#f0f0f0',
    text: '#333333',
    primary: '#007bff',
    secondary: '#6c757d',
    cardBackground: '#ffffff',
    borderColor: '#cccccc',
};

export const darkTheme: Theme = {
    background: '#1a1a1a',
    text: '#ffffff',
    primary: '#8ab4f8',
    secondary: '#ced4da',
    cardBackground: '#2d2d2d',
    borderColor: '#444444',
};