// src/screens/ListaDeCarrinhos.tsx
// import de pacotes
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

// import de arquivos
import { Carrinho } from '@/src/types';
import { RootStackParamList } from 'App'; // Ajuste o caminho conforme a estrutura

type ListaDeCarrinhosScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ListaDeCarrinhos'>;

const mockCarrinhos: Carrinho[] = [
    { id: '1', nome: 'LaFerrari', marca: 'Ferrari', cor: 'Vermelho', rubber: true },
    { id: '2', nome: 'Porsche 911 GT3 RS', marca: 'Porsche', cor: 'Azul', rubber: false },
    { id: '3', nome: 'Nissan GT-R', marca: 'Nissan', cor: 'Prata', rubber: true },
];

export function ListaDeCarrinhosScreen() {
    const navigation = useNavigation<ListaDeCarrinhosScreenNavigationProp>();

    const renderItem = ({ item }: { item: Carrinho }) => (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate('DetalhesDoCarrinho', { carrinho: item })}
        >
            <Text style={styles.itemTitle}>{item.nome}</Text>
            <Text style={styles.itemSubtitle}>{item.marca} - {item.cor}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={mockCarrinhos}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
            />
            <TouchableOpacity
                style={styles.fab}
                onPress={() => navigation.navigate('FormularioCarrinho', {})}
            >
                <Text style={styles.fabText}>+</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    listContent: {
        padding: 10,
    },
    itemContainer: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    itemSubtitle: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    },
    fab: {
        position: 'absolute',
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
        backgroundColor: '#007bff',
        borderRadius: 30,
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
    },
    fabText: {
        fontSize: 24,
        color: '#fff',
    },
});