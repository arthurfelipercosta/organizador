// src/screens/DetalhesDoCarrinho.tsx
// import de pacotes
import React from 'react';
import { View, Text, Button, StyleSheet, Alert, ScrollView } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// import de arquivos
import { Carrinho } from '@/src/types';
import { RootStackParamList } from 'App'; // Ajuste o caminho conforme a estrutura
import { getTotalPorAno } from '@/src/data/anoTotais';

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

    const totalDoAno = carrinho.anoLancamento ? getTotalPorAno(carrinho.anoLancamento) : undefined;

    return (
        <ScrollView style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>{carrinho.nome}</Text>
                {carrinho.urlImage && (
                    // Você precisará de um componente Image aqui, e talvez um estilo para ele
                    // <Image source={{ uri: carrinho.urlImage }} style={styles.carrinhoImage} />
                    <Text style={styles.detailText}><Text style={styles.label}>Imagem:</Text> {carrinho.urlImage}</Text>
                )}

                {carrinho.codigo && <Text style={styles.detailText}><Text style={styles.label}>Código:</Text> {carrinho.codigo}</Text>}

                {/* Marca do Brinquedo */}
                {carrinho.marca?.nome && (
                    <Text style={styles.detailText}>
                        <Text style={styles.label}>Marca (Brinquedo):</Text> {carrinho.marca.nome}
                        {/* Se tiver logo, você pode exibir aqui também */}
                        {/* {carrinho.marca.logoImage && <Image source={{ uri: carrinho.marca.logoImage }} style={styles.logoImage} />} */}
                    </Text>
                )}

                {/* Montadora do Veículo */}
                {carrinho.montadora?.nome && (
                    <Text style={styles.detailText}>
                        <Text style={styles.label}>Montadora (Veículo):</Text> {carrinho.montadora.nome}
                        {/* Se tiver logo, você pode exibir aqui também */}
                        {/* {carrinho.montadora.logoImage && <Image source={{ uri: carrinho.montadora.logoImage }} style={styles.logoImage} />} */}
                    </Text>
                )}

                {carrinho.cor && <Text style={styles.detailText}><Text style={styles.label}>Cor:</Text> {carrinho.cor}</Text>}
                {carrinho.color && <Text style={styles.detailText}><Text style={styles.label}>Cor (Detalhada):</Text> {carrinho.color}</Text>}

                {/* País */}
                {carrinho.pais?.nome && (
                    <Text style={styles.detailText}>
                        <Text style={styles.label}>País:</Text> {carrinho.pais.nome}
                        {/* Se tiver bandeira, você pode exibir aqui também */}
                        {/* {carrinho.pais.bandeira && <Image source={{ uri: carrinho.pais.bandeira }} style={styles.bandeiraImage} />} */}
                    </Text>
                )}

                {carrinho.anoLancamento && <Text style={styles.detailText}><Text style={styles.label}>Ano de Lançamento:</Text> {carrinho.anoLancamento}</Text>}

                {/* Série */}
                {carrinho.serie?.nome && (
                    <Text style={styles.detailText}>
                        <Text style={styles.label}>Série:</Text> {carrinho.serie.nome}
                        {carrinho.serie.tipo && ` (${carrinho.serie.tipo})`}
                        {/* Se tiver imagem da série, você pode exibir aqui também */}
                        {/* {carrinho.serie.imageUrl && <Image source={{ uri: carrinho.serie.imageUrl }} style={styles.serieImage} />} */}
                    </Text>
                )}

                {/* Número na Série */}
                {carrinho.numeroSerie && <Text style={styles.detailText}><Text style={styles.label}>Número na Série:</Text> {carrinho.numeroSerie}</Text>}

                {/* Número no Ano (com total derivado) */}
                {carrinho.numeroAno !== undefined && totalDoAno !== undefined && (
                    <Text style={styles.detailText}>
                        <Text style={styles.label}>Número no Ano:</Text> {carrinho.numeroAno}/{totalDoAno}
                    </Text>
                )}
                {carrinho.numeroAno !== undefined && totalDoAno === undefined && carrinho.anoLancamento && (
                    <Text style={styles.detailText}>
                        <Text style={styles.label}>Número no Ano:</Text> {carrinho.numeroAno} (Total para {carrinho.anoLancamento} não encontrado)
                    </Text>
                )}


                {/* Treasure Hunt (agora um objeto) */}
                {carrinho.treasureHunt?.tipo && (
                    <Text style={styles.detailText}>
                        <Text style={styles.label}>Treasure Hunt:</Text> {carrinho.treasureHunt.tipo}
                        {/* Se tiver imagem do Treasure Hunt, você pode exibir aqui também */}
                        {/* {carrinho.treasureHunt.imageUrl && <Image source={{ uri: carrinho.treasureHunt.imageUrl }} style={styles.thImage} />} */}
                    </Text>
                )}

                {/* New Model (agora um objeto) */}
                {carrinho.newModel?.isNew !== undefined && (
                    <Text style={styles.detailText}>
                        <Text style={styles.label}>Novo Modelo:</Text> {carrinho.newModel.isNew ? 'Sim' : 'Não'}
                        {/* Se tiver imagem de new model, você pode exibir aqui também */}
                        {/* {carrinho.newModel.imageUrl && <Image source={{ uri: carrinho.newModel.imageUrl }} style={styles.nmImage} />} */}
                    </Text>
                )}

                <Text style={styles.detailText}><Text style={styles.label}>Pneu de Borracha:</Text> {carrinho.rubber ? 'Sim' : 'Não'}</Text>
                <Text style={styles.detailText}><Text style={styles.label}>Custom:</Text> {carrinho.custom ? 'Sim' : 'Não'}</Text>

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