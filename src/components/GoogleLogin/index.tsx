/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const GoogleLogin = ({ onPress }: any) => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={styles.container}>
            <Image style={styles.image} source={require('../../assets/google.png')} />
        </TouchableOpacity>
    );
};

export default React.memo(GoogleLogin);
