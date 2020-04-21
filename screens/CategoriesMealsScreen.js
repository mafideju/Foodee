import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    FlatList
} from 'react-native';
import { CATEGORIES, MEALS } from '../data/mockData';
import COLORS from '../constants/Colors';
import MealItem from '../components/MealItem';


const CategoriesMealsScreen = ({
    navigation
}) => {
    const catId = navigation.getParam('categoryId');
    // const selectedCat = CATEGORIES.find(cat => cat.id === catId);
    const selectedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);
    const renderMeals = ({ item }) => (
        <MealItem
            title={item.title}
            duration={item.duration}
            complexity={item.complexity}
            affordability={item.affordability}
            image={item.imageUrl}
            onSelectMeal={() => {navigation.navigate('Detalhes')}}
        />
    )

    return (
        <View style={styles.screen}>
            <FlatList
                style={{ width: '100%' }}
                data={selectedMeals}
                renderItem={renderMeals}
            />
        </View>
    );
};

CategoriesMealsScreen.navigationOptions = ({ navigation }) => {
    const catId = navigation.getParam('categoryId');
    const selectedCat = CATEGORIES.find(cat => cat.id === catId);
    return {
        headerTitle: selectedCat.title,
        headerStyle: {
            backgroundColor: COLORS.secondaryDark,
        },
        headerTintColor: COLORS.textLight,
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoriesMealsScreen;