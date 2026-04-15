import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text, KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';
import { Item } from '../types';
import { ItemForm } from '../components/ItemForm';
import { ItemCard } from '../components/ItemCard';

export function CrudScreen() {
    const [items, setItems] = useState<Item[]>([]);
    const [editingItem, setEditingItem] = useState<Item | null>(null);

    const handleAddItem = (newItemData: Omit<Item, 'id' | 'createdAt'>) => {
        const newItem: Item = {
            id: Math.random().toString(36).substring(2, 9),
            name: newItemData.name,
            description: newItemData.description,
            createdAt: Date.now(),
        };
        setItems(prev => [newItem, ...prev]);
    };

    const handleUpdateItem = (updatedItemData: Omit<Item, 'id' | 'createdAt'>) => {
        if (!editingItem) return;
        
        setItems(prev => prev.map(item => 
            item.id === editingItem.id 
                ? { ...item, name: updatedItemData.name, description: updatedItemData.description }
                : item
        ));
        setEditingItem(null);
    };

    const handleDeleteItem = (id: string) => {
        setItems(prev => prev.filter(item => item.id !== id));
        if (editingItem?.id === id) {
            setEditingItem(null);
        }
    };

    const handleEditItem = (item: Item) => {
        setEditingItem(item);
    };

    const handleCancelEdit = () => {
        setEditingItem(null);
    };

    const handleFormSubmit = (data: Omit<Item, 'id' | 'createdAt'>) => {
        if (editingItem) {
            handleUpdateItem(data);
        } else {
            handleAddItem(data);
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView 
                style={styles.container} 
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                <View style={styles.formContainer}>
                    <ItemForm 
                        onSubmit={handleFormSubmit} 
                        editingItem={editingItem}
                        onCancel={handleCancelEdit}
                    />
                </View>
                
                <View style={styles.listContainer}>
                    <Text style={styles.listTitle}>Lista de Itens</Text>
                    {items.length === 0 ? (
                        <Text style={styles.emptyText}>Nenhum item cadastrado.</Text>
                    ) : (
                        <FlatList
                            data={items}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (
                                <ItemCard 
                                    item={item} 
                                    onEdit={handleEditItem} 
                                    onDelete={handleDeleteItem} 
                                />
                            )}
                            contentContainerStyle={styles.flatListContent}
                            showsVerticalScrollIndicator={false}
                        />
                    )}
                </View>
            </KeyboardAvoidingView>
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
    },
    formContainer: {
        padding: 16,
        // Limita a altura máxima do ScrollView no ItemForm
        maxHeight: '50%',
    },
    listContainer: {
        flex: 1,
        paddingHorizontal: 16,
    },
    listTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 12,
        color: '#333',
    },
    flatListContent: {
        paddingBottom: 24,
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 20,
        color: '#999',
        fontSize: 16,
    }
});
