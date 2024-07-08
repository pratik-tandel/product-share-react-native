/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import CategoryBox from '../../../components/CategoryBox';
import Header from '../../../components/Header';
import ProductHomeItem from '../../../components/ProductHomeItem';
import { categories } from '../../../data/categories';
import { products } from '../../../data/products';
import { styles } from './styles';

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState();
    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        if (selectedCategory) {
            const updatedProducts = products.filter((product) => product?.category === selectedCategory);
            setFilteredProducts(updatedProducts);
        } else {
            setFilteredProducts(products);
        }
    }, [selectedCategory]);

    const renderCategoryItem = ({ item, index }: any) => {
        return (
            <CategoryBox
                onPress={() => setSelectedCategory(item?.id)}
                isSelected={item?.id === selectedCategory}
                isFirst={index === 0}
                title={item?.title}
                image={item?.image}
            />
        );
    };

    const renderProductItem = ({ item }: any) => {
        return (
            <ProductHomeItem {...item} />
        );
    };

    return (
        <SafeAreaView>
            <Header showSearch={true} title="Find All You Need" />

            <FlatList
                showsHorizontalScrollIndicator={false}
                style={styles.list}
                data={categories}
                renderItem={renderCategoryItem}
                keyExtractor={(item, index) => index.toString()}
                horizontal
            />

            <FlatList
                style={styles.productsList}
                numColumns={2}
                data={filteredProducts}
                renderItem={renderProductItem}
                keyExtractor={(item, index) => index.toString()}
                ListFooterComponent={<View style={{ height: 200 }} />}
            />
        </SafeAreaView>
    );
};

export default React.memo(Home);
