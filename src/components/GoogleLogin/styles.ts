/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.darkGrey,
        borderRadius: 14,
        paddingVertical: 10,
        paddingHorizontal: 50,
        width: '40%',
        alignSelf: 'center',
    },
    image: {
        width: 30,
        height: 30,
    },
});
