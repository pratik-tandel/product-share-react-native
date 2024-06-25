/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import { styles } from './styles';

const Settings = () => {
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <Text>Settings</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default React.memo(Settings);
