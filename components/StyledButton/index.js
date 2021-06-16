import React from 'react'
import { Pressable, Text, View } from 'react-native'
import styles from './styles';

const StyledButton = ({type, content, onPress}) => {

    const backgroundColor = type === 'primary' ? '#ffc8b2' : '#ffd4c4';
    const textColor = type === 'primary' ? '#171a20' : '#171a20';

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, {backgroundColor}]}
                onPress={() => onPress()}
            >
                <Text style={[styles.text, {color: textColor}]} >{content}</Text>
            </Pressable>
        </View>
    )
}

export default StyledButton;