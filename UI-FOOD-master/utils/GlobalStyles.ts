import { StyleSheet, Platform } from 'react-native';
export default StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        backgroundColor: '#F5CB58',
        paddingTop: Platform.OS === 'android' ? 40 : 0
    },
});