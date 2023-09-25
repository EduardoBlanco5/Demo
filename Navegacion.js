import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Touchable, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import INICIO from "./Inicio";
import INSCRIPCION from "./Inscripcion";
import MENU from './Menu';

//LA importacion de lo que usemos

export default class Navegacion extends Component {
  constructor(props) {
    super(props);
    this.state = {
        //declaracion de variables
    };
  }

  render(){
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Inicio" component={INICIO} options ={{headerShow:false}} />
        <Stack.Screen name="Inscripcion" component={INSCRIPCION} />
        <Stack.Screen name="Menu" component={MENU} options={{hearderShow:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}