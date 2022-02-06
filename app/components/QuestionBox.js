import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { globalStyles } from '../assets/styles/global';
import { QuestionsInfo } from "../utils/QuestionsInfo";

const QuestionBox = ({name, idx}) => {

    return(
        <TouchableOpacity onPress={() => Linking.openURL(QuestionsInfo.link[idx])}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{name} </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button:{
        backgroundColor: "#C11F83",
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 25,
        marginTop: 10
    },
    buttonText:{
        color: "white",
        fontSize: 15,
        textAlign: "center"
    }
});

export default QuestionBox;