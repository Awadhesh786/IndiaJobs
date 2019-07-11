import colors from '../component/Colors'

module.exports = {
    container: {
        flex: 1,
        width:"100%",
        //backgroundColor:"red"
  },
  input: {
        margin: 15,
        fontSize: 22,
        marginBottom : 20,
        fontWeight:"bold",
        color : colors.black,
  },
  submitButton: {
   backgroundColor: colors.light,
   padding: 10,
   margin: 15,
   height: 60,
 },
 submitButtonText:{
   color: '#FFFFFF',
   backgroundColor: colors.primary,
   width:"90%",
   height:45,
   borderRadius:10,
   alignSelf: 'center',
   justifyContent: 'center',
   marginBottom: 6,
 },
 signUpText:{
   color: '#FFFFFF',
   alignSelf: 'center',
 },
 inputs:{
   marginTop: 3,
   borderBottomColor: colors.white,
   borderBottomColor: '#05C203',
   backgroundColor: '#FFFFFF',
   borderRadius:5,
   borderBottomWidth: 1,
   width:"95%",
   height:45,
   marginBottom:20,
   alignSelf: 'center',
  },
  about: {
    fontWeight:"bold", 
    backgroundColor:"#DFDFDF", 
    padding:5,
    fontSize:16,
    width:"96%",
    alignSelf: 'center',
    //marginLeft:8, 
    //marginTop:6
},
inputsMulti: {
    marginLeft:10,
    marginTop: 3,
   borderBottomColor: colors.white,
   textAlignVertical:"top",
   borderBottomColor: '#05C203',
   backgroundColor: '#FFFFFF',
   borderRadius:5,
   borderBottomWidth: 1,
   width:"95%",
   height:100,
   marginBottom:20,
   alignSelf: 'center',
}
}