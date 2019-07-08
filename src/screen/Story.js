import React, { Component } from 'react';
import {View,Text,Image,Linking, TouchableOpacity, ScrollView} from 'react-native';
import colors from '../component/Colors'
import styles from '../css/StoryStyle'

class Details extends Component{
    static navigationOptions = {
        title: 'Our Story',
        headerStyle: {
          backgroundColor: colors.primary,
          
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          alignItems: 'center',
        },
    }
    render(){
        return(
            <View>
                <Text style={styles.head}>How we came up with the idea </Text>
                        <Text style={styles.body}>The story starts with the completion of our degree and
                        now was our turn to get a job. We left our native places 
                        in search of a job and came to Bengaluru. We used some popular 
                        online platforms to search for jobs, but faced a lot of problems 
                        in getting the specific job profiles that we were looking for and 
                        keeping a record of them and the dates. Also, it was much difficult 
                        to share particular jobs with each other. And this is how the idea of 
                        building this platform came to our mind - "Just to share information 
                        with each other in a better way!"</Text>
                        <Text style={styles.body}> Filtration of jobs with our required profiles was another such reason.</Text>
                        <Text style={styles.body}>As when we started using this platform, we realized that there would be 
                        many job seekers out there fighting with similar problems and the outcome 
                        you may figure out.</Text>
            
            </View>
        )
    }
}

export default Details;
