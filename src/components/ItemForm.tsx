import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, ScrollView, Text } from 'react-native';
import { Item } from '../types';
import { CustomButton } from './CustomButton';

interface ItemFormProps {
    onSubmit: (item: Omit<Item, 'id' | 'createdAt'>) => void;
    editingItem: Item | null;
    onCancel: () => void;
}

export function ItemForm({ onSubmit, editingItem, onCancel }: ItemFormProps) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (editingItem) {
            setName(editingItem.name);
            setDescription(editingItem.description || '');
        } else {
            setName('');
            setDescription('');
        }
    }, [editingItem]);

    const handleSubmit = () => {
        if (name.trim() === '') return;
        
        onSubmit({ 
            name: name.trim(), 
            description: description.trim() 
        });
        
        // Limpar após adicionar (se não estiver em edição)
        if (!editingItem) {
            setName('');
            setDescription('');
        }
    };

    return (
        <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
            <Text style={styles.title}>
                {editingItem ? 'Editar Item' : 'Adicionar Novo Item'}
            </Text>
            
            <TextInput
                style={styles.input}
                placeholder="Nome do Item"
                placeholderTextColor="#999"
                value={name}
                onChangeText={setName}
            />
            
            <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Descrição (opcional)"
                placeholderTextColor="#999"
                value={description}
                onChangeText={setDescription}
                multiline
                numberOfLines={3}
            />
            
            <View style={styles.buttonContainer}>
                {editingItem && (
                    <CustomButton 
                        title="Cancelar" 
                        variant="secondary" 
                        onPress={onCancel}
                        style={styles.button}
                    />
                )}
                <CustomButton 
                    title={editingItem ? "Salvar" : "Adicionar"} 
                    onPress={handleSubmit}
                    style={styles.button}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F9F9F9',
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#EAEAEA',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
        color: '#333',
    },
    input: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#DDDDDD',
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
        fontSize: 16,
        color: '#333',
    },
    textArea: {
        height: 80,
        textAlignVertical: 'top',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 12,
    },
    button: {
        minWidth: 100,
    }
});
