import React from "react";
import {
    View,
    ActivityIndicator,
    FlatList,
    Text,
    TouchableOpacity,
    Image,
    Button,
    StatusBar
    } from "react-native";
    
import { withNavigation } from 'react-navigation'
import styles from '../css/HomeStyle';
import colors from '../component/Colors';


class Home extends React.Component {  
  
  static navigationOptions = {
    header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
        loading: true,
        dataSource:[],
        error : null,
        page: 1,
        seed: 1,
        refreshing : false,
      };
    }

      componentDidMount(){

        //const {page, seed} = this.state;
        fetch("https://sacredbits.com/jobs/myapi")
          .then(response => response.json())
          .then((responseJson)=> {
            this.setState({
            loading: false,
            refreshing: false,
            dataSource: responseJson.jobs,
            
            })
        })
        .catch(error => {
            this.setState[{error,loading:false, refreshing:false}]
        })
        
        
      }

    FlatListItemSeparator = () => {
    return (
    <View style={styles.activity}/>
    );
    }

    handleRefresh = () => {
      this.setState({
        page : 1,
        refreshing : false,
        seed : this.state.seed + 1,
      }), () => {
        componentDidMount();
      }
    }
        
    renderItem=(data)=>
    <TouchableOpacity 
    onPress={()=>this.props.navigation.navigate("Details",{api: data.item})} 
      style={styles.list}>

    <View style={styles.frame}>
    <View style={styles.header}>
        <View style={styles.headerSize}>
        <Text style={styles.headerName}>{data.item.position}</Text>
        </View>

        <View style={styles.headerRight}>
        <Image style={styles.calender} source={require('../image/calender.png')} />
        <Text style={styles.date}>{data.item.interview_date}</Text>
        </View>
    </View>

        <Text style={styles.company}>{data.item.company_name}</Text>
        <View style={styles.exprience}>
          <Image style={styles.workImg} source={require('../image/work.png')} />
        {/* <Text>Exp: </Text> */}
        <Text style={styles.year}>{data.item.experiance_needed}</Text>
        </View>
        <View style={styles.exprience}>
        <Image style={styles.workImg} source={require('../image/locate.png')} />
        <Text style={styles.location}>{data.item.job_locaion}</Text>
        </View>
        <View style={styles.exprience}>
        <Image style={styles.workImg} source={require('../image/skills.png')} />
        <Text style={styles.skill}>{data.item.skills}</Text>
        </View>
    </View>
    </TouchableOpacity>

    render(){
    if(this.state.loading){
    return( 
        <View style={styles.loader}> 
        <ActivityIndicator size="large" color="#0c9"/>
        </View>
    )}

    return(
        <View style={styles.container}>


      <StatusBar 
        barStyle = "dark-content" 
        //hidden = {false} 
        backgroundColor = {colors.statubar}
        //translucent = {true}
        />

        <View style={{backgroundColor: colors.primary, flexDirection:"row"}}>
          <TouchableOpacity
            onPress={() => this.props.navigation.openDrawer()}  
            style={{width:"12%", justifyContent:"center", alignItems:"center"}}>
          <Image 
            source={require('../image/menu.png')}
            style={{height:23, width:23}} />
          </TouchableOpacity>

          <TouchableOpacity style={{width:"75%"}}>
          <Text style={{ fontSize:20, fontWeight:"bold",color:"white", padding:14, textAlign:"center"}}>India Jobs</Text>
          </TouchableOpacity>
        </View>

        <FlatList
            data= {this.state.dataSource}
            ItemSeparatorComponent = {this.FlatListItemSeparator}
            renderItem= {item=> this.renderItem(item)}
            keyExtractor= {item=>item.company_name.toString()}
            refreshing={this.state.refreshing}
            onRefresh = {this.handleRefresh}
            
            />
        </View>
        )}
}

export default withNavigation(Home);