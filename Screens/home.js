import React from 'react';
import { View, StyleSheet, StatusBar, Image, Dimensions, Alert} from 'react-native';
import colors from '../colors';
import { ConversionInput } from '../conversionInput';


const screen = Dimensions.get("window");
const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.blue,
        flex: 1,
        justifyContent: 'center'
    },
    logoContainer:{
        alignItems: "center",
        justifyContent: "center"
    },

    image1:{
        position:"absolute",
        width: screen.width * 0.5,
        height: screen.height * 0.5,
        resizeMode: "contain"
    },

    image2:{
        width: screen.width * 0.25,
        height: screen.height * 0.25,
        resizeMode: "contain"
    }

});


export default () => {
    
    return( 
      <View style={styles.container}>
        <StatusBar barStyle="auto" backgroundColor={colors.blue} />
        <View style={styles.logoContainer}>
          <Image source={require("../assets/background.png")} style={styles.image1} />
          <Image source={require("../assets/logo.png")} style={styles.image2} />
        </View>

        <ConversionInput
          text="RON"
          value="123"
          onButtonPress={() => Alert.alert("sa fie","Paste fericit")}
          onChangeText={text=> console.log("text", text)}
          keyboardType="numeric"
          
        />
        <ConversionInput
          text="USD"
          value="123"
          onButtonPress={() => Alert.alert("sa fie","Craciun fericit")}
          editable={false}
        />

      </View>
 )
    
}