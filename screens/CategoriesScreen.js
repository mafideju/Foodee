import React from 'react';
import { Text, StyleSheet , FlatList, View } from 'react-native';
import COLORS from '../constants/Colors';
import { CATEGORIES } from '../data/mockData';
import CategoryGridTile from '../components/CategoryGridTile';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton'

const CategoriesScreen = ({
    navigation
}) => {
    const renderGrid = ({
        item
    }) => (
        <CategoryGridTile
            title={item.title}
            color={item.color}
            onSelect={() => navigation.navigate({
                routeName: 'Refeições',
                params: {
                    categoryId: item.id,
                    color: item.color
                }
            })}
        />
    )
    return (
        <FlatList 
            numColumns={2}
            data={CATEGORIES}
            renderItem={renderGrid}
        />
    );
}; 

CategoriesScreen.navigationOptions = ({ navigation }) => {
    return {
        headerTitle: 'Cozinhas',
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
        )
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default CategoriesScreen;