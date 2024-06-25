/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import { styles } from './styles';

const Favorites = () => {
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <Text>Favorites</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default React.memo(Favorites);
