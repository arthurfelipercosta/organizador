// App.tsx
// import de pacotes
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// import de arquivos
import { Carrinho } from '@/src/types'; // Importa a interface Carrinho
import { ListaDeCarrinhosScreen } from '@/src/screens/ListaDeCarrinhos';
import { DetalhesDoCarrinhoScreen } from '@/src/screens/DetalhesDoCarrinho';
import { FormularioCarrinhoScreen } from '@/src/screens/FormularioCarrinho';
import { GerenciarMarcasScreen } from '@/src/screens/GerenciarMarcas';
import { GerenciarMontadoraScreen } from '@/src/screens/GerenciarMontadora';
import { GerenciarPaisesScreen } from '@/src/screens/GerenciarPaises';
import { GerenciarSeriesScreen } from '@/src/screens/GerenciarSeries';

export type RootStackParamList = {
  ListaDeCarrinhos: undefined;
  DetalhesDoCarrinho: { carrinho: Carrinho };
  FormularioCarrinho: { carrinho?: Carrinho };
};

export type RootDrawerParamList = {
  HomeStack: undefined;
  GerenciarMontadoras: undefined;
  GerenciarMarcas: undefined;
  GerenciarSeries: undefined;
  GerenciarPaises: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootDrawerParamList>();

function HomeStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="ListaDeCarrinhos">
      <Stack.Screen
        name="ListaDeCarrinhos"
        component={ListaDeCarrinhosScreen}
        options={{ title: 'Meus Carrinhos' }}
      />
      <Stack.Screen
        name="DetalhesDoCarrinho"
        component={DetalhesDoCarrinhoScreen}
        options={{ title: 'Detalhes do Carrinho' }}
      />
      <Stack.Screen
        name="FormularioCarrinho"
        component={FormularioCarrinhoScreen}
        options={{ title: 'Formulário do Carrinho' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeStack">
        <Drawer.Screen
          name="HomeStack"
          component={HomeStackNavigator}
          options={{ title: 'Início' }}
        />
        <Drawer.Screen
          name="GerenciarMontadoras"
          component={GerenciarMontadoraScreen}
          options={{ title: 'Gerenciar Montadoras' }}
        />
        <Drawer.Screen
          name="GerenciarMarcas"
          component={GerenciarMarcasScreen}
          options={{ title: 'Gerenciar Marcas de Brinquedo' }}
        />
        <Drawer.Screen
          name="GerenciarSeries"
          component={GerenciarSeriesScreen}
          options={{ title: 'Gerenciar Séries' }}
        />
        <Drawer.Screen
          name="GerenciarPaises"
          component={GerenciarPaisesScreen}
          options={{ title: 'Gerenciar Países' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}