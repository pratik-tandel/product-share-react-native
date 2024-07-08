/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { styles } from './styles';
import { colors } from '../../utils/colors';

const Header = ({ title, image, onPress, isFirst, isSelected }: any) => {

    return (
        <Pressable onPress={onPress} style={[styles.container, isFirst ? { marginLeft: 16 } : {}]}>
            <View style={[styles.imageContainer, isSelected ? { backgroundColor: colors.black } : {}]}>
                <Image style={styles.image} source={{ uri: image }} />
            </View>
            <Text style={[styles.title, isSelected ? { color: colors.blue, fontWeight: '500' } : {}]}>{title}</Text>
        </Pressable>
    );
};

export default Header;
