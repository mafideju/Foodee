import React from 'react';
import { CATEGORIES, MEALS } from '../data/mockData';
import MealList from '../components/MealList';


const CategoriesMealsScreen = ({
    navigation
}) => {
    const catId = navigation.getParam('categoryId');
    // const selectedCat = CATEGORIES.find(cat => cat.id === catId);
    const selectedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    return (
        <MealList listData={selectedMeals} navigation={navigation} />
    );
};

CategoriesMealsScreen.navigationOptions = ({ navigation }) => {
    const catId = navigation.getParam('categoryId');
    const selectedCat = CATEGORIES.find(cat => cat.id === catId);
    return {
        headerTitle: selectedCat.title,
        headerStyle: {
            backgroundColor: selectedCat.color,
        },
        headerTintColor: selectedCat.textColor,
    }
};


export default CategoriesMealsScreen;