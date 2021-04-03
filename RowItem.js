import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import colors from './colors';

const styles = StyleSheet.create({
    row:{
        paddingHorizontal:5,
        paddingVertical:30,
        flexDirection:"row",
        alignItems:"center",
        justifyContent: "space-between",
        
        
    },
    text:{
        fontSize:16,
        color: colors.text
    },
    safe:{
        padding:50
    },
    separator:{
        backgroundColor: colors.border,
        height: StyleSheet.heairlineWidth
        
        
    }
});
export const RowItem = ({text, rightIcon, onPress }) => {
    return (
      <TouchableOpacity style={styles.row} onPress={onPress}>
        <Text style={styles.text}>
          {text}
        </Text>
        <Entypo name={rightIcon} size={20} color={colors.blue} />
        
      </TouchableOpacity>
    );
};
export const RowSeparator = () => <View style={StyleSheet.separator} />
    
