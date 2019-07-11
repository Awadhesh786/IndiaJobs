import colors from '../component/Colors'

module.exports = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
  },
  input: {
        margin: 15,
        fontSize: 40,
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
   width:350,
   height:45,
   borderRadius:10,
   justifyContent: 'center',
   alignItems: 'center'
 },
 signUpText:{
   color: '#FFFFFF',
   alignItems: 'center'
 },
 inputContainer: {
   borderBottomColor: '#05C203',
   backgroundColor: '#FFFFFF',
   borderRadius:5,
   borderBottomWidth: 1,
   width:350,
   height:45,
   marginBottom:20,
   //flexDirection: 'column',
   //alignItems:'center',
   
 },
 inputs:{
   height:45,
   marginLeft:16,
   borderBottomColor: colors.white,
   marginBottom: 100,
   //flex:1,
  },
}