import React from "react";
import { Text, View, TouchableOpacity } from 'react-native';
import { globalStyles } from '../assets/styles/global';

import FontAwesome from 'react-native-vector-icons/FontAwesome'

const SocialBitton = ({buttonTitle, btnType, color, backgroundColor, ...rest}) => {
    return(
        <TouchableOpacity style={[globalStyles.buttonContainer, {backgroundColor: backgroundColor}]} {...rest}>
            <View>
                <FontAwesome name={btnType} style={globalStyles.icon} size={22} color={color} />
            </View>
            <View>
                <Text style={[globalStyles.buttonText, {color: color}]}>{buttonTitle}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default SocialBitton;