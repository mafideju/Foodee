import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";


const MealItem = ({
    title,
    duration,
    complexity,
    affordability,
    image,
    onSelectMeal
}) => (
    <View style={styles.mealItem}>
        <TouchableOpacity onPress={onSelectMeal}>
            <View>
                <View style={{...styles.mealRow, ...styles.mealHeader}}>
                    <ImageBackground source={{ uri: image }} style={styles.mealImage}>
                        <Text style={styles.mealTitle} numberOfLines={1}>{title}</Text>
                    </ImageBackground>
                </View>
                <View style={{...styles.mealRow, ...styles.mealDetail}}>
                    <Text>{duration} min.</Text>
                    <Text>{complexity}</Text>
                    <Text>{affordability}</Text>
                </View>
            </View>
        </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#ccc',
        borderRadius: 10,
        overflow:'hidden',
        marginTop: 5
    },
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
        height: '100%',
        justifyContent: 'flex-end'
    },
    mealTitle: {
        color: 'white',
        padding: 10,
        fontWeight: "bold",
        fontSize: 20,
        backgroundColor: 'rgba(0,0,0,0.45)'
    }
});

export default MealItem;