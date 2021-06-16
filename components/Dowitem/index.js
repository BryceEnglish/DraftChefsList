import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';

const DowItem = ({ bkfstName, bkfstCal, lnchName, lnchCal, dnnrName, dnnrCal, DOW }) => {
    return (
        <View style={styles.dowContainer}>
            <ImageBackground source={require('../../assets/images/gradient.png')} style={styles.image}></ImageBackground>
            <View style={styles.titles}>
                <Text style={styles.title}>{DOW}</Text>
                <View style={styles.title__content}>
                    <Text type='breakfast' style={styles.subtitle}>Breakfast: {bkfstName}</Text>
                    <Text style={styles.subtitle}>Calories: {bkfstCal}</Text>
                </View>
                <View style={styles.title__content}>
                    <Text type='lunch' style={styles.subtitle}>Lunch: {lnchName}</Text>
                    <Text style={styles.subtitle}>Calories: {lnchCal}</Text>
                </View>
                <View style={styles.title__content}>
                    <Text type='dinner' style={styles.subtitle}>Dinner: {dnnrName}</Text>
                    <Text style={styles.subtitle}>Calories: {dnnrCal}</Text>
                </View>
            </View>
            <View style={styles.buttonsContainer}>
                <StyledButton
                    type='primary'
                    content='Recipe Book'
                    onPress={() => {
                        console.warn('Recipe Book was pressed')
                    }}
                />
                <StyledButton type='secondary'
                    content='Shopping List'
                    onPress={() => {
                        console.warn('Shopping List was pressed')
                    }} />
            </View>
        </View>
    )
}

export default DowItem;