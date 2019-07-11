import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, View, Dimensions,TouchableOpacity,
Button,Alert,Image,ImageBackground,StatusBar, ScrollView} from 'react-native';
import img from '../component/Image';
import colors from '../component/Colors';
import styles from '../css/AdminPostStyle';


export default class App extends Component {

    static navigationOptions = {
        title: 'Admin Potal',
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


    render() {
        return (
            <ImageBackground
            source={{uri:"https://www.freepngimg.com/thumb/light/6-2-light-png-picture.png"}}  
            
            imageStyle={{resizeMode: 'stretch'}}
            style={{width: '100%', height: '100%', opacity:1}}>

            <StatusBar
            backgroundColor= {colors.statubar}
            barStyle="light-content"/>

        <View style={styles.container}>

        <Text style={styles.input}>Your Details</Text>            
            
            <ScrollView
                 contentInsetAdjustmentBehavior="automatic"
                 showsVerticalScrollIndicator={false}
                 //style={styles.scrollView}
                >
                <View>
                <Text style={styles.about}>About Company</Text>
                <TextInput style={styles.inputsMulti}
                    placeholder="Company is xyz."
                    multiline
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'/>
                </View>
                
                <View>
                <Text style={styles.about}>Position</Text>
                <TextInput style={styles.inputs}
                    placeholder="FrontEnd Developer"
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'/>
                </View>

                <View>
                <Text style={styles.about}>No. of Vacancy</Text>
                <TextInput style={styles.inputs}
                    placeholder="5"
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'/></View>

                <View>
                <Text style={styles.about}>Package (CTC)</Text>
                <TextInput style={styles.inputs}
                    placeholder="3.5 Lakhs per year"
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'/></View>

                <View>
                <Text style={styles.about}>Interview Date</Text>
                <TextInput style={styles.inputs}
                    placeholder="14/07/2019"
                    keyboardType="number"
                    underlineColorAndroid='transparent'/></View>

                <View>
                <Text style={styles.about}>Interview Timinig</Text>
                <TextInput style={styles.inputs}
                    placeholder="10:00 AM"
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'/></View>

                <View>
                <Text style={styles.about}>Skills</Text>
                <TextInput style={styles.inputsMulti}
                    placeholder="React Native, JavaScript, Android, Java etc"
                    multiline
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'/>
                </View>

                <View>
                <Text style={styles.about}>Specialization</Text>
                <TextInput style={styles.inputs}
                    placeholder="React Native"
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'/></View>

                <View>
                <Text style={styles.about}>Recruitment Type</Text>
                <TextInput style={styles.inputs}
                    placeholder="Walkin"
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'/></View>

                <View>
                <Text style={styles.about}>Qualification</Text>
                <TextInput style={styles.inputs}
                    placeholder="B Tech with CSE/MCA/IT"
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'/></View>

                <View>
                <Text style={styles.about}>Experience</Text>
                <TextInput style={styles.inputs}
                    placeholder="Company is xyz."
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'/></View> 

                <View>
                <Text style={styles.about}>Year Of Passing</Text>
                <TextInput style={styles.inputs}
                    placeholder="3 year"
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'/></View>

                <View>
                <Text style={styles.about}>Cut-Off</Text>
                <TextInput style={styles.inputs}
                    placeholder="60% throughout Academics"
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'/></View>

                <View>
                <Text style={styles.about}>Job Description</Text>
                <TextInput style={styles.inputsMulti}
                    placeholder="- Work with a performance oriented 
                        team driven by ownership and open to experiments
                        - Learn to design system for high accuracy, 
                        efficiency and scalability
                        - No strict deadlines, focus on delivering quality work 
                        - Meritocracy driven, candid culture. 
                        No politics
                        - Very high visibility regarding
                         which startups and markets are exciting globally"
                    multiline
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'/>
                </View>

                <View>
                <Text style={styles.about}>Job Type</Text>
                <TextInput style={styles.inputs}
                    placeholder="Full Time"
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'/></View>

                <View>
                <Text style={styles.about}>Job Shifts</Text>
                <TextInput style={styles.inputs}
                    placeholder="Day/Night"
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'/></View>

                <View>
                <Text style={styles.about}>Job Link</Text>
                <TextInput style={styles.inputs}
                    placeholder="www.xyz.com"
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'/>
                </View>

                <View>
                <Text style={styles.about}>Job Location</Text>
                <TextInput style={styles.inputs}
                    placeholder="Bangalore"
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'/>
                </View>

                <View>
                <Text style={styles.about}>Venue (Interview)</Text>
                <TextInput style={styles.inputs}
                    placeholder="Technologies"
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'/>
                </View>

                <View>
                <Text style={styles.about}>Contact Person</Text>
                <TextInput style={styles.inputs}
                    placeholder="Chaurasia(Hr)"
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'/>
                </View>

                <View>
                <Text style={styles.about}>Contact Person Position</Text>
                <TextInput style={styles.inputs}
                    placeholder="Hr"
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'/>
                </View>

                <View>
                <Text style={styles.about}>Contact No</Text>
                <TextInput style={styles.inputs}
                    placeholder="9876543210"
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'/>
                </View>

                <View>
                <Text style={styles.about}>Email</Text>
                <TextInput style={styles.inputs}
                    placeholder="xyz@gmail.com"
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'/>
                </View>

                <View>
                <Text style={styles.about}>Last Date to Apply</Text>
                <TextInput style={styles.inputs}
                    placeholder="20/07/2019"
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'/>
                </View>

                <View>      
                <Text style={styles.about}>Other Requirments</Text>
                <TextInput style={styles.inputsMulti}
                    placeholder="Knowledge of SPAs and build tools 
                    (like webpack, parcel etc)
                    - Experience with performance optimization of applications
                    - Good command over data structure, algorithms"
                    multiline
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'/>
                </View>

                <View>
                <Text style={styles.about}>Rounds</Text>
                <TextInput style={styles.inputs}
                    placeholder="Face 2 Face"
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'/>
                    
                </View>


                
                </ScrollView>

        <TouchableOpacity style={styles.submitButtonText} 
            //onPress={() => this.onClickListener('sign_up')}
            onPress={()=> this.props.navigation.navigate("Home")}
            >
            <Text style={styles.signUpText}>Post</Text>
        </TouchableOpacity>

        </View>
        </ImageBackground>
        );
 }
}
