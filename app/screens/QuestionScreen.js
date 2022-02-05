
import React, {useState} from "react";
import { Text, View, Image } from 'react-native';
import { globalStyles, images } from '../assets/styles/global';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import FormTextClicable from '../components/FormTextClicable';
import SocialButton from '../components/SocialButton';

const QuestionScreen = ({ navigation, route }) => {
    
    const { itemId, otherParam } = route.params;

    return(
        <View>
             <Text>itemId: {JSON.stringify(itemId)}</Text>

        </View>
    );
};

export default QuestionScreen;