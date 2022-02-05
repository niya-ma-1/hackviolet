
import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { globalStyles } from '../assets/styles/global';


const QuestionBox = ({name, difficulty}) => {
    // return(
    //     <div>
    //         <Button variant="primary">
    //             < View>          
    //                 <Text style={[globalStyles.buttonText]}>{name}</Text>
    //             </View>        
    //             <View>
    //                 <Text style={[globalStyles.buttonText]}>{difficulty}</Text>
    //             </View>
    //         </Button>{' '}
    //     </div>
    // );
    // return(
    //     <TouchableOpacity style={[globalStyles.buttonContainer]}>
    //         <Button
    //             title={name}
    //             titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
    //             linearGradientProps={{
    //               colors: ['#FF9800', '#F44336'],
    //               start: [1, 0],
    //               end: [0.2, 0],
    //             }}
    //             buttonStyle={{
    //               borderWidth: 0,
    //               borderColor: 'transparent',
    //               borderRadius: 20,
    //             }}
    //             containerStyle={{
    //               width: 200,
    //               marginHorizontal: 50,
    //               marginVertical: 10,
    //             }}
    //             icon={{
    //               name: 'arrow-right',
    //               type: 'font-awesome',
    //               size: 15,
    //               color: 'white',
    //             }}
    //             iconRight
    //             iconContainerStyle={{ marginLeft: 10, marginRight: -10 }}
    //           />
    //     </TouchableOpacity>
    // );
    return(
        <TouchableOpacity onPress={({name, difficulty}).onPress}>
            <View style={{...styles.button, ...({name, difficulty}).style}}>
                <Text style={{...styles.buttonText, ...({name, difficulty}).textStyling}}>{name}</Text>
            </View>
            <View>
                <Text style={{ ...({name, difficulty}).textStyling}}>{difficulty}</Text>
            </View>
           
        </TouchableOpacity>
    );
    // return(
    //     <TouchableOpacity style={[globalStyles.buttonContainer]}>
    //         <View>
    //             <Text style={[globalStyles.buttonText] }>{name}</Text>
    //         </View>
    //         <View>
    //             <Text style={[globalStyles.buttonText] }>{difficulty}</Text>
    //         </View>
           
    //     </TouchableOpacity>
    // );
};

const styles = StyleSheet.create({
    button:{
        backgroundColor: "orange",
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 25
    },
    buttonText:{
        color: "white",
        fontSize: 18
    }
});

export default QuestionBox;