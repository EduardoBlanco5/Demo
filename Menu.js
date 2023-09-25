import React, {Component} from 'react';
import { View, Text, StyleSheet, params, TouchableOpacity } from 'react-native';



import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TAB1 from "./Tab1";
import TAB2 from "./Tab2";



export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { 
       
        
    };

  };

  render() {
    const Tab = createBottomTabNavigator();
    return (
      
          <Tab.Navigator>
            <Tab.Screen name="Inicio" component={TAB1} initialParams={{nombre:this.props.route.params.nombre}} 
            />
            <Tab.Screen name="Tab2" component={TAB2} />
            
          </Tab.Navigator>
      
    );
  }
}
