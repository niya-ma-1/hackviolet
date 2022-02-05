import { StyleSheet } from "react-native";
import {windowHeight, windowWidth} from '../../utils/Dimentions'

export const globalStyles = StyleSheet.create({
    container: {
        backgroundColor: '#c71230',
        flex: 1,
        padding: 7,
    },
    loginContainer: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
    },
    buttonContainer: {
        marginTop: 10,
        width: '100%',
        height: windowHeight/15,
        backgroundColor: '#2e64e5',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    inputContainer: {
        marginTop: 5,
        marginBottom: 10,
        width: '100%',
        height: windowHeight/15,
        borderColor: '#ccc',
        borderRadius: 3,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    input: {
        padding: 10,
        flex: 1,
        fontSize: 16,
        color: '#333',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        fontWeight: 'bold',
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
    },
    text: {
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f'
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
    },
    forgotButton: {
        marginVertical: 35,
    },
    intro:{
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
        textAlign:'center',
        width:'100%',
        flex:1,
        backgroundColor:'#3C0F6F',
        color:'#ffc2e0', 
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },

   

});

export const images = {
    compnyAssets: {
        'logo': require('../logo.png')
    }
}