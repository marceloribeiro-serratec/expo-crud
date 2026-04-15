import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Item } from '../types';
import { CustomButton } from './CustomButton';

interface ItemCardProps {
    item: Item;
    onEdit: (item: Item) => void;
    onDelete: (id: string) => void;
}

export function ItemCard({ item, onEdit, onDelete }: ItemCardProps) {
    return (
        <View style={styles.card}>
            <View style={styles.details}>
                <Text style={styles.name}>{item.name}</Text>
                {item.description ? (
                    <Text style={styles.description}>{item.description}</Text>
                ) : null}
            </View>
            <View style={styles.actions}>
                <CustomButton 
                    title="Editar" 
                    variant="secondary" 
                    onPress={() => onEdit(item)}
                    style={styles.actionButton}
                    textStyle={styles.actionButtonText}
                />
                <CustomButton 
                    title="Excluir" 
                    variant="danger" 
                    onPress={() => onDelete(item.id)}
                    style={styles.actionButton}
                    textStyle={styles.actionButtonText}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFFFFF',
        padding: 16,
        marginVertical: 8,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // Sombra para iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        // Sombra para Android
        elevation: 2,
    },
    details: {
        flex: 1,
        marginRight: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    description: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
    actions: {
        flexDirection: 'row',
        gap: 8,
    },
    actionButton: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginVertical: 0,
    },
    actionButtonText: {
        fontSize: 12,
    }
});
