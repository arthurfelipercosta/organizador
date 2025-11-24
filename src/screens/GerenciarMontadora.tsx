// src/screens/GerenciarMontadoraVeiculo.tsx
// import de pacotes
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function GerenciarMontadoraScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Gerenciar Montadoras de Veículo</Text>
            <Text>Aqui você poderá adicionar, editar e remover montadoras.</Text>
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