import React, {useState} from "react";
import { globalStyles, images } from '../assets/styles/global';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import FormTextClicable from '../components/FormTextClicable';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { StyleSheet } from "react-native";
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ImageBackground } from 'react-native-web';


const SignUpScreen = ({ navigation }) => {
    const[email, setEmail] = useState();
    const[password, setPassword] = useState();
    const[confirmPassword, setConfirmPassword] = useState();

    //TODO: add features such as smaill red text to guide user on how to enter password and email
    //TODO: small red error text if email format not valied
    //TODO: small red error text if passwords do not match
    //TODO: add a button to unhide the password entry, the eye icon


    const SignUp = ({ }) => {
        if (password == confirmPassword){                           //TODO: not sure is this is the best way to check their values
            fetch('http://localhost:5000/api/v1/users/user', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },            
                body: JSON.stringify({
                    "user": email,
                    "password": password
                })
            });
        }
    }

    return(
        <View style={globalStyles.loginContainer}>
            <Text style={globalStyles.text}>CodeViolet Sign Up</Text>
            <FormInput
                lavelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <FormInput
                lavelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Password"
                secureTextEntry={true}
            />
            <FormInput
                lavelValue={confirmPassword}
                onChangeText={(userPassword) => setConfirmPassword(userPassword)}
                placeholderText="Confirm password"
                secureTextEntry={true}
            />
            <FormButton
                buttonTitle="Sign Up"
                onPress={() => SignUp()}
            />
        </View>
    );
};

export default SignUpScreen;