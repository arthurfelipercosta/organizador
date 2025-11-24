// src/screens/FormularioCarrinho.tsx
// import de pacotes
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Switch, Button, StyleSheet, Alert, ScrollView } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Picker } from '@react-native-picker/picker';
import { SafeAreaView } from 'react-native-safe-area-context';

// import de arquivos
import { Carrinho, MarcaInfo, MontadoraInfo, PaisInfo } from '@/src/types'; // Importe as interfaces auxiliares
import { RootStackParamList } from 'App'; // Ajuste o caminho conforme a estrutura
import { montadoraVeiculo } from '../data/montadoraVeiculo';

type FormularioCarrinhoScreenRouteProp = RouteProp<RootStackParamList, 'FormularioCarrinho'>;
type FormularioCarrinhoScreenNavigationProp = StackNavigationProp<RootStackParamList, 'FormularioCarrinho'>;

export function FormularioCarrinhoScreen() {
    const navigation = useNavigation<FormularioCarrinhoScreenNavigationProp>();
    const route = useRoute<FormularioCarrinhoScreenRouteProp>();
    const { carrinho: initialCarrinho } = route.params || {};

    const [codigo, setCodigo] = useState(initialCarrinho?.codigo || '');
    const [nome, setNome] = useState(initialCarrinho?.nome || '');
    const [montadora, setMontadora] = useState<MontadoraInfo | undefined>(initialCarrinho?.montadora); // marcaBrinquedo
    const [marca, setMarca] = useState<MarcaInfo | undefined>(initialCarrinho?.marca); // marcaVeiculo
    const [cor, setCor] = useState(initialCarrinho?.cor || '');
    const [pais, setPais] = useState<PaisInfo | undefined>(initialCarrinho?.pais);
    const [rubber, setRubber] = useState(initialCarrinho?.rubber || false);

    useEffect(() => {
        if (initialCarrinho) {
            setCodigo(initialCarrinho.codigo || '');
            setNome(initialCarrinho.nome);
            setMontadora(initialCarrinho.montadora);
            setMarca(initialCarrinho.marca);
            setCor(initialCarrinho.cor || '');
            setPais(initialCarrinho.pais);
            setRubber(initialCarrinho.rubber || false);
        }
    }, [initialCarrinho]);

    const handleSave = () => {
        const carrinhoParaSalvar: Carrinho = {
            id: initialCarrinho?.id || String(Date.now()), // Gere um ID provisório se for um novo carrinho
            nome: nome,
            codigo: codigo,
            marca: marca,
            montadora: montadora,
            cor: cor,
            pais: pais,
            rubber: rubber,
            // ... adicione outros campos conforme sua interface Carrinho
        };
        Alert.alert('Salvar', `Carrinho ${nome} salvo!`);
        navigation.goBack();
    };

    return (
        <ScrollView style={styles.container}>
            <SafeAreaView style={{paddingBottom: 30}}>
                <Text style={styles.label}>Código:</Text>
                <TextInput
                    style={styles.input}
                    value={codigo}
                    onChangeText={setCodigo}
                    placeholder="Código (ex: CFH20)"
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
                    value={marca?.nome || ''}
                    onChangeText={(text) => setMontadora}
                    placeholder="Hot Wheels, Matchbox, etc."
                />
                {/* Exemplo de Picker (descomente e instale @react-native-picker/picker se for usar) */}

                <Text style={styles.label}>Marca do Brinquedo:</Text>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={montadora}
                        onValueChange={(itemValue) => setMontadora(itemValue)}
                    >
                        <Picker.Item label="Hot Wheels" value="Hot Wheels" />
                        <Picker.Item label="Matchbox" value="Matchbox" />
                        <Picker.Item label="GreenLight" value="GreenLight" />
                    </Picker>
                </View>


                <Text style={styles.label}>Montadora do Veículo:</Text>
                <TextInput
                    style={styles.input}
                    value={montadora?.nome}
                    onChangeText={(text) => setMarca({ ...montadoraVeiculo, nome: text })}
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
                    value={pais?.nome || ''}
                    onChangeText={(text) => setPais({ ...pais, nome: text })}
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
            </SafeAreaView>
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