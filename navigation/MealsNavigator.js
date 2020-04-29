import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createDrawerNavigator } from 'react-navigation-drawer';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import CategoriesMealsScreen from '../screens/CategoriesMealsScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen'
import COLORS from '../constants/Colors';

const MealsNavigator = createStackNavigator({
    Categorias: CategoriesScreen,
    Refeições: CategoriesMealsScreen,
    Detalhes: MealDetailScreen
});

const FavNavigator = createStackNavigator({
    Favoritos: FavoritesScreen,
    Detalhes: MealDetailScreen
});

const tabScreenConfig = {
    Cozinhas: { screen: MealsNavigator, navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
            return <Ionicons name='ios-restaurant' size={25} color={tintColor} />
        },
        tabBarColor: COLORS.primaryDark
    }},
    Favoritos: { screen: FavNavigator, navigationOptions: {
        tabBarIcon: ({ tintColor }) => {
            return <Ionicons name='ios-star' size={25} color={tintColor} />
        },
        tabBarColor: COLORS.primaryDark
    }}
};

const MealsFavTabNavigator = Platform.OS === 'android' ? 
    createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: '#bbb',
        inactiveColor: COLORS.secondaryDark,
        shifting: true
    }) : 
    createBottomTabNavigator(tabScreenConfig, {
    tabBarOptions: {
        activeTintColor: COLORS.secondaryDark,
        inactiveTintColor: COLORS.medium
    }
});

export default createAppContainer(MealsFavTabNavigator);
