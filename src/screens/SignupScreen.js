
import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';

const SingupScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>メンバー登録</Text>
            <TextInput style={styles.input} value="Email" />
            <TextInput style={styles.input} value="Password" />
            <TouchableHighlight style={styles.button} underlayColor="#C70F66" onPress={() => { navigation.navigate('Home') }}>
                <Text style={styles.buttonTitle}>送信する</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 24,
        backgroundColor: '#fff',
    },
    input: {
        backgroundColor: '#eee',
        height: 48,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: "#000",
        padding: 8
    },
    title: {
        fontSize: 28,
        alignSelf: 'center',
        marginBottom: 24,
    },
    button: {
        backgroundColor: '#E31676',
        height: 48,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        alignSelf: 'center',
    },
    buttonTitle: {
        color: '#fff',
        fontSize: 18,
    },
})

export default SingupScreen