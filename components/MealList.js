import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import MealItem from './MealItem';

const MealList = ({ listData, navigation }) => {
    const favoriteMeals = useSelector(state => state.meals.favoriteMeals);
    
    const renderMeals = ({ item }) => {
        const isFavorite = favoriteMeals.some(meal => meal.id === item.id);
        return (
            <MealItem
                title={item.title}
                duration={item.duration}
                complexity={item.complexity}
                affordability={item.affordability}
                image={item.imageUrl}
                onSelectMeal={() => { navigation.navigate('Detalhes', { mealId: item.id, mealTitle: item.title, isFav: isFavorite }) }}
            />
        )
    }
    return (
        <View style={styles.screen}>
            <FlatList
                style={{ width: '100%' }}
                data={listData}
                renderItem={renderMeals}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default MealList;