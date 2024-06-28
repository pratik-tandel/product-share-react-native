/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, SafeAreaView, ScrollView, Text } from 'react-native';
import Header from '../../../components/Header';
import { styles } from './styles';
import { categories } from '../../../data/categories';

const Home = () => {
    const renderCategoryItem = ({ item }: any) => {
        return (
            <Text>{item?.title}</Text>
        );
    };

    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <Header showSearch={true} title="Find All You Need" />

                <FlatList style={styles.list} data={categories} renderItem={renderCategoryItem}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default React.memo(Home);
