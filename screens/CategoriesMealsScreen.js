import React from 'react';
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