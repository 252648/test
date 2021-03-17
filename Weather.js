import React from 'react';
import { View, Text, StyleSheet, StatusBar, ImageBackgroundComponent, Platform } from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import {useState, useEffect} from 'react';
import { Component } from 'react';
import moment from 'moment';
import 'moment/locale/ko';



const weatherOptions = {
    Haze : {
        iconName : "align-center",
        gradient : ["#707EA3", "#637196"],
        title : "It's cloudy ",
        subtitle: "22"
    },
    Thunderstorm : {
        iconName : "cloud-lightning",
        gradient : ["#707EA3", "#637196"],
        title : "It's cloudy ",
        subtitle: "22"
    },
    Drizzle : {
        iconName : "cloud-drizzle",
        gradient : ["#707EA3", "#637196"],
        title : "It's cloudy ",
        subtitle: "22"
    },
    Rain : {
        iconName : "cloud-rain",
        gradient : ["#707EA3", "#637196"],
        title : "It's cloudy ",
        subtitle: "22"
    },
    Snow : {
        iconName : "cloud-snow",
        gradient : ["#707EA3", "#637196"],
        title : "It's cloudy ",
        subtitle: "22"
    },
    Clear : {
        iconName : "sun",
        gradient : ["#707EA3", "#637196"],
        title : "It's sunny ",
        subtitle: "22"
    },
    Clouds : {
        iconName : "cloud",
        gradient : ["#707EA3", "#637196"],
        title : "It's cloudy ",
        subtitle: "22"
    },
    Mist : {
        iconName : "align-center",
        gradient : ["#707EA3", "#637196"],
        title : "It's cloudy ",
        subtitle: "22"
    },
    Smoke : {
        iconName : "align-left",
        gradient : ["#707EA3", "#637196"],
        title : "It's cloudy ",
        subtitle: "22"
    },
    Dust : {
        iconName : "align-left",
        gradient : ["#707EA3", "#637196"],
        title : "It's cloudy ",
        subtitle: "22"
    },
    Fog : {
        iconName : "align-left",
        gradient : ["#707EA3", "#637196"],
        title : "It's cloudy ",
        subtitle: "22"
    },
    Tornado : {
        iconName : "wind",
        gradient : ["#707EA3", "#637196"],
        title : "It's cloudy ",
        subtitle: "22",
        city: "daejeon"
    },


    
}


const nowTime = moment().format("MMM Do YY");   
const nowTimeOption = {

}

var date = new Date().getDate(); //To get the Current Date
var month = new Date().getMonth() + 1; //To get the Current Month
var year = new Date().getFullYear(); //To get the Current Year
var hours = new Date().getHours(); //To get the Current Hours
var min = new Date().getMinutes(); //To get the Current Minutes
var sec = new Date().getSeconds(); 
console.log(nowTime);

// 출력 결과: 2020-08-23 12:54:30




export default function Weather({temp, condition,ReactAwesomeClock }){
    return (
            <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style= {styles.topContainer}>
              
            </View>
            <View style={styles.halfContainer}>
                <Text style={styles.locationText}>DAEJEON</Text>
                <View style={styles.date}>
                    <Text style={{...styles.dateText,...styles.dateMon}}>Monday</Text>
                    <View style={styles.dateBar}></View>
                    <Text style={styles.dateText}>{date}</Text>
                    <Text style={styles.dateText}>{month}</Text>
                </View>
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={styles.textOntainer}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Feather 
                    style={styles.icon} 
                    name ={weatherOptions[condition].iconName} 
                />
            </View>
        </LinearGradient>

    ); 
}

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition : PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Clear", 
        "Clouds",
        "Haze",
        "Mist",
        "Smoke",
        "Dust",
        "Fog",
        "Tornado"
    ]).isRequired 
};

const styles = StyleSheet.create({
    container : {
        flex:2,
        justifyContent:"center",
        alignItems:"flex-start",
        padding : 30
    },
    topContainer : {
        flex:1,
        
    },
    icon : {
        color:"white",
        fontSize:22
    },
    temp : {
        fontSize:150,
        textAlign:"left",
        color:"white",
        fontWeight:"700",
        paddingTop:10
    },
    halfContainer :{
        flex:4,
        justifyContent:"flex-start",
        alignItems:"flex-start",
        paddingVertical:100,
        borderTopColor:"white",
        borderTopWidth:1,
        width:"100%"
    },
    locationText : {
        color:"white",
        fontSize:24,
        fontWeight:"500",
    },
    title : {
        color:"white",
        fontSize:18,
        fontWeight:"400"
    },
    textOntainer : {
        flex:2,
        alignItems:"center",
        justifyContent:"space-between",
        flexDirection:"row",
        width:"100%",
        paddingHorizontal : 20,
        borderTopWidth:1,
        borderTopColor:"white"
    },
    date :{
        flexDirection:"row",
        alignItems:"baseline",
        justifyContent:"space-between"
    },
    dateText : {
        color:"white",
        fontSize:17,
        paddingTop:10,
        fontWeight:"500",
        paddingHorizontal:2
    },
    dateMon : {
        paddingLeft:0
    },
    dateBar : {
        width:30,
        height:1,
        backgroundColor:"white"
    }
});