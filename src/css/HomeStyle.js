module.exports = {
    container: {
        flex: 1,
        backgroundColor: "#fff"
       },
      loader:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
       },
      list:{
        //padding : 5,
        margin: 1,
        backgroundColor: "#F4F1F1",
    
       },
       frame : {
           backgroundColor: '#fff', 
           margin:4,
           padding:5, 
           elevation:5
        },
        header : {
            flexDirection:"row", 
            width:"100%",
            //backgroundColor:"#fff",
            
        },
        headerSize : {
            width:"70%"
        },
        headerName : {
            textAlignVertical:"center",
            textAlign:"left", 
            fontSize:18, 
            fontWeight:"bold",
            flex:1
        },
        headerRight: {
            alignItems:"center", 
            marginTop:10,
            width:"30%",
        },
        calender: {
            height:18,
            width:16
        },
        date : {
            fontSize:12
        },
        company : {
            //fontSize:20, 
            fontWeight:"bold", 
            marginLeft:10,
            //backgroundColor:"red"
        },
        exprience : {
            flexDirection:"row", 
            marginLeft:10,
            marginRight: 20,
            padding:2
        },
        year: {
            marginLeft: 10,
        },
        address : {
            flexDirection:"row", 
            //margin:10,
            marginLeft: 10,
        },
        workImg: {
            height:20,
            width:20
        },
        location : {
            marginLeft:8,
        },
        skill:{
            marginLeft: 8,
            marginBottom: 8,
        },
        activity : {
            height: .5,
            width:"100%",
            backgroundColor:"rgba(0,0,0,0.5)",
        }
}