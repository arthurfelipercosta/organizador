// src/screens/GerenciarPaises.tsx
// import de pacotes
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function GerenciarPaisesScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Gerenciar Países</Text>
            <Text>Aqui você poderá adicionar, editar e remover países e suas bandeiras.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});