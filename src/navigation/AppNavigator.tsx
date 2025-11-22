// src/navigation/AppNavigator.tsx

// import de pacotes
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import de arquivos
import CarsListScreen from '@/screens/CarsListScreen';
import CarDetailScreen from '@/screens/CarDetailScreen';
import CarFormScreen from '@/screens/CarFormScreen';
import { Carro } from '@/types/carTypes';

export type RootStackParamList = {
    CarsList: undefined;
    CarDetail: { carId: string };
    CarForm: { carId?: string } | undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
    return (
        <Stack.Navigator initialRouteName="CarsList">
            <Stack.Screen name="CarsList" component={CarsListScreen} options={{ title: 'Meus Carrinhos' }} />
            <Stack.Screen name="CarDetail" component={CarDetailScreen} options={{ title: 'Detalhes do Carrinho' }} />
            <Stack.Screen name="CarForm" component={CarFormScreen} options={({ route }) => ({
                title: route.params?.carId ? 'Editar Carrinho' : 'Novo Carrinho',
            })} />
        </Stack.Navigator>
    );
}

export default AppNavigator;