import React from 'react'
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUpScreen";
import SplashScreen from './SplashScreen';
import { View } from 'react-native-animatable';
import Icon from 'react-native-vector-icons/AntDesign';
import Questions from './Questions';
import { globalStyles } from '../assets/styles/global';
import QuestionScreen from './QuestionScreen';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SocialIcon } from 'react-native-elements/dist/social/SocialIcon';
// import {
//   GoogleSignin
// } from '@react-native-google-signin/google-signin';


const Stack = createStackNavigator()
const myTheme={
  colors:{
    background: '#5716a2',
    text: '#ffc2e0',
  },
  height:100,
};

export default function RootStackScreen() {
  return (
    <NavigationContainer theme={myTheme}>
      <Stack.Navigator initialRouteName='Home' >
      <Stack.Screen name='Home' component={SplashScreen} options={ ({navigation}) => ({
          headerRight: () => (
            <View style={{flexDirection:"row"}}>
              <View style={{flex:1, padding:20}}>
                  <Button onPress={() => navigation.navigate('Questions')}
                    title="Questions"
                    color="#841584"
                    accessibilityLabel="Questions"
                />
              </View>
              <View style={{flex:1, marginRight: 70, marginTop:10}}>
                  <SocialIcon title='Sign In With Google' 
                  button type='google' 
                  width='200'
                  onPress={() => navigation.navigate('SplashScreen')}
                  style={{backgroundColor:'#ffc2e0', height:40, width:200}}
                  iconStyle={{color:"blue"}}
                  ></SocialIcon>
              </View>
              
          </View>
          ),
        })}/>
      <Stack.Screen name='Questions' component={Questions} options={ ({navigation}) => ({
          headerRight: () => (
            
              <SocialIcon title='Sign In With Google' 
                  button type='google' 
                  width='200'
                  onPress={() => navigation.navigate('SplashScreen')}
                  style={{backgroundColor:'#ffc2e0', height:40, width:200}}
                  iconStyle={{color:"blue"}}
                  ></SocialIcon>
          
          ),
      })}/>

      <Stack.Screen name='QuestionScreen' component={QuestionScreen} ons={({navigation}) => ({
          headerRight: () => (
            <View>
              <Icon.Button name="google" size={30} color="#" />
              <Button onPress={() => navigation.navigate('Question')} title="Questions" color="#841584" accessibilityLabel="Questions" />
            </View>
          ),
        })}/>

      
      </Stack.Navigator>
    </NavigationContainer>
  );
}




