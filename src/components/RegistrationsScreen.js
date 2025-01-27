import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        padding: 10,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    loginText: {
        marginTop: 20,
        color: 'blue',
        textDecorationLine: 'underline',
    },
});


export default function RegistrationScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleRegister = () => {
        // Handle registration logic here
        console.log('Registering user:', { username, email, phoneNumber });

        // Clear the input fields
        setUsername('');
        setEmail('');
        setPhoneNumber('');

        // Navigate to the login screen or show a success message
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Phone Number"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                keyboardType="phone-pad"
            />
            <Button title="Register" onPress={handleRegister} />
            <Text style={styles.loginText} onPress={() => navigation.navigate('Login')}>
                Already have an account? Login here.
            </Text>
        </View>
    );
}

