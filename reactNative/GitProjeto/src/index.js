import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import './config/ReactotronConfig';

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

console.tron.log(' Deu log ');

export default function App() {
    return (
        <View style={styles.Container}>
            <Text style={styles.welcome}> Welcome to React Native!</Text>
        </View>
    );
}
