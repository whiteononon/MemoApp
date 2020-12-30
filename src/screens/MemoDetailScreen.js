
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import CircleButton from '../elements/CircleButton'

const MemoDetailScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.memoHeader}>
                <Text style={styles.memoHeaderTitle}>講座のアイデア</Text>
                <Text style={styles.memoHeaderDate}>講座のアイデア</Text>
            </View>
            <View style={styles.memoContent}>
                <Text style={styles.memoContentTitle}>講座のアイデア</Text>
            </View>
            <CircleButton name="pencil" color="white" style={styles.editButton} onPress={() => { navigation.navigate('MemoEdit') }} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    memoHeader: {
        height: 100,
        backgroundColor: '#17313C',
        justifyContent: 'center',
        padding: 10,
    },
    memoHeaderTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#fff"
    },
    memoHeaderDate: {
        fontSize: 12,
        color: "#fff"
    },
    memoContent: {
        flex: 1,
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        backgroundColor: '#fff',
    },
    memoContentTitle: {

    },
    editButton: {
        top: 75,
    }
})

export default MemoDetailScreen