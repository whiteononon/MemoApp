
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { createIconSet } from '@expo/vector-icons';
import FontAwesome from '../../assets/fonts/fa-solid-900.ttf'

const glyphMap = {
    pencil: '\uf303',
    plus: '\uf067'
}
const CustomIcon = createIconSet(glyphMap, 'FontAwesome');

const CircleButton = (props) => {

    let [fontsLoaded] = useFonts({
        'FontAwesome': FontAwesome,
    });

    const { style, color, name } = props

    let bgColor = '#E31676'
    let textColor = '#fff'

    if (color === 'white') {
        bgColor = '#fff'
        textColor = '#E31676'
    }
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={[styles.circleButton, style, { backgroundColor: bgColor }]}>
                <CustomIcon name={name} style={[styles.circleButtonTitle, { color: textColor }]} />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    circleButton: {
        position: 'absolute',
        bottom: 32,
        right: 32,
        width: 48,
        height: 48,
        borderRadius: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 3,
    },
    circleButtonTitle: {
        fontSize: 26,
        fontFamily: 'FontAwesome',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',

    },
})

export default CircleButton