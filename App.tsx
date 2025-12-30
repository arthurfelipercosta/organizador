// App.tsx

// import de pacotes
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

// import de arquivos
import { Carrinho } from '@/src/types'; // Importa a interface Carrinho
import { ThemeProvider, useTheme } from '@/src/context/ThemeContext';
import { ThemeToggleButton } from '@/src/components/ThemeToggleButton';

// import de páginas
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
};

export type RootDrawerParamList = {
  HomeStack: undefined;
  GerenciarMontadoras: undefined;
  GerenciarMarcas: undefined;
  GerenciarSeries: undefined;
  GerenciarPaises: undefined;
  FormularioCarrinho: { carrinho?: Carrinho };
};

const Stack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootDrawerParamList>();

function CustomDrawerContent(props: any) {
  const { theme } = useTheme(); // Use o hook useTheme aqui para pegar o objeto de tema

  return (
    <DrawerContentScrollView {...props} style={{ backgroundColor: theme.background }}>
      <View style={[styles.drawerHeader, { backgroundColor: theme.cardBackground }]}>
        <Image
          source={require('./assets/sport-car.png')} 
          style={{ width: 80, height: 80 }}
        />
        <Text style={[styles.drawerHeaderText, { color: theme.text }]}>Organizador de Carrinhos</Text>
      </View>
      <View style={styles.themeToggleContainer}>
        <ThemeToggleButton />
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

function HomeStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="ListaDeCarrinhos">
      <Stack.Screen
        name="ListaDeCarrinhos"
        component={ListaDeCarrinhosScreen}
        options={{ title: 'Meus Carrinhos', headerShown: false }}
      />
      <Stack.Screen
        name="DetalhesDoCarrinho"
        component={DetalhesDoCarrinhoScreen}
        options={{ title: 'Detalhes do Carrinho' }}
      />

    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="HomeStack"
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen
            name="HomeStack"
            component={HomeStackNavigator}
            options={{ title: 'Meus Carrinhos', headerRight: () => <ThemeToggleButton /> }}
          />
          <Drawer.Screen
            name="GerenciarMontadoras"
            component={GerenciarMontadoraScreen}
            options={{ title: 'Lista de Montadoras', headerRight: () => <ThemeToggleButton /> }}
          />
          <Drawer.Screen
            name="GerenciarMarcas"
            component={GerenciarMarcasScreen}
            options={{ title: 'Lista Marcas de Brinquedo', headerRight: () => <ThemeToggleButton /> }}
          />
          <Drawer.Screen
            name="GerenciarSeries"
            component={GerenciarSeriesScreen}
            options={{ title: 'Lista de Séries', headerRight: () => <ThemeToggleButton /> }}
          />
          <Drawer.Screen
            name="GerenciarPaises"
            component={GerenciarPaisesScreen}
            options={{ title: 'Lista de Países', headerRight: () => <ThemeToggleButton /> }}
          />
          <Drawer.Screen
            name="FormularioCarrinho"
            component={FormularioCarrinhoScreen}
            options={{ title: 'Formulário do Carrinho', headerRight: () => <ThemeToggleButton /> }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  drawerHeader: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  drawerHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  themeToggleContainer: {
    alignItems: 'flex-end', // Alinhe o botão à direita no cabeçalho
    paddingRight: 10,
    paddingBottom: 10,
  }
});