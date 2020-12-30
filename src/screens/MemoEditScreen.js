
import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import CircleButton from '../elements/CircleButton'

const MemoEditScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.memoEditInput} value="hi" multiline />
            <CircleButton name="check" color="white" style={styles.editButton} onPress={() => { navigation.goBack() }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    memoEditInput: {
        backgroundColor: '#fff',
        flex: 1,
        paddingTop: 32,
        paddingRight: 16,
        paddingBottom: 16,
        paddingLeft: 16,
        textAlignVertical: 'top'
    },
    editButton: {

    }

})

export default MemoEditScreen