import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, params, TouchableOpacity } from 'react-native';
import MenuDrawer from 'react-native-side-drawer';



export default class Tab1 extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        open: false,
        
    };
  }

  toggleOpen = () => {
    this.setState({ open: !this.state.open });
  };

  drawerContent = () => {
    return (
       
       <View style={styles.animatedBox}>
        <Text style={{marginTop: 10, textAlign: 'center'}}>Bienvenido: {this.props.route.params.nombre}</Text>
      <TouchableOpacity onPress={this.toggleOpen} style={{marginTop: 450, width: 50, height: 40,}}>
        <Text style={{textAlign: 'center'}}>Close</Text>
      </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
        <View style={styles.container}>
        <MenuDrawer
          open={this.state.open}
          position={'left'}
          drawerContent={this.drawerContent()}
          drawerPercentage={91}
          animationTime={250}
          overlay={true}
          opacity={0.4}
        >
          <TouchableOpacity onPress={this.toggleOpen} style={styles.body}>
            <Image 
            source={require("./imagenes/menu_hambu.png")}
            style={{width: 30, height: 25,}}>
              
            </Image>
            <Text>Open</Text>

          </TouchableOpacity>
        </MenuDrawer>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "aqua",
      alignItems: "left",
      justifyContent: "center",
      marginTop: 3,
      marginLeft: -20,
      zIndex: 0
    },
    animatedBox: {
      flex: 1,
      backgroundColor: "grey",
      padding: 30,
      marginTop: 54.9,
      width: 150,
    },
    body: { //barra de color
      height: 300, 
      width: 39,
      marginLeft: 30,
    },
  })