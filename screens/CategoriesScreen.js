import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoriesScreen = ({
    navigation
}) => {
    return (
        <View style={ styles.screen }>
            <Text>
                Escolha a Categoria de Restaurante
            </Text>
            <Button title="Refeições" onPress={() => {navigation.navigate('Refeições')}} ></Button>
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

export default CategoriesScreen;