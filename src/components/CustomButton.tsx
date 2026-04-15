import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps, StyleProp, ViewStyle, TextStyle } from 'react-native';

interface CustomButtonProps extends TouchableOpacityProps {
    title: string;
    variant?: 'primary' | 'secondary' | 'danger';
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
}

export function CustomButton({ title, variant = 'primary', style, textStyle, ...rest }: CustomButtonProps) {
    const buttonStyle = [
        styles.button,
        variant === 'primary' && styles.primary,
        variant === 'secondary' && styles.secondary,
        variant === 'danger' && styles.danger,
        style
    ];

    const textColor = [
        styles.text,
        variant === 'secondary' ? styles.textSecondary : styles.textPrimary,
        textStyle
    ];

    return (
        <TouchableOpacity style={buttonStyle} activeOpacity={0.8} {...rest}>
            <Text style={textColor}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 6,
    },
    primary: {
        backgroundColor: '#007AFF', // iOS blue
    },
    secondary: {
        backgroundColor: '#E5E5EA',
    },
    danger: {
        backgroundColor: '#FF3B30', // iOS red
    },
    text: {
        fontSize: 16,
        fontWeight: '600',
    },
    textPrimary: {
        color: '#FFFFFF',
    },
    textSecondary: {
        color: '#000000',
    }
});
