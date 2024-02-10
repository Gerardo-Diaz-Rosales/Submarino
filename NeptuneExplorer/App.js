// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }} // Oculta el encabezado en la pantalla principal
        />
        {/* Agrega otras pantallas aquí si es necesario */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
