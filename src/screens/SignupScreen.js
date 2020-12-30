import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';
import firebase from "firebase/app";

const SingupScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                console.log(user);
                navigation.navigate('Home')
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>メンバー登録</Text>
            <TextInput style={styles.input}
                value={email}
                onChangeText={(e) => { setEmail(e) }}
                autoCompleteType="email"
                autoCorrect={false}
                placeholder="email"
            />
            <TextInput style={styles.input}
                value={password}
                onChangeText={(e) => { setPassword(e) }}
                autoCompleteType="password"
                autoCorrect={false}
                placeholder="password"
                secureTextEntry={true}
            />
            <TouchableHighlight style={styles.button} underlayColor="#C70F66" onPress={() => { handleSubmit() }}>
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