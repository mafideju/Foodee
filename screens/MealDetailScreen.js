import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { MEALS } from '../data/mockData';
import COLORS from '../constants/Colors';
import { ScrollView } from 'react-native-gesture-handler';


const MealDetailScreen = ({
    navigation,
}) => {
    const mealId = navigation.getParam('mealId');
    const selectedMeals = MEALS.find(meal => meal.id === mealId);

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
    const mealId = navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return {
        headerTitle: selectedMeal.title,
        headerTitleStyle: {
            fontFamily: 'open-sans',
            fontSize: 15
        },
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Favoritos"
                    iconName="ios-star"
                    onPress={() => {
                        console.log('Favorito');
                    }}
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