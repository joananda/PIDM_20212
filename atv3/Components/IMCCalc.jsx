import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import IMCMsg from './IMCMsg';

export default class Calculo extends Component {
    render(){
        const {altura, peso} = this.props

        if(!altura || !peso) return null

        const imc = (peso/altura**2).toFixed(2)
        
        return(
            <View>
                <Text style = {styles.baseText}>
                    Seu IMC é: {imc}
                </Text>

                <IMCMsg imc = {imc} />
            </View>
            
        )   
    }
}

const styles = StyleSheet.create({
    baseText: {
      fontSize: 25,
      fontWeight: "bold"
    }
});