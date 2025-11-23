// App.tsx
// import de pacotes
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import de arquivos
import { ListaDeCarrinhosScreen } from '@/src/screens/ListaDeCarrinhos';
import { DetalhesDoCarrinhoScreen } from '@/src/screens/DetalhesDoCarrinho';
import { FormularioCarrinhoScreen } from '@/src/screens/FormularioCarrinho';
import { Carrinho } from '@/src/types'; // Importa a interface Carrinho

export type RootStackParamList = {
  ListaDeCarrinhos: undefined;
  DetalhesDoCarrinho: { carrinho: Carrinho };
  FormularioCarrinho: { carrinho?: Carrinho };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
}