/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';
import { styles } from './styles';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import Button from '../../../components/Button';
import Separator from '../../../components/Separator';
import GoogleLogin from '../../../components/GoogleLogin';
import { SafeAreaView } from 'react-native-safe-area-context';
import { request } from '../../../utils/request';

const Signup = ({ navigation }: any) => {
    const [checked, setChecked] = useState(false);
    const [values, setValues] = useState<any>({});

    const onSignIn = () => {
        navigation.navigate('SignIn');
    };

    const onBack = () => {
        navigation.goBack();
    };

    const onChange = (key: any, value: any) => {
        setValues((v: any) => ({ ...v, [key]: value }));
    };

    const onSubmit = () => {
        if (!values?.fullName || !values?.email || !values?.password || !values?.confirmPassword) {
            Alert.alert('All fields are required');
            return;
        }

        if (values.password !== values.confirmPassword) {
            Alert.alert('Password does not match');
            return;
        }

        if (!checked) {
            Alert.alert('Please agree to the terms and conditions');
            return;
        }

        request({
            url: 'user/register',
            method: 'POST',
            data: values,
        }).then((response: any) => {
            console.log(response);
        }).catch((error: any) => {
            console.log(error);
        });
    };

    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <AuthHeader onBackPress={onBack} title="Sign Up" />
                <Input value={values.fullName} onChangeText={(v: any) => onChange('fullName', v)} label="Name" placeholder="John Doe" />
                <Input value={values.email} onChangeText={(v: any) => onChange('email', v)} label="E-mail" placeholder="example@gmail.com" />
                <Input value={values.password} onChangeText={(v: any) => onChange('password', v)} isPassword label="Password" placeholder="*******" />
                <Input value={values.confirmPassword} onChangeText={(v: any) => onChange('confirmPassword', v)} isPassword label="Confirm Password" placeholder="*******" />

                <View style={styles.agreeRow}>
                    <Checkbox checked={checked} onCheck={setChecked} />
                    <Text style={styles.agreeText}>I agree with <Text style={styles.agreeTextBold}>Terms</Text> & <Text style={styles.agreeTextBold}>Privacy</Text></Text>
                </View>

                <Button style={styles.button} title="Sign Up" onPress={onSubmit} />

                <Separator text="Or sign up with" />

                <GoogleLogin />

                <Text style={styles.footerText}>
                    Already have an account?
                    <Text onPress={onSignIn} style={styles.footerLink}> Sign In</Text>
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Signup;
