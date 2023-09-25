import React, { Component } from 'react';
import { View, Text, navigate, navigation, StyleSheet, Image, Modal, TextInput, Touchable, TouchableOpacity, Alert } from 'react-native';
import { NavigationContext } from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen'
//LA importacion de lo que usemos

export default class Inicio extends Component {
  static contextType = NavigationContext;
  constructor(props) {
    super(props);
    this.state = {
        //declaracion de variables
        ModalVisible: false,
        Otro: false,

        correo: "",
        password: "",
    };
  }

  render() {
    //Aqui va la programacion de los objetos(botones, inputsd, etc)
    const Otro = () =>{
      this.setState({ModalVisible:true});
      console.log("diste click al boton de email");
  }
  const cierraModal = () =>{
    //navigation.navigate("Menu",{nombre: "Eduardo"})
      //this.setState({ModalVisible:false});
      var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
                  // Typical action to be performed when the document is ready:
              console.log(xhttp.responseText);
              if(xhttp.responseText === "3"){
                Alert.alert("Correo no reconocido, Registrate");

              }else{
                if(xhttp.responseText === "0")
                {
                  Alert.alert("Password erroneo, intenta de nuevo");

                }else{
                  navigation.navigate("Menu", {nombre: xhttp.responseText});
                }
              }
            }
                  
};
xhttp.open("GET", "https://constructorhandyman.000webhostapp.com/2023b/verifica.php?&correo="+this.state.correo+"&password="+this.state.password, true);
console.log("https://constructorhandyman.000webhostapp.com/2023b/verifica.php?correo="+this.state.correo+"&password="+this.state.password);
xhttp.send();


  }
  const cierraModal1 = () =>
  {
      this.setState({ModalVisible:false});
  }

    const navigation = this.context;
    const click1 = () => {
      console.log("diste click al boton de email");
    }
    const click2 = () => {
      console.log("diste click al boton de facebook");
    }
    const Ir_a_Inscr = () =>
    {
      navigation.navigate("Inscripcion");
    }
    return (
      <View style={styles.fondo}>

        <Image 
        style={styles.imagen1}
        source={require("./imagenes/Constructor.png")} />
        <View
            style={styles.login}>
            <Text style={styles.textohandy}>Welcome to handyMan</Text>
            <TouchableOpacity style = {styles.boton1} onPress={Otro}>
            <View style={styles.btnemail}>
              <Text style ={styles.txtemail}> Sign with email </Text> 
              <Modal 
                  transparent = {true}
                  visible = {this.state.ModalVisible}
                  animationType='slide'
                  >
                      <View style={{
                          borderWidth: 5,
                          marginLeft:30,
                          marginTop:150,
                          width: 300,
                          height: 440,
                          borderColor: "black",
                          borderRadius:35,
                          backgroundColor: "white",

                      }}>

                
                
                      
                      <Text style={styles.mail}>Correo:</Text>
                      <TextInput style={styles.TxtInput}
                          onChangeText={(correo) => this.setState({correo})}
                      ></TextInput>
                      <Text style = {styles.Password}>Password:</Text>
                      <TextInput style={styles.TxtInput}
                          onChangeText={(password) => this.setState({password})}
                      ></TextInput>
                      
                      <TouchableOpacity style={{
                          borderWidth: 2,
                          borderColor: "white",
                          backgroundColor: "blue",
                          width:250,
                          height:50,
                          borderRadius: 40,
                          marginLeft: 20,
                          marginTop: 28,
                      }} onPress={cierraModal}>
                      <Text style={{
                          fontSize: 20,
                          textAlign: "center",
                          color: "white",
                          marginTop: 8,


                      }}>Aceptar</Text> 

                      </TouchableOpacity>

                      <TouchableOpacity style={{
                      borderWidth: 2,
                          borderColor: "blue",
                          backgroundColor: "white",
                          width:250,
                          height:50,
                          borderRadius: 40,
                          marginLeft: 20,
                          marginTop: 28,
                      }} onPress={cierraModal1}>
                      <Text style={{
                          fontSize: 20,
                          textAlign: "center",
                          color: "black",
                          marginTop: 8,


                      }}>Cerrar</Text> 

                      </TouchableOpacity>
                  </View>
              </Modal>
              <Image
                style = {styles.Logoemail}
                source = {require("./imagenes/email1.png")}

              />
            </View>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.boton2} onPress={click2}>
            <View style={styles.btnFacebook}>
            
            <Text style ={styles.txtfacebook}> sign with Facebook </Text>
            <Image
                style = {styles.LogoFacebook}
                source = {require("./imagenes/facebook.png")}

              />
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={Ir_a_Inscr}>
            <Text style={styles.textodown}>Don´t have account? SIGN UP</Text>
            </TouchableOpacity>

      </View>     
      </View>
      

    );
  }
}
//creacion de estilos


const styles = StyleSheet.create({

  TxtInput:{
    borderWidth: 2,
    width: 200,
    height:40,
    borderRadius: 20,
    color: "black",
    borderColor: "blue",
    marginTop:5,
    marginBottom: 8,
    marginLeft:40,
    

},

Password:{
  fontSize:20,
  color: "black",
  textAlign: "center",
},
mail:{
  fontSize: 20,
  color: "black",
  textAlign: "center",
},

  Logoemail:{
    width:38,
    height:38,
    marginTop: -28,
    marginLeft: 22,
    
},
  LogoFacebook:{
    width:38,
    height:38,
    marginTop: -30,
    marginLeft: 22,
},
  textodown:{
    fontSize:20,
        textAlign: "center",
        marginTop:18,
        color: "white",
        marginLeft: 5,

  },

  boton1:{
    
    width: 250,
    height: 50,
    marginLeft: 40,
    marginTop: 15,
  },

  boton2:{

    width: 250,
    height: 50,
    marginLeft: 40,
    marginTop: 15,
  },
    btnFacebook:{

        width:290,
        height:55,
        borderWidth:2,
        borderColor:"white",
        backgroundColor:"white",
        borderRadius:60,
        marginLeft:-20,
        marginTop:1,
    },

    btnemail:{
        width:290,
        height:60,
        borderWidth:2,
        borderColor:"#063970",
        backgroundColor:"#063970",
        borderRadius:60,
        marginLeft:-20,
        marginTop:-10,
    },
    
    textohandy:{
        
        fontSize:25,
        textAlign: "center",
        marginTop:2,
        color: "white",
    },

    txtemail:{
        
      fontSize:20,
      textAlign: "center",
      marginLeft:40,
      marginTop:10,
      color: "white",
  },
  txtfacebook:{
        
    fontSize:20,
    textAlign: "center",
    marginLeft:40,
    marginTop:10,
    color: "black",
  },
  fondo:{
      width:500,
      height:300,
      marginTop:40,
  },
  imagen1:{
      width:400,
      height:400,
  },
  login:{
    width:340,
      height:220,
      borderRadius: 20,
      borderWidth:10,
      marginLeft:10,
      borderColor:"#e27743",
      backgroundColor:"#e27743",
      
    }

    

})