import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    mainView:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    info:{
        height:200,
        width:200,
    },
    Image:{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
    },

    Buttons:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    ViewMoreButton:{
        width:150,
        height: 80,
        backgroundColor:'#2a2a2a',
        justifyContent: 'center',
        alignItems: 'center',
        margin:10
    },
    ViewMoreButtonText:{
        color:'white',
        fontSize:15,
        fontWeight:'bold'
    }

 
   
});

