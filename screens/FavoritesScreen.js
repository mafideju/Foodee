import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FavoritesScreen = () => {
    return (
        <View style={ styles.screen }>
            <Text>
                Escolha a Categoria da Refeição
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FavoritesScreen;