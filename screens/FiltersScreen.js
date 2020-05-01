import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import COLORS from '../constants/Colors';

const FiltersScreen = ({
    navigation
}) => {
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            vegan: isVegan,
            vegetarian: isVegetarian,
            lactoseFree: isLactoseFree
        };

        console.log('appliedFilters', appliedFilters)
    }, [isGlutenFree, isVegan, isVegetarian, isLactoseFree]);

    useEffect(() => {
        navigation.setParams({
            save: saveFilters
        });
    }, [saveFilters]);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>
                Escolha os Filtros para sua Seleção
            </Text>
            <View style={styles.filterContainer}>
                <Text>Livre de Gluten?</Text>
                <Switch
                    value={isGlutenFree} 
                    onValueChange={val => setIsGlutenFree(val)} 
                    trackColor={{true: COLORS.primaryDark}} 
                    thumbColor={COLORS.primaryDark}
                />
            </View>
            <View style={styles.filterContainer}>
                <Text>Vegano?</Text>
                <Switch
                    value={isVegan} 
                    onValueChange={val => setIsVegan(val)} 
                    trackColor={{true: COLORS.primaryDark}} 
                    thumbColor={COLORS.primaryDark}
                />
            </View>
            <View style={styles.filterContainer}>
                <Text>LactoVegetariano?</Text>
                <Switch
                    value={isVegetarian} 
                    onValueChange={val => setIsVegetarian(val)} 
                    trackColor={{true: COLORS.primaryDark}} 
                    thumbColor={COLORS.primaryDark}
                />
            </View>
            <View style={styles.filterContainer}>
                <Text>Livre de Lactose?</Text>
                <Switch
                    value={isLactoseFree} 
                    onValueChange={val => setIsLactoseFree(val)} 
                    trackColor={{true: COLORS.primaryDark}} 
                    thumbColor={COLORS.primaryDark}
                />
            </View>
        </View>
    );
};


FiltersScreen.navigationOptions = ({ navigation }) => {
    return {
        headerTitle: 'Procure sua Receita',
        headerTitleStyle: {
            fontFamily: 'open-sans',
            fontSize: 15
        },
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
        ),
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item 
                    title='Menu'
                    iconName='ios-save'
                    onPress={navigation.getParam('save')}>
                </Item>
            </HeaderButtons>
        )
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 15,
        // alignItems: 'center'
    },
    title: {
        margin: 20,
        fontSize: 15,
        fontFamily: 'open-sans',
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5
    }
})

export default FiltersScreen;