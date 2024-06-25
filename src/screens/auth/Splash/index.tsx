/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { styles } from './styles';
import Button from '../../../components/Button';

const Splash = ({ navigation }: any) => {
    console.log(navigation);

    const onSignup = () => {
        navigation.navigate('Signup');
    };

    const onSignin = () => {
        navigation.navigate('Signin');
    };

    return (
        <View style={styles.container}>
            <Image resizeMode="contain" style={styles.image} source={require('../../../assets/splash_screen.png')} />

            <View style={styles.titleContainer}>
                <Text style={styles.title}>You'll find</Text>
                <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
                <Text style={styles.title}>Here!</Text>
            </View>

            <Button onPress={onSignup} title="Sign Up" />

            <Pressable onPress={onSignin} hitSlop={20}>
                <Text style={styles.footerText}>Sign In</Text>
            </Pressable>
        </View>
    );
};

export default Splash;
