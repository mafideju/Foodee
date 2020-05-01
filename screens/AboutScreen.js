import React from 'react';
import { Text, View, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import COLORS from '../constants/Colors';

const AboutScreen = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.text}>
                Desenvolvido na Quarentena por
            </Text>
            <Text style={styles.logo}>
                Marcio Mafideju  
            </Text>
            <Text style={styles.text}>
                Parte dos Estudos em React Native
            </Text>
            <Text style={styles.contato}>
                mafideju@outlook.com - 11 954 984 696
            </Text>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.github.com/mafideju')}>
                <Text style={styles.sociais}>
                    GitHub
                </Text>
            </TouchableOpacity>
        </View>
    );
}

AboutScreen.navigationOptions = ({ navigation }) => {
    return {
        headerTitle: 'Contato',
        headerTitleStyle: {
            fontFamily: 'open-sans',
            fontSize: 15
        },
        headerStyle: {
            backgroundColor: '#000',
        },
        headerTintColor: '#fff',
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
        backgroundColor: COLORS.primaryDark,
        flex: 1,
        padding: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        color: '#fff',
        marginVertical: 30
    },
    text: {
        color: '#fff',
        marginVertical: 30
    },
    contato: {
        color: '#fff'
    },
    sociais: {
        // alignSelf: "flex-end",
        marginVertical: 50,
        color: '#fff',
        elevation: 10
    }
});

export default AboutScreen;