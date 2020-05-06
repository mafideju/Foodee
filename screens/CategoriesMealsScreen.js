import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { CATEGORIES } from '../data/mockData';
import MealList from '../components/MealList';


const CategoriesMealsScreen = ({
    navigation
}) => {
    const catId = navigation.getParam('categoryId');
    // const selectedCat = CATEGORIES.find(cat => cat.id === catId);
    const availableMeals = useSelector(state => state.meals.filteredMeals);
    const selectedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    if (selectedMeals.length === 0) {
        return (
            <View>
                <Text>Filtros Aplicados</Text>
                <Text>Nenhuma receita nesta categoria.</Text>
                <Text>Cheque os filtros e tente novamente.</Text>
            </View>
        );
    };

    return (
        <MealList listData={selectedMeals} navigation={navigation} />
    );
};

CategoriesMealsScreen.navigationOptions = ({ navigation }) => {
    const catId = navigation.getParam('categoryId');
    const selectedCat = CATEGORIES.find(cat => cat.id === catId);
    return {
        headerTitle: selectedCat.title,
        headerTitleStyle: {
            fontFamily: 'open-sans',
            fontSize: 15
        },
        headerStyle: {
            backgroundColor: selectedCat.color,
        },
        headerTintColor: selectedCat.textColor,
    }
};


export default CategoriesMealsScreen;