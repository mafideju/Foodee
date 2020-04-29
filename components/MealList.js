import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import MealItem from './MealItem';

const MealList = ({ listData, navigation }) => {
    const renderMeals = ({ item }) => (
        <MealItem
            title={item.title}
            duration={item.duration}
            complexity={item.complexity}
            affordability={item.affordability}
            image={item.imageUrl}
            onSelectMeal={() => {navigation.navigate({
                routeName: 'Detalhes',
                params: {
                    mealId: item.id
                }
            })}}
        />
    )
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