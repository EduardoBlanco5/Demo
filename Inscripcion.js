import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
//LA importacion de lo que usemos

export default class Inscripcion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //declaracion de variables
            ModalVisible: false,
            nombre: "",
            correo: "",
            password: "",
        };
    }

    render() {
        const Otro = () => {
            this.setState({ ModalVisible: true });
        }
        const cierraModal = () => {
            //this.setState({ModalVisible:false});
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    // Typical action to be performed when the document is ready:
                    console.log(xhttp.responseText);
                }

            };
            xhttp.open("GET", "https://constructorhandyman.000webhostapp.com/2023b/Datos.php?nombre=" + this.state.nombre + "&correo=" + this.state.correo + "&password=" + this.state.password, true);
            console.log("GET", "https://constructorhandyman.000webhostapp.com/2023b/Datos.php?nombre=" + this.state.nombre + "&correo=" + this.state.correo + "&password=" + this.state.password);
            xhttp.send();

        }
        const cierraModal1 = () => {
            this.setState({ ModalVisible: false });
        }

        return (
            <View>
                <Text style={styles.titulo}> Inscripcion</Text>
                <TouchableOpacity style={{
                    borderWidth: 2,
                    borderColor: "black",
                    backgroundColor: "blue",
                    width: 280,
                    height: 60,
                    borderRadius: 40,
                    marginLeft: 40,
                    marginTop: 30,
                }} onPress={Otro}>
                    <Text style={{
                        fontSize: 20,
                        marginTop: 10,
                        color: "white",
                        textAlign: "center",

                    }}>Inscribir con correo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    borderWidth: 2,
                    borderColor: "blue",
                    backgroundColor: "white",
                    width: 280,
                    height: 60,
                    borderRadius: 40,
                    marginLeft: 40,
                    marginTop: 40,
                }}>
                    <Text style={{
                        fontSize: 20,
                        marginTop: 10,
                        color: "black",
                        textAlign: "center",

                    }}>Inscribir con Facebook</Text>
                </TouchableOpacity>
                {/*Ventana modal*/}
                <Modal
                    transparent={true}
                    visible={this.state.ModalVisible}
                    animationType='slide'
                >
                    <View style={{
                        borderWidth: 5,
                        marginLeft: 30,
                        marginTop: 320,
                        width: 300,
                        height: 398,
                        borderColor: "black",
                        borderRadius: 35,

                    }}>



                        <Text style={styles.Nombre}>Nombre:</Text>
                        <TextInput style={styles.TxtInput}
                            onChangeText={(nombre) => this.setState({ nombre })}
                        ></TextInput>
                        <Text style={styles.mail}>Correo:</Text>
                        <TextInput style={styles.TxtInput}
                            onChangeText={(correo) => this.setState({ correo })}
                        ></TextInput>
                        <Text style={styles.Password}>Password:</Text>
                        <TextInput style={styles.TxtInput}
                            onChangeText={(password) => this.setState({ password })}
                        ></TextInput>

                        <TouchableOpacity style={{
                            borderWidth: 2,
                            borderColor: "black",
                            backgroundColor: "blue",
                            width: 250,
                            height: 50,
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
                            width: 250,
                            height: 50,
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

            </View>
        )



    }
}

const styles = StyleSheet.create({

    Password: {
        color: "black",
        textAlign: "center",
    },
    mail: {
        color: "black",
        textAlign: "center",
    },
    Nombre: {
        color: "black",
        textAlign: "center",
    },

    TxtInput: {
        borderWidth: 2,
        width: 200,
        height: 40,
        borderRadius: 20,
        color: "black",
        marginTop: 5,
        marginBottom: 8,
        marginLeft: 40,


    },
    titulo: {
        color: "black",
        fontSize: 50,
        textAlign: "center",


    },
})

