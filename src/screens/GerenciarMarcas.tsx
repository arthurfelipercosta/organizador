// src/screens/GerenciarMarcas.tsx
// import de pacotes
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function GerenciarMarcasScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Gerenciar Marcas de Brinquedo</Text>
            <Text>Aqui você poderá adicionar, editar e remover marcas de brinquedo (Hot Wheels, etc).</Text>
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