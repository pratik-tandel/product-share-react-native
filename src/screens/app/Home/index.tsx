/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import { styles } from './styles';

const Home = () => {
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <Text>Home</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default React.memo(Home);
