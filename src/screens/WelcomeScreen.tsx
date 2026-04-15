import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { CustomButton } from '../components/CustomButton';

// Para tipagem básica (pode ser movida para types futuramente)
type RootStackParamList = {
    Welcome: undefined;
    Crud: undefined;
};

export function WelcomeScreen() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.title}>Bem-vindo!</Text>
                <Text style={styles.subtitle}>
                    Este é um app de demonstração contendo um CRUD completo criado com React Native.
                </Text>
                
                <CustomButton 
                    title="Acessar CRUD" 
                    onPress={() => navigation.navigate('Crud')}
                    style={styles.button}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 16,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 40,
        lineHeight: 24,
    },
    button: {
        width: '100%',
        maxWidth: 300,
        paddingVertical: 16,
    }
});
