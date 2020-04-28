import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createDrawerNavigator } from 'react-navigation-drawer';
import CategoriesMealsScreen from '../screens/CategoriesMealsScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen'
import COLORS from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const MealsNavigator = createStackNavigator({
    Categorias: CategoriesScreen,
    Refeições: CategoriesMealsScreen,
    Detalhes: MealDetailScreen
});

const MealsFavTabNavigator = createBottomTabNavigator({
    Cozinhas: { screen: MealsNavigator, navigationOptions: {
        tabBarIcon: (tabInfo) => {
            return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
        }
    } },
    Favoritos: { screen: FavoritesScreen, navigationOptions: {
        tabBarIcon: (tabInfo) => {
            return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
        }
    } },
}, {
    tabBarOptions: {
        activeTintColor: COLORS.secondaryDark,
        inactiveTintColor: COLORS.medium
    }
});

export default createAppContainer(MealsFavTabNavigator);
