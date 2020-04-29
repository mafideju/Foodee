import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { MEALS } from '../data/mockData';
import COLORS from '../constants/Colors';


const MealDetailScreen = ({
    navigation
}) => {
    const mealId = navigation.getParam('mealId');
    const selectedMeals = MEALS.find(meal => meal.id === mealId);

    return (
        <View style={styles.screen}>
            <Text>
                Veja os Detalhes da Refeição Escolhida
            </Text>
            <Text>{selectedMeals.title}</Text>
            <Button title="Voltar" onPress={() => {navigation.goBack()}} ></Button>
            <Button title="Inicio" onPress={() => {navigation.popToTop()}} ></Button>
        </View>
    );
};

MealDetailScreen.navigationOptions = ({ navigation }) => {
    const mealId = navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return {
        headerTitle: selectedMeal.title,
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Favoritos"
                    iconName="ios-star"
                    onPress={() => {
                        console.log('Favorito');
                    }}
                />
            </HeaderButtons>
        ),
        headerStyle: {
            backgroundColor: COLORS.primaryDark,
        },
        headerTintColor: COLORS.textLight,
        headerTitleStyle: {
            fontSize: 17,
        },
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealDetailScreen;