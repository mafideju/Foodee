import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton'
import MealList from '../components/MealList';
import { MEALS } from '../data/mockData';
import COLORS from '../constants/Colors';

const FavoritesScreen = ({ navigation }) => {
    const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
    return (
        <View style={ styles.screen }>
            <MealList listData={favMeals} navigation={navigation} />
        </View>
    );
};

FavoritesScreen.navigationOptions = ({ navigation }) => {
    return {
        headerTitle: 'Faça de Novo!', 
        headerStyle: {
            backgroundColor: COLORS.primaryDark,
        },
        headerTintColor: COLORS.textLight,
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item 
                    title='Menu'
                    iconName='ios-menu'
                    onPress={() => {
                        navigation.toggleDrawer();
                    }}>
                </Item>
            </HeaderButtons>
        )
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FavoritesScreen;