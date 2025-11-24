// src/components/ThemeToggleButton.tsx

// import de pacotes
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// import de arquivos
import { useTheme } from '@/src/context/ThemeContext';

export function ThemeToggleButton() {
    const { themeName, toggleTheme, theme } = useTheme(); // Obtenha themeName e theme

    return (
        <TouchableOpacity onPress={toggleTheme} style={styles.button}>
            <Ionicons
                name={themeName === 'dark' ? 'moon' : 'sunny'}
                size={24}
                color={theme.text}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
    },
});