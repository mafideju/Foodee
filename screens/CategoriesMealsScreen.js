import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoriesMealsScreen = ({
    navigation
}) => {
    return (
        <View style={ styles.screen }>
            <Text>
                Escolha a Refeição
            </Text>
            <Button title="+" onPress={() => {navigation.navigate('Detalhes')}} ></Button>
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

export default CategoriesMealsScreen;