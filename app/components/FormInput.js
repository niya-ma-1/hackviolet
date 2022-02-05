import React from "react";
import { TextInput, View } from 'react-native';
import { globalStyles } from '../assets/styles/global';

const FormInput = ({lavelValue, placeholderText, ...rest}) => {
    return(
        <View style={globalStyles.inputContainer}>
            <TextInput
                value={lavelValue}
                style={globalStyles.input}
                numberOfLines={1}
                placeholder={placeholderText}
                placeholderTextColor="#666"
                {...rest}
            />
        </View>
    );
};

export default FormInput;