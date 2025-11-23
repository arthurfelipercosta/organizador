// src/screens/FormularioCarrinho.tsx
// import de pacotes
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Switch, Button, StyleSheet, Alert, ScrollView } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Picker } from '@react-native-picker/picker'; // Você precisará instalar este pacote: npm install @react-native-picker/picker ou yarn add @react-native-picker/picker

// import de arquivos
import { Carrinho } from '@/src/types';
import { RootStackParamList } from 'App'; // Ajuste o caminho conforme a estrutura

type FormularioCarrinhoScreenRouteProp = RouteProp<RootStackParamList, 'FormularioCarrinho'>;
type FormularioCarrinhoScreenNavigationProp = StackNavigationProp<RootStackParamList, 'FormularioCarrinho'>;

export function FormularioCarrinhoScreen() {
    const navigation = useNavigation<FormularioCarrinhoScreenNavigationProp>();
    const route = useRoute<FormularioCarrinhoScreenRouteProp>();
    const { carrinho: initialCarrinho } = route.params || {};

    const [codigo, setCodigo] = useState(initialCarrinho?.codigo || '');
    const [nome, setNome] = useState(initialCarrinho?.nome || '');
    const [brand, setBrand] = useState(initialCarrinho?.brand || ''); // marcaBrinquedo
    const [marca, setMarca] = useState(initialCarrinho?.marca || ''); // marcaVeiculo
    const [cor, setCor] = useState(initialCarrinho?.cor || '');
    const [pais, setPais] = useState(initialCarrinho?.pais || '');
    const [rubber, setRubber] = useState(initialCarrinho?.rubber || false);

    useEffect(() => {
        if (initialCarrinho) {
            setCodigo(initialCarrinho.codigo || '');
            setNome(initialCarrinho.nome);
            setBrand(initialCarrinho.brand || '');
            setMarca(initialCarrinho.marca || '');
            setCor(initialCarrinho.cor || '');
            setPais(initialCarrinho.pais || '');
            setRubber(initialCarrinho.rubber || false);
        }
    }, [initialCarrinho]);

    const handleSave = () => {
        // Aqui você integraria com o backend ou gerenciaria o estado global
        Alert.alert('Salvar', `Carrinho ${nome} salvo!`);
        navigation.goBack();
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.label}>Código:</Text>
            <TextInput
                style={styles.input}
                value={codigo}
                onChangeText={setCodigo}
                placeholder="Código do carrinho (ex: CFH20)"
            />

            <Text style={styles.label}>Nome:</Text>
            <TextInput
                style={styles.input}
                value={nome}
                onChangeText={setNome}
                placeholder="Nome do carrinho (ex: LaFerrari)"
            />

            <Text style={styles.label}>Marca do Brinquedo:</Text>
            <TextInput
                style={styles.input}
                value={brand}
                onChangeText={setBrand}
                placeholder="Hot Wheels, Matchbox, etc."
            />
            {/* Exemplo de Picker (descomente e instale @react-native-picker/picker se for usar) */}

            <Text style={styles.label}>Marca do Brinquedo:</Text>
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={brand}
                    onValueChange={(itemValue) => setBrand(itemValue)}
                >
                    <Picker.Item label="Hot Wheels" value="Hot Wheels" />
                    <Picker.Item label="Matchbox" value="Matchbox" />
                    <Picker.Item label="GreenLight" value="GreenLight" />
                </Picker>
            </View>


            <Text style={styles.label}>Marca do Veículo:</Text>
            <TextInput
                style={styles.input}
                value={marca}
                onChangeText={setMarca}
                placeholder="Ferrari, Porsche, etc."
            />

            <Text style={styles.label}>Cor:</Text>
            <TextInput
                style={styles.input}
                value={cor}
                onChangeText={setCor}
                placeholder="Vermelho, Azul, Prata, etc."
            />

            <Text style={styles.label}>País de Origem:</Text>
            <TextInput
                style={styles.input}
                value={pais}
                onChangeText={setPais}
                placeholder="Itália, Alemanha, Japão, etc."
            />

            <View style={styles.switchContainer}>
                <Text style={styles.label}>Pneu de Borracha?</Text>
                <Switch
                    onValueChange={setRubber}
                    value={rubber}
                />
            </View>

            <Button title="Salvar Carrinho" onPress={handleSave} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        borderRadius: 5,
        marginBottom: 15,
        fontSize: 16,
    },
    pickerContainer: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        marginBottom: 15,
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd',
    },
});