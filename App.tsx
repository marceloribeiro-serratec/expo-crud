import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WelcomeScreen } from './src/screens/WelcomeScreen';
import { CrudScreen } from './src/screens/CrudScreen';

type RootStackParamList = {
    Welcome: undefined;
    Crud: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="Welcome"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            >
                <Stack.Screen 
                    name="Welcome" 
                    component={WelcomeScreen} 
                    options={{ title: 'Início', headerShown: false }} 
                />
                <Stack.Screen 
                    name="Crud" 
                    component={CrudScreen} 
                    options={{ title: 'Gerenciar Itens' }} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
