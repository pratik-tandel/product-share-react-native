/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './styles';

const Splash = () => {
    return (
        <View style={styles.container}>
            <Image resizeMode="contain" style={styles.image} source={require('../../../assets/splash_screen.png')} />
            <Text style={styles.title}>You'll find</Text>
            <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
            <Text style={styles.title}>Here!</Text>
        </View>
    );
};

export default Splash;
