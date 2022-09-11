import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    mainView:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    TopView: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
  
    IconName: {
        justifyContent: 'center',
        flexDirection:'column',
        alignItems: 'center',
        marginBottom: 50,
    },
    ImageStyle: {
        width: 80,
        height: 89,
    },
    
    FormView:{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems: 'center',
    },
    TextInput:{
        width: '60%',
        borderWidth:1,
        borderColor:'black',
        height: 52,
        borderRadius:10,
        paddingLeft: 10,
        marginTop: 20,
        color: 'black',
        fontWeight:'bold',

    },
    Button:{
        width:'60%',
        height: 52,
        borderRadius: 10,
        marginTop: 20,
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center',
        fontSize:18,
        backgroundColor:'black',
    },
    ButtonText: {
        color: 'white',
        fontSize:14,
        fontWeight:'bold',

    },
    LoginText: {
        color: 'blue',
        fontWeight:'bold',
        paddingBottom: 20,
    },
    LoginButton:{
        width:'100%',
        marginTop: 20,
        alignItems: 'center',
        display: 'flex',
        
    },
});