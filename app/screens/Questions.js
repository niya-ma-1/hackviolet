import React, {useState} from "react";
import { StyleSheet, CheckBox, Text, View, Image, Dimensions, Platform, PixelRatio, Linking } from 'react-native';
import { globalStyles, images } from '../assets/styles/global';
import { QuestionsInfo } from "../utils/QuestionsInfo";
import QuestionBox from "../components/QuestionBox";
import {windowHeight, windowWidth} from '../utils/Dimentions'

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

    const[isSelected, setSelection] = useState(false)
    var stringOf75BoolValues = "012100000000001110000222221111"//Check user database


    var questionEasy = []
    var questionMedium = []
    var questionHard = []

    for (let i = 0; i <30; i++) {
        const[isSelected, setSelection] = useState(false)
        if(QuestionsInfo.difficulty[i] == "Easy"){
           
            questionEasy.push(
                <View key={i} 
                    style={{
                        paddingLeft:Math.min(windowWidth/ 15, windowWidth **2/(15000)),
                        paddingRight:Math.min(windowWidth/ 15, windowWidth **2/(15000)),
                        }}>
                    <QuestionBox name={QuestionsInfo.name[i]} idx={i}/>
                    <Text style={{color: 'blue'}}
                            onPress={() => Linking.openURL(QuestionsInfo.youtube_link[i])}>
                        Youtube
                    </Text>
                    <View style={styles.container}>
                        <View style={styles.checkboxContainer}>
                            <CheckBox
                            value={isSelected}
                            onValueChange={setSelection}
                            style={styles.checkbox}
                            />
                            <Text style={styles.label}>Completed</Text>
                        </View>
                    </View>
                </View>
            );
        }
        else if(QuestionsInfo.difficulty[i] == "Medium"){
            questionMedium.push(
                <View key={i}
                    style={{
                        paddingLeft:Math.min(windowWidth/ 15, windowWidth **2/(15000)),
                        paddingRight:Math.min(windowWidth/ 15, windowWidth **2/(15000)),
                    }}
                    >
                    <QuestionBox name={QuestionsInfo.name[i]} idx={i}/>
                    <Text style={{color: 'blue'}}
                            onPress={() => Linking.openURL(QuestionsInfo.youtube_link[i])}>
                        Youtube
                    </Text>
                    <View style={styles.container}>
                        <View style={styles.checkboxContainer}>
                            <CheckBox
                            value={isSelected}
                            onValueChange={setSelection}
                            style={styles.checkbox}
                            />
                            <Text style={styles.label}>Completed</Text>
                        </View>
                    </View>
                </View>
            );
        }
        else if(QuestionsInfo.difficulty[i] == 'Hard'){
            questionHard.push(
                <View key={i}
                    style={{
                        paddingLeft:Math.min(windowWidth/ 15, windowWidth **2/(15000)),
                        paddingRight:Math.min(windowWidth/ 15, windowWidth **2/(15000)),
                    }}
                    >
                    <QuestionBox name={QuestionsInfo.name[i]} idx={i}/>
                    <Text style={{color: 'blue'}}
                            onPress={() => Linking.openURL(QuestionsInfo.youtube_link[i])}>
                        Youtube
                    </Text>
                    <View style={styles.container}>
                        <View style={styles.checkboxContainer}>
                            <CheckBox
                            value={isSelected}
                            onValueChange={setSelection}
                            style={styles.checkbox}
                            />
                            <Text style={styles.label}>Completed</Text>
                        </View>
                    </View>
                </View>
            );
        }
    }
   
    return (
        <View style={[styles.container, {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: "row"
        }]}>
          <View style={{ flex: 1, backgroundColor: "#DFC9F8" }}>
                <Text numberOfLines={1}
                    style = {styles.titleText}>
                    Easy
                </Text>
                {questionEasy}
          </View>
          <View style={{ flex: 1, backgroundColor: "#944AE8" }}>
                <Text style = {styles.titleText}>Medium</Text>
                {questionMedium}
          </View>
          <View style={{ flex: 1, backgroundColor: "#6117B5" }}>
                <Text style = {styles.titleText}>Hard</Text>
                {questionHard}
        </View>
        </View>
      );
};

const styles = StyleSheet.create({
    baseText: {
        fontFamily: "Cochin",
        fontSize: normalize(10),
    },
    titleText: {
        fontSize: normalize(10),
        fontWeight: "bold",
        textAlign: "center"
    },
    container: {
      flex: 1,
    },
    button:{
        color:"#3C0F6F"
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
    },
});

export default Questions;