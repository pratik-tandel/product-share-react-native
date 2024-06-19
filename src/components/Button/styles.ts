/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        padding: 10,
        paddingHorizontal: 60,
        borderRadius: 10,
    },
    title: {
        color: colors.white,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
