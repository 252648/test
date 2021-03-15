import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

;

export default function Loading(){
    return (
    <View style={styles.container}>
        <StatusBar barStyle ="dark-content" />
        <Text style={styles.text}>오늘의 날씨</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:'flex-end',
        paddingHorizontal: 30,
        paddingVertical : 200,
        backgroundColor:'#bdc8cf'
    },
    text : {
        color:'#3e67ba',
        fontSize: 30
    }
})