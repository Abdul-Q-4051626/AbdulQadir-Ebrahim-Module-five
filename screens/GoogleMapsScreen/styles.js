import { StyleSheet, Dimensions } from 'react-native';


export default StyleSheet.create({
    mainView:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:40,
    },
    map:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    container:{
        flex: 1,
        justifyContent: "center",
        backgroundColor:"#a1a1a1",
        width:"100%"

    },
      horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10,
    },
    carousel:{
        position: 'absolute',
        bottom: 0,
        height: Dimensions.get('window').height /3,
    },
    

});

