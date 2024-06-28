/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { styles } from './styles';
import Input from '../Input';

const Header = ({ title, onBackPress, onLogout, showLogout, showSearch, showBack }: any) => {
    const [showSearchInput, setShowSearchInput] = useState(false);

    const onSearchClick = () => {
        setShowSearchInput(s => !s);
    };

    return (
        <View>
            <View style={styles.container}>
                {showBack ? (
                    <Pressable hitSlop={20} onPress={onBackPress}>
                        <Image style={styles.icon} source={require('../../assets/back.png')} />
                    </Pressable>
                ) : showSearch ? (
                    <Pressable hitSlop={20} onPress={onSearchClick}>
                        <Image style={styles.icon} source={require('../../assets/search.png')} />
                    </Pressable>
                ) : <View style={styles.space} />}
                <Text style={styles.title}>{title}</Text>

                {showLogout ? (
                    <Pressable hitSlop={20} onPress={onLogout}>
                        <Image style={styles.icon} source={require('../../assets/logout.png')} />
                    </Pressable>
                ) : null}
            </View>

            {showSearchInput ? <Input placeholder="Type your keyword..." /> : null}
        </View>

    );
};

export default Header;
