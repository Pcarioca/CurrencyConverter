import React from 'react';
import { View, StyleSheet, StatusBar, Image} from 'react-native';
import colors from '../colors';

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.blue,
        flex: 1
    }


});


export default () => {
    return( 
      <View style={styles.container}>
        <StatusBar barStyle="auto" backgroundColor={colors.dark} />
        <Image source={require("../assets/background.png")} />
      </View>
 )
    
}