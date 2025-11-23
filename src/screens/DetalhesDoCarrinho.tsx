// src/screens/DetalhesDoCarrinho.tsx
// import de pacotes
import React from 'react';
import { View, Text, Button, StyleSheet, Alert, ScrollView } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// import de arquivos
import { Carrinho } from '@/src/types';
import { RootStackParamList } from '../../App'; // Ajuste o caminho conforme a estrutura

type DetalhesDoCarrinhoScreenRouteProp = RouteProp<RootStackParamList, 'DetalhesDoCarrinho'>;
type DetalhesDoCarrinhoScreenNavigationProp = StackNavigationProp<RootStackParamList, 'DetalhesDoCarrinho'>;

export function DetalhesDoCarrinhoScreen() {
    const navigation = useNavigation<DetalhesDoCarrinhoScreenNavigationProp>();
    const route = useRoute<DetalhesDoCarrinhoScreenRouteProp>();
    const { carrinho } = route.params;

    if (!carrinho) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>Carrinho não encontrado.</Text>
            </View>
        );
    }

    const handleEdit = () => {
        navigation.navigate('FormularioCarrinho', { carrinho });
    };

    const handleDelete = () => {
        Alert.alert(
            'Excluir Carrinho',
            `Tem certeza que deseja excluir o carrinho ${carrinho.nome}?`,
            [
                { text: 'Cancelar', style: 'cancel' },
                { text: 'Excluir', onPress: () => Alert.alert('Excluído', 'Carrinho excluído com sucesso!') },
            ],
            { cancelable: true }
        );
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>{carrinho.nome}</Text>
                {carrinho.codigo && <Text style={styles.detailText}><Text style={styles.label}>Código:</Text> {carrinho.codigo}</Text>}
                {carrinho.brand && <Text style={styles.detailText}><Text style={styles.label}>Marca (Brinquedo):</Text> {carrinho.brand}</Text>}
                {carrinho.marca && <Text style={styles.detailText}><Text style={styles.label}>Marca (Veículo):</Text> {carrinho.marca}</Text>}
                {carrinho.cor && <Text style={styles.detailText}><Text style={styles.label}>Cor:</Text> {carrinho.cor}</Text>}
                {carrinho.color && <Text style={styles.detailText}><Text style={styles.label}>Color (Inglês):</Text> {carrinho.color}</Text>}
                {carrinho.pais && <Text style={styles.detailText}><Text style={styles.label}>País:</Text> {carrinho.pais}</Text>}
                <Text style={styles.detailText}><Text style={styles.label}>Pneu de Borracha:</Text> {carrinho.rubber ? 'Sim' : 'Não'}</Text>
            </View>

            <View style={styles.buttonContainer}>
                <Button title="Editar" onPress={handleEdit} />
                <View style={styles.buttonSpacer} />
                <Button title="Excluir" onPress={handleDelete} color="red" />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    card: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 8,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#333',
        textAlign: 'center',
    },
    detailText: {
        fontSize: 16,
        marginBottom: 8,
        color: '#555',
    },
    label: {
        fontWeight: 'bold',
        color: '#333',
    },
    errorText: {
        fontSize: 18,
        color: 'red',
        textAlign: 'center',
        marginTop: 50,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    buttonSpacer: {
        width: 10,
    }
});