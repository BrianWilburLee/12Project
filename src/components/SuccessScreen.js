import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    message: {
        fontSize: 20,
        marginBottom: 20,
    },
});


const SuccessScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.message}>Registration Successful!</Text>
            <Button title="Back to Registration" onPress={() => navigation.navigate('Register')} />
        </View>
    );
};


export default SuccessScreen;
