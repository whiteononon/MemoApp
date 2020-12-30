
import React from 'react';
import { StyleSheet, View } from 'react-native';

import MemoList from '../components/MemoList'
import CircleButton from '../elements/CircleButton'

class MemoListScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <MemoList />
                <CircleButton name="plus"/>
            </View>
        )
    }
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