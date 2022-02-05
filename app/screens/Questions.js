import React, {useState} from "react";
import { StyleSheet, Text, View, Image, Dimensions, Platform, PixelRatio } from 'react-native';
import { globalStyles, images } from '../assets/styles/global';
import { QuestionsInfo } from "../utils/QuestionsInfo";
import QuestionBox from "../components/QuestionBox";
//import { ScaleFromCenterAndroid } from "react-navigation-stack/lib/typescript/src/vendor/TransitionConfigs/TransitionPresets";
// import 'bootstrap/dist/css/bootstrap.min.css'

// import {Container, Row, Col} from 'react-bootstrap';

const {
    width: SCREEN_WIDTH,
    heigh: SCREEN_HEIGHT,
}= Dimensions.get('window')

const scale = SCREEN_WIDTH/375

function normalize(size){
    const newSize = size * scale
    if (Platform.OS == 'ios'){
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    }
    else{
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) -2
    }
}

const Questions = ({ navigation }) => {

    var stringOf75BoolValues = "0121"//Check user database

    var questionNumbersNotComplete = []
    var questionNumbersInProgress = []
    var questionNumbersComplete = []

    for (let i = 0; i < stringOf75BoolValues.length; i++) {
        if(stringOf75BoolValues.charAt(i) == '0'){
            questionNumbersNotComplete.push(
                <View key={i}>
                    <QuestionBox name={QuestionsInfo.name[i]} difficulty={QuestionsInfo.difficulty[i]}></QuestionBox>
                </View>
            );
        }
        else if(stringOf75BoolValues.charAt(i) == '1'){
            questionNumbersInProgress.push(
                <View key={i}>
                    <QuestionBox name={QuestionsInfo.name[i]} difficulty={QuestionsInfo.difficulty[i]}></QuestionBox>
                </View>
            );
        }
        else if(stringOf75BoolValues.charAt(i) == '2'){
            questionNumbersComplete.push(
                <View key={i}>
                    <QuestionBox name={QuestionsInfo.name[i]} difficulty={QuestionsInfo.difficulty[i]}></QuestionBox>
                </View>
            );
        }
    }
    /*

    var not_started = [];


    //TODO:
    for (let i = 0; i < 1; i++) {               //Replace 1 with 75
        //if question is not started    //Check user database
        not_started.push(
            <View key={i}>
                <Text>{Questions_json.name[0]}</Text>
            </View>
        );
    }
     
    */
     
    // return(
    //     <View style={globalStyles.loginContainer}>
    //         <div>
    //         <Container>
    //             <Row>
    //                 <Col>Not Started</Col>
    //                 <Col>In Progress</Col>
    //                 <Col>Complete</Col>
    //             </Row>
    //             <Row>
    //                 <Col>{questionNumbersNotComplete}</Col>
    //                 <Col>{questionNumbersInProgress}</Col>
    //                 <Col>{questionNumbersComplete}</Col>
    //             </Row>
    //         </Container>
    //         </div>
    //     </View>
    // );
    return (
        <View style={[styles.container, {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: "row"
        }]}>
          <View style={{ flex: 1, backgroundColor: "#DFC9F8" }}>
                <Text numberOfLines={1}
                    adjustsFontSizeToFit
                    style = {styles.titleText}>
                    Not Started
                </Text>
                {questionNumbersNotComplete}
          </View>
          <View style={{ flex: 1, backgroundColor: "#944AE8" }}>
                <Text style = {styles.titleText}>In Progress</Text>
                {questionNumbersInProgress}
          </View>
          <View style={{ flex: 1, backgroundColor: "#6117B5" }}>
                <Text style = {styles.titleText}>Completed</Text>
                {questionNumbersComplete}
        </View>
        </View>
      );
};

const styles = StyleSheet.create({
    baseText: {
        fontFamily: "Cochin",
        fontSize: normalize(20),
    },
    titleText: {
        fontSize: normalize(20),
        fontWeight: "bold",
        textAlign: "center"
    },
    container: {
      flex: 1,
    },
    button:{
        color:"#3C0F6F"
    }
});

export default Questions;