import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';


const MemoList = ({navigation}) => {
    return (
        <View style={styles.memoList}>
            <TouchableHighlight onPress={()=>navigation.navigate('MemoDetail')}>
                <View style={styles.memoItem}>
                    <Text style={styles.memoTitle}>aaa</Text>
                    <Text style={styles.memoDate}>2020/12/27</Text>
                </View>
            </TouchableHighlight>
            <View style={styles.memoItem}>
                <Text style={styles.memoTitle}>講座のアイテム</Text>
                <Text style={styles.memoDate}>2020/12/27</Text>
            </View>
            <View style={styles.memoItem}>
                <Text style={styles.memoTitle}>講座のアイテム</Text>
                <Text style={styles.memoDate}>2020/12/27</Text>
            </View>
            <View style={styles.memoItem}>
                <Text style={styles.memoTitle}>講座のアイテム</Text>
                <Text style={styles.memoDate}>2020/12/27</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    memoList: {
        width: '100%',
        flex: 1
    },
    memoItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd"
    },
    memoTitle: {
        fontSize: 18,
        marginBottom: 4
    },
    memoDate: {
        fontSize: 12,
        color: '#a2a2a2'
    },

})

export default MemoList