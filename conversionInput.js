import React from "react";
import { TouchableOpacity, TextInput, View, Text, StyleSheet } from "react-native";
import colors from "./colors";

const stiluri = StyleSheet.create({
    container:{
        backgroundColor: colors.white,
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 10,
        flexDirection: "row"
    },
    containerDisabled: {
        backgroundColor: "red"
    },
    button:{
        padding: 15,
        borderRightColor: colors.border,
        borderRightWidth: 1
    },
    buttonText:{
        fontSize: 20,
        color:colors.blue,
        fontWeight:"bold"
    },
    input:{
        flex:1,
        padding: 10,
        color:colors.blue,
        fontWeight:"bold"
    }
});


export const ConversionInput = ( {text, onButtonPress, ...props } ) =>{
    
    const containerStyles = [stiluri.container];
    if(props.editable === false){
        containerStyles.push(stiluri.containerDisabled);
    }
    return(

      <View style={stiluri.container}>
        <TouchableOpacity onPress={onButtonPress} style={stiluri.button}>
          <Text style={stiluri.buttonText}>{text}</Text>
        </TouchableOpacity>
        <TextInput style={stiluri.input} {...props} />
      </View>

    )

}