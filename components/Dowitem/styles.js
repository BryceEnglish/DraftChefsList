import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    dowContainer: {
        width: '100%',
        height: '100%',
    },
    titles: {
        marginTop: '5%',
        width: '100%',
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: '500',
    },
    title__content: {
        width: '80%',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#ffe8e8',
        marginTop: 10,
        padding: 35,
        backgroundColor: '#ffe8e8' 
    },
    subtitle: {
        fontSize: 16,
        color: '#5c5e62',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    },
    buttonsContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',

    }
});

export default styles;