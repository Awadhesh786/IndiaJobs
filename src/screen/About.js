import React, { Component } from 'react';
import {View,Text,Image,Linking, TouchableOpacity, ScrollView} from 'react-native';
import colors from '../component/Colors'
import styles from '../css/AboutStyle'

class Details extends Component{
    static navigationOptions = {
        title: 'Our Team',
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

                <Text style={styles.head}>"We're led by a team who constantly questions, 
                  tinkers, and challenges to unlock great creativity around every turn.
                  The successful implementation of this platform was only possible because 
                  of our friendship and our team."</Text>

              <ScrollView>
               <View style={styles.box}>
                  <View>
                    <Image style={styles.userImg} 
                      source={require('../image/saurabh.jpg')}/>
                  </View>

                  <View style={styles.detail}>
                    <Text style={styles.name}>Saurabh Shukla</Text>
                    <Text>(Full Stack Developer)</Text>
                    <Text style={styles.link}
                          onPress={() => Linking.openURL('https://saurabhshukla.in/')}>
                          https://saurabhshukla.in/
                    </Text>

                    <View style={styles.social}>
                      <TouchableOpacity 
                          onPress={()=> Linking.openURL('https://wa.me/919119145983')}>
                        <Image style={styles.iconImg} 
                          source={require('../image/whatsapp.png')} />
                      </TouchableOpacity>
                      <TouchableOpacity 
                          onPress={()=> Linking.openURL('https://www.facebook.com/saurabhshukla.developer')}>
                        <Image style={styles.iconImg} 
                          source={require('../image/facebook.png')} />
                      </TouchableOpacity>
                      <TouchableOpacity 
                          onPress={()=> Linking.openURL('https://www.linkedin.com/in/saurabh97/')}>
                        <Image style={styles.iconImg} 
                          source={require('../image/linkedin.png')} />
                      </TouchableOpacity>
                      <TouchableOpacity 
                          onPress={()=> Linking.openURL('https://github.com/saurabhshukla-webdeveloper')}>
                        <Image style={styles.iconImg} 
                          source={require('../image/github.png')} />
                      </TouchableOpacity>
                      <TouchableOpacity 
                          onPress={()=> Linking.openURL('https://www.instagram.com/saurabhshukla.official/')}>
                        <Image style={styles.iconImg} 
                          source={require('../image/instagram.png')} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>


                <View style={styles.box}>
                  <View>
                    <Image style={styles.userImg} 
                      source={require('../image/amisha.jpg')}/>
                  </View>

                  <View style={styles.detail}>
                    <Text style={styles.name}>Amisha Jain</Text>
                    <Text>(Full Stack Developer)</Text>
                   
                    <View style={styles.social}>
                      <TouchableOpacity 
                          onPress={()=> Linking.openURL('https://www.linkedin.com/in/jainamisha/')}>
                        <Image style={styles.iconImg} 
                          source={require('../image/linkedin.png')} />
                      </TouchableOpacity>
                      <TouchableOpacity 
                          onPress={()=> Linking.openURL('https://github.com/JainAmisha/')}>
                        <Image style={styles.iconImg} 
                          source={require('../image/github.png')} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>


                <View style={styles.boxs}>
                  <View>
                    <Image style={styles.userImg} 
                      source={require('../image/awadhesh.jpg')}/>
                  </View>

                  <View style={styles.detail}>
                    <Text style={styles.name}>Awadhesh Chaurasia</Text>
                    <Text>(Mobile App Developer)</Text>
                    <Text style={styles.link}
                          onPress={() => Linking.openURL('https://play.google.com/store/apps/details?id=com.ravi')}>
                          Play Store link
                    </Text>

                    <View style={styles.social}>
                     
                      <TouchableOpacity 
                          onPress={()=> Linking.openURL('https://www.facebook.com/awadhesh.chaurasia.503')}>
                        <Image style={styles.iconImg} 
                          source={require('../image/facebook.png')} />
                      </TouchableOpacity>
                      <TouchableOpacity 
                          onPress={()=> Linking.openURL('https://www.linkedin.com/in/awadhesh-chaurasia-88218018a')}>
                        <Image style={styles.iconImg} 
                          source={require('../image/linkedin.png')} />
                      </TouchableOpacity>
                      <TouchableOpacity 
                          onPress={()=> Linking.openURL('https://github.com/Awadhesh786')}>
                        <Image style={styles.iconImg} 
                          source={require('../image/github.png')} />
                      </TouchableOpacity>
                      <TouchableOpacity 
                          onPress={()=> Linking.openURL('https://www.instagram.com/awadhesh_chaurasia/?hl=en')}>
                        <Image style={styles.iconImg} 
                          source={require('../image/instagram.png')} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

               
                 
                </ScrollView>
            
            </View>
        )
    }
}

export default Details;
