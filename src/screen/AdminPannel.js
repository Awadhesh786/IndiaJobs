import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, View, Dimensions,TouchableOpacity,
Button,Alert,Image,ImageBackground,StatusBar} from 'react-native';
import img from '../component/Image';
import colors from '../component/Colors';
import styles from '../css/AdminPannelStyle';


export default class App extends Component<Props> {

    static navigationOptions = {
        title: 'Admin Login',
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            textAlign: 'center',
            flexGrow:1,
            alignSelf:'center',
            fontWeight:'bold',
        },
    }

    constructor(){
        super();
        this.state = {
            message : " "           
        }
    }


    update_value(text, field){
        //console.warn(text);
        if (field =='message') {
            this.setState({message:text})
        }
    }

    

    onClickListener(){
        let collection = {}
        collection.message = this.state.message
        //console.warn(collection);
        
        //fetch('https://murmuring-cove-75830.herokuapp.com/api/algo/data', 
        fetch('https://fast-mountain-61109.herokuapp.com/api/awadhesh', 
        {
        method: 'POST',
        body: JSON.stringify({
            name: 'saurabh',
            email: 'saura@gmail.com',
            phone: "198765567890"

        }),
        headers: {
        "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(function (error) {
        console.log(" error " + error);
        alert("result:" + error)
      });
        
    }


    render() {
        return (
            <ImageBackground
                //source={{uri : img.bg}} 
            source={{uri:"https://www.freepngimg.com/thumb/light/69355-light-sunshine-vector-vecteur-pattern-glow.png"}}  
            //source={require('../image/awadhesh.jpg')}
            imageStyle={{resizeMode: 'stretch'}}
            style={{width: '100%', height: '100%'}}>

            <StatusBar
            backgroundColor= {colors.statubar}
            barStyle="light-content"/>

        <View style={styles.container}>

        <Text style={styles.input}>Admin Potal</Text>

    <View style={styles.inputContainer}>

        <TextInput style={styles.inputs}
            placeholder="Usrname"
            keyboardType="email-address"
            underlineColorAndroid='transparent'
            onChangeText={(text) => this.update_value(text, 'message')}/>
            </View>
        <View style={styles.inputContainer}>
        <TextInput style={styles.inputs}
            placeholder="Password"
            keyboardType="email-address"
            underlineColorAndroid='transparent'
            onChangeText={(text) => this.update_value(text, 'message')}/>
        </View>

        <TouchableOpacity style={styles.submitButtonText} 
            onPress={()=>this.props.navigation.navigate("AdminPost")} 
            //onPress={() => this.onClickListener('sign_up')}
            >
            <Text style={styles.signUpText}>Login</Text>
        </TouchableOpacity>

        </View>
        </ImageBackground>
        );
 }
}
