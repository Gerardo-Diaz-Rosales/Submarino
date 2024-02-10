// src/screens/HomeScreen.js (ejemplo)
import React from 'react';
import { View, Text, Image } from 'react-native';
import Header from '../components/Header';
import Buttons from '../components/Buttons';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <Header navigation={navigation} />
            <Image
                source={require('../images/fondo02.png')}
                style={styles.fondo} // Ajusta el ancho y la altura según sea necesario
            />
            <View>
                <Buttons />
            </View>
        </View>
    );
};


const styles = {
    fondo: {
        width: 400,
        height: 200,
        marginBottom: 0,
    },
    screen: {
        flex: 1,
        backgroundColor: 'white', // Puedes cambiar el color de fondo según tus necesidades
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    logo: {
        width: 50, // Ajusta el ancho según el tamaño de tu logotipo
        height: 50, // Ajusta la altura según el tamaño de tu logotipo
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    buttonText: {
        marginLeft: 10,
        fontSize: 16,
    },
};

export default HomeScreen;
