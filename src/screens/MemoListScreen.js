
import React from 'react';
import { StyleSheet, View } from 'react-native';

import MemoList from '../components/MemoList'
import CircleButton from '../elements/CircleButton'

const MemoListScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <MemoList navigation={navigation} />
            <CircleButton name="plus" onPress={() => navigation.navigate('MemoDetail')} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default MemoListScreen