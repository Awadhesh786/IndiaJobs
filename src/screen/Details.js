import React, { Component } from 'react';
import {View,Text, StyleSheet, ScrollView, Linking} from 'react-native';
import colors from '../component/Colors'
import styles from '../css/DetailStyle'

class Details extends Component{
    static navigationOptions = {
        title: 'India Jobs',
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
    render(){
        return(
            <View>
                <Text style={styles.degination}> {this.props.navigation.state.params.api.company_name}</Text>
            <ScrollView
                 contentInsetAdjustmentBehavior="automatic"
                 //style={styles.scrollView}
                >
                <View>
                <Text style={styles.about}>About Company</Text>
                <Text style={styles.aboutDetail}>{this.props.navigation.state.params.api.about_company}</Text>
                </View>

                <View>
                <Text style={styles.about}>Position</Text>
                <Text style={styles.aboutDetail}>{this.props.navigation.state.params.api.position}</Text>
                </View>

                <View>
                <Text style={styles.about}>No. of Vacancy</Text>
                <Text style={styles.aboutDetail}>{this.props.navigation.state.params.api.vacancy}</Text>
                </View>

                <View>
                <Text style={styles.about}>Package (CTC)</Text>
                <Text style={styles.aboutDetail}>{this.props.navigation.state.params.api.ctc}</Text>
                </View>

                <View>
                <Text style={styles.about}>Interview Date</Text>
                <Text style={styles.aboutDetail}>{this.props.navigation.state.params.api.interview_date}</Text>
                </View>

                <View>
                <Text style={styles.about}>Interview Timinig</Text>
                <Text style={styles.aboutDetail}>{this.props.navigation.state.params.api.interview_time}</Text>
                </View>

                <View>
                <Text style={styles.about}>Skills</Text>
                <Text style={styles.aboutDetail}>{this.props.navigation.state.params.api.skills}</Text>
                </View>

                <View>
                <Text style={styles.about}>Specialization</Text>
                <Text style={styles.aboutDetail}>{this.props.navigation.state.params.api.specialization}</Text>
                </View>

                <View>
                <Text style={styles.about}>Recruitment Type</Text>
                <Text style={styles.aboutDetail}>{this.props.navigation.state.params.api.recruitment_type}</Text>
                </View>

                <View>
                <Text style={styles.about}>Qualification</Text>
                <Text style={styles.aboutDetail}>{this.props.navigation.state.params.api.qualification}</Text>
                </View>

                <View>
                <Text style={styles.about}>Experience</Text>
                <Text style={styles.aboutDetail}>{this.props.navigation.state.params.api.experiance_needed}</Text>
                </View> 

                <View>
                <Text style={styles.about}>Year Of Passing</Text>
                <Text style={styles.aboutDetail}>{this.props.navigation.state.params.api.passing_year}</Text>
                </View>

                <View>
                <Text style={styles.about}>Cut-Off</Text>
                <Text style={styles.aboutDetail}>{this.props.navigation.state.params.api.cut_off}</Text>
                </View>

                <View>
                <Text style={styles.about}>Job Description</Text>
                <Text style={styles.aboutDetail}>{this.props.navigation.state.params.api.description}</Text>
                </View>

                <View>
                <Text style={styles.about}>Job Type</Text>
                <Text style={styles.aboutDetail}>{this.props.navigation.state.params.api.job_type}</Text>
                </View>

                <View>
                <Text style={styles.about}>Job Shifts</Text>
                <Text style={styles.aboutDetail}>{this.props.navigation.state.params.api.job_shift}</Text>
                </View>

                <View>
                <Text style={styles.about}>Job Link</Text>
                <Text onPress={ ()=> Linking.openURL(this.props.navigation.state.params.api.job_link) }
                    style={styles.jobLink}>{this.props.navigation.state.params.api.job_link}</Text>
                </View>

                <View>
                <Text style={styles.about}>Job Location</Text>
                <Text style={styles.aboutDetail}>{this.props.navigation.state.params.api.job_locaion}</Text>
                </View>

                <View>
                <Text style={styles.about}>Venue (Interview)</Text>
                <Text style={styles.aboutDetail}>{this.props.navigation.state.params.api.interview_venue}</Text>
                </View>

                <View>
                <Text style={styles.about}>Contact Person</Text>
                <Text style={styles.aboutDetail}>{this.props.navigation.state.params.api.contact_person_name}</Text>
                </View>

                <View>
                <Text style={styles.about}>Contact Person Position</Text>
                <Text style={styles.aboutDetail}>{this.props.navigation.state.params.api.contact_person_position}</Text>
                </View>

                <View>
                <Text style={styles.about}>Contact No</Text>
                <Text style={styles.aboutDetail}>{this.props.navigation.state.params.api.contact_person_mobile_no}</Text>
                </View>

                <View>
                <Text style={styles.about}>Email</Text>
                <Text style={styles.aboutDetail}>{this.props.navigation.state.params.api.contact_person_email_id}</Text>
                </View>

                <View>
                <Text style={styles.about}>Last Date to Apply</Text>
                <Text style={styles.aboutDetail}>{this.props.navigation.state.params.api.last_date}</Text>
                </View>

                <View>      
                <Text style={styles.about}>Other Requirments</Text>
                <Text style={styles.aboutDetail}>{this.props.navigation.state.params.api.other_requirment}</Text>
                </View>

                <View style={{marginBottom:80}}>
                <Text style={styles.about}>Rounds</Text>
                <Text style={styles.aboutDetail}>{this.props.navigation.state.params.api.rounds}</Text>
                </View>

                </ScrollView>
            </View>
        )
    }
}

export default Details;
