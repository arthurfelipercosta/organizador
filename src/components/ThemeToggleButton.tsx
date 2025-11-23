// src/components/ThemeToggleButton

// import de pacotes
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// import de arquivos
import { useTheme } from '@/src/context/ThemeContext';
import { colors } from '@/src/styles/colors';

export const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useTheme();
    const themeColors = colors[theme];

    return (
        <TouchableOpacity onPress={toggleTheme} style={{ marginRight: 15 }}>
            <Ionicons
                name={theme === 'light' ? 'moon' : 'sunny'}
                size={24}
                color={themeColors.icon}
            />
        </TouchableOpacity>
    );
};