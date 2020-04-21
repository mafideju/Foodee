import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CategoryGridTile = ({
    onSelect,
    title,
    color
}) => (
    <TouchableOpacity
        style={styles.grid}
        onPress={onSelect}
    >
        <View style={{ ...styles.container, ...{ backgroundColor: color } }}>
            <Text style={styles.text}>{title}</Text>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    grid: {
        flex: 1,
        margin: 10,
        height: 120
    },
    container: {
        flex: 1,
        borderRadius: 5,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    text: {
        fontFamily: 'open-sans-bold',
        fontSize: 18
    }
});

export default CategoryGridTile;