
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class CircleButton extends React.Component {
    render() {
        return (
            <View style={styles.circleButton}>
                <Text style={styles.circleButtonTitle}>{this.props.children}</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    circleButton: {
        position: 'absolute',
        bottom: 30,
        right: 30,
        width: 48,
        height: 48,
        backgroundColor: '#E31676',
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 3,
    },
    circleButtonTitle: {
        fontSize: 24,
    },
})

export default CircleButton