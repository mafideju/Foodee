import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import COLORS from '../constants/Colors';
import { toggleFavorite } from '../store/actions/mealsAction'


const MealDetailScreen = ({
    navigation,
}) => {
    const mealId = navigation.getParam('mealId');
    const meals = useSelector(state => state.meals.meals);
    const selectedMeals = meals.find(meal => meal.id === mealId);
    const currentFav = useSelector(state => state.meals.favoriteMeals.some(meal => meal.id === mealId));
    const dispatch = useDispatch();
    
    const toggleFavoriteMeal = useCallback(() => {
        dispatch(toggleFavorite(mealId));
    }, [dispatch, mealId])

    useEffect(() => {
        navigation.setParams({ toggleFav: toggleFavoriteMeal });
    }, [toggleFavoriteMeal])

    useEffect(() => {
        navigation.setParams({ idFav: currentFav });
    }, [currentFav]);

    return (
        <ScrollView>
            <Image source={{uri: selectedMeals.imageUrl}} style={styles.mealImage} />
            {/* <Text style={styles.title}>{selectedMeals.title}</Text> */}
            <View style={{...styles.mealRow, ...styles.mealDetail}}>
                <Text>{selectedMeals.duration} min.</Text>
                <Text>{selectedMeals.complexity}</Text>
                <Text>{selectedMeals.affordability}</Text>
            </View>

            <Text style={styles.section}>Ingredientes</Text>
            {selectedMeals.ingredients.map(ing => (
                <Text key={Math.random()}>{ing}</Text>
            ))}
            
            <Text style={styles.section}>Preparo</Text>
            {selectedMeals.steps.map(step => (
                <Text key={Math.random()}>{step}</Text>
            ))}
        </ScrollView>
    );
};

MealDetailScreen.navigationOptions = ({ navigation }) => {
    // const mealId = navigation.getParam('mealId');
    // const selectedMeal = meals.find(meal => meal.id === mealId);
    const mealTitle = navigation.getParam('mealTitle');
    const toggleFav = navigation.getParam('toggleFav');
    const idFav = navigation.getParam('idFav');

    return {
        headerTitle: mealTitle,
        headerTitleStyle: {
            fontFamily: 'open-sans',
            fontSize: 15
        },
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Favoritos"
                    iconName={idFav ? "ios-star" : "ios-star-outline"}
                    onPress={toggleFav}
                />
            </HeaderButtons>
        ),
        headerStyle: {
            backgroundColor: COLORS.primaryDark,
        },
        headerTintColor: COLORS.textLight,
    }
};

const styles = StyleSheet.create({
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '90%',
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },
    mealImage: {
        width: '100%',
        height: 200,
        justifyContent: 'center'
    },
    section: {
        paddingVertical: 10,
        fontFamily: 'open-sans',
        fontSize: 22,
        textAlign: 'center'
    }
});

export default MealDetailScreen;