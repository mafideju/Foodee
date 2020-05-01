import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import CategoriesMealsScreen from '../screens/CategoriesMealsScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import AboutScreen from '../screens/AboutScreen';
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

const FiltersNavigator = createStackNavigator({
    Filtros: FiltersScreen
});

const AboutNavigator = createStackNavigator({
    Sobre: AboutScreen
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

const MainNavigator = createDrawerNavigator({
    Cozinhas: { screen: MealsFavTabNavigator, navigationOptions: {
        drawerLabel: 'Cozinhas',
        drawerIcon: ({ tintColor }) => {
            return <Ionicons name='md-nutrition' size={25} color={tintColor} />
        },
    }},
    Favoritos: { screen: FavNavigator, navigationOptions: {
        drawerLabel: 'Favoritos',
        drawerIcon: ({ tintColor }) => {
            return <Ionicons name='ios-star' size={25} color={tintColor} />
        },
    }},
    Filtros: { screen: FiltersNavigator, navigationOptions: {
        drawerLabel: 'Filtros',
        drawerIcon: ({ tintColor }) => {
            return <Ionicons name='ios-git-branch' size={25} color={tintColor} />
        },
    }},
    Sobre: { screen: AboutNavigator, navigationOptions: {
        drawerLabel: 'Contato',
        drawerIcon: ({ tintColor }) => {
            return <Ionicons name='ios-paw' size={25} color={tintColor} />
        },
    }}
}, {
    contentOptions: {
        activeTintColor: COLORS.primaryLight,
        activeBackgroundColor: COLORS.primaryDark,
        itemsContainerStyle: {
            paddingVertical: 150,
            flex: 1,
            backgroundColor: '#eee'
        },
    }
});


export default createAppContainer(MainNavigator);
