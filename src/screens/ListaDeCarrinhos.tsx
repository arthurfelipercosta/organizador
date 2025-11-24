// src/screens/ListaDeCarrinhos.tsx
// import de pacotes
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

// import de arquivos
import { Carrinho } from '@/src/types';
import { RootStackParamList } from 'App'; // Ajuste o caminho conforme a estrutura
import { mockCarrinhos } from '@/src/data/mock/carrinhos'; // Importe os mocks do arquivo separado


type ListaDeCarrinhosScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ListaDeCarrinhos'>;

export function ListaDeCarrinhosScreen() {
    const navigation = useNavigation<ListaDeCarrinhosScreenNavigationProp>();

    const renderItem = ({ item }: { item: Carrinho }) => (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate('DetalhesDoCarrinho', { carrinho: item })}
        >
            {/* Exibe a imagem do carrinho (miniatura) */}
            {item.urlImage && (
                <Image source={{ uri: item.urlImage }} style={styles.thumbnailImage} />
            )}
            <View style={styles.itemTextContent}>
                <Text style={styles.itemTitle}>{item.nome}</Text>
                {/* Acessa a propriedade 'nome' de 'montadora' */}
                <Text style={styles.itemSubtitle}>{item.montadora?.nome} - {item.cor}</Text>
            </View>
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
        flexDirection: 'row', // Adicionado para alinhar imagem e texto horizontalmente
        alignItems: 'center',  // Adicionado para centralizar verticalmente
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    thumbnailImage: {
        width: 60,
        height: 60,
        borderRadius: 8,
        marginRight: 15, // Aumentei o espaçamento
        backgroundColor: '#e1e1e1', // Cor de fundo enquanto a imagem carrega
    },
    itemTextContent: {
        flex: 1, // Permite que o texto ocupe o espaço restante
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
        bottom: 50,
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