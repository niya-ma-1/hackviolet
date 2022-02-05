import React from "react";
import { Text, TouchableOpacity } from 'react-native';

const FormTextClicable = ({textStyle, text,  ...rest}) => {
    return(
        <TouchableOpacity {...rest}>
            <Text style={textStyle}>{text}</Text>
        </TouchableOpacity>
    );
};

export default FormTextClicable;