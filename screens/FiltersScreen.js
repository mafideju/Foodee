import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import COLORS from '../constants/Colors';

const FiltersScreen = () => {
    return (
        <View style={ styles.screen }>
            <Text>
                Escolha os Filtros para sua Seleção
            </Text>
        </View>
    );
};


FiltersScreen.navigationOptions = ({ navigation }) => {
    return {
        headerTitle: 'Procure sua Receita',
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

export default FiltersScreen;