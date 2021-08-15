import React from 'react';
import { StyleSheet, Dimensions, Button,View } from 'react-native';

export default ({onPressLeft, textLeft, togglePointsFilter}) => {
    return (
        <View style={styles.panel}>
            <View style={styles.separador}>
                <Button onPress={onPressLeft} title={textLeft} />
            </View>
            <View>
                <Button title='Mostrar / Ocultar' onPress={togglePointsFilter} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    panel:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    separador:{
        marginBottom:20,
        borderRadius:5,
    }
})