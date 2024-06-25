/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View } from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import Button from '../../../components/Button';
import GoogleLogin from '../../../components/GoogleLogin';
import Input from '../../../components/Input';
import Separator from '../../../components/Separator';
import { styles } from './styles';

const Signin = ({ navigation }: any) => {
    const onSignUp = () => {
        navigation.navigate('Signin');
    };

    const onBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <AuthHeader onBackPress={onBack} title="Sign In" />
            <Input label="Name" placeholder="John Doe" />
            <Input label="Email" placeholder="example@gmail.com" />
            <Input isPassword label="Password" placeholder="********" />


            <Button style={styles.button} title="Sign In" />

            <Separator text="Or sign in with" />

            <GoogleLogin />

            <Text style={styles.footerText}>
                Don't have an account?
                <Text onPress={onSignUp} style={styles.footerLink}> Sign Up</Text>
            </Text>
        </View>
    );
};

export default Signin;
