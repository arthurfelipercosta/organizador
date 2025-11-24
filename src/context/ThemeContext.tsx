// src/context/ThemeContext
// import de pacotes
import React, { createContext, useState, useContext, useMemo, useEffect } from 'react';
import { Appearance } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { lightTheme, darkTheme, Theme as ThemeObject } from '@/src/styles/colors';

type ThemeName = 'light' | 'dark';

interface ThemeContextData {
    themeName: ThemeName; // Agora é 'light' ou 'dark'
    theme: ThemeObject; // O objeto de tema completo
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [themeName, setThemeName] = useState<ThemeName>(Appearance.getColorScheme() || 'light'); // Use themeName

    useEffect(() => {
        const loadTheme = async () => {
            try {
                const savedTheme = await AsyncStorage.getItem('theme');
                if (savedTheme === 'light' || savedTheme === 'dark') {
                    setThemeName(savedTheme);
                }
            } catch (e) {
                console.error("Failed to load theme from async storage.", e);
            }
        };
        loadTheme();
    }, []);

    const toggleTheme = async () => {
        const newThemeName = themeName === 'light' ? 'dark' : 'light'; // Use newThemeName
        setThemeName(newThemeName); // Use setThemeName
        await AsyncStorage.setItem('theme', newThemeName);
    };

    const currentTheme = themeName === 'dark' ? darkTheme : lightTheme; // Determine o objeto de tema

    const contextValue = useMemo(() => ({ themeName, theme: currentTheme, toggleTheme }), [themeName, currentTheme]); // Passe themeName e theme

    return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);