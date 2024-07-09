/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import FavoriteItem from '../../../components/FavoriteItem';
import Header from '../../../components/Header';
import { products } from '../../../data/products';

const Favorites = () => {
    const renderFavorites = ({ item }: any) => {
        return (
            <FavoriteItem {...item} />
        );
    };
    return (
        <SafeAreaView>
            <Header title="Favorites" />
            <FlatList data={products} renderItem={renderFavorites} keyExtractor={(item) => String(item?.id)} />
        </SafeAreaView>
    );
};

export default React.memo(Favorites);
