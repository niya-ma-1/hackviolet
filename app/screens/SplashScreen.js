import { Text, View, Image, TouchableOpacity } from 'react-native';
import { globalStyles, images } from '../assets/styles/global';
import * as Animatable from 'react-native-animatable';
import { StyleSheet } from "react-native";
import { Button } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ImageBackground } from 'react-native-web';

function SplashScreen({ navigation })  {

    return(
        <View style={globalStyles.intro}>
            <ImageBackground
                source={require('../assets/matrix.gif')}
                style={{width: '100%', height: '100%'}}>
                <View style={{flex:1, 
                textAlign:'center', 
                justifyContent: 'center',}}>

                <Text style={{fontSize:80,
                    color:'#ffc2e0',
                    }}>
                    CodeViolet</Text>
                </View>
                
                <View style={{flex:1, 
                textAlign:'center',}}>
                <Text style={{color:'#ffc2e0', 
                    fontSize:30,}}>
                     Got a Coding Interview? Don't sweat, use CodeViolet!</Text>
            </View>
            </ImageBackground>
        </View>
    );
};


export default SplashScreen