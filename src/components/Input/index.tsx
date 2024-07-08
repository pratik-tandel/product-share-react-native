/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, Pressable, Text, TextInput, View } from 'react-native';
import { styles } from './styles';

const Input = ({ label, placeholder, isPassword, value, onChangeText }: any) => {
    const [isPasswordVisible, setPasswordVisible] = React.useState(false);

    const onEyePress = () => {
        setPasswordVisible(!isPasswordVisible);
    };

    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={isPassword && !isPasswordVisible}
                    placeholder={placeholder}
                    style={styles.input} />
                {isPassword && (
                    <Pressable onPress={onEyePress}>
                        <Image style={styles.eye} source={isPasswordVisible ? require('../../assets/eye.png') : require('../../assets/eye_closed.png')} />
                    </Pressable>
                )}
            </View>
        </View>
    );
};

export default Input;
