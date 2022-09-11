import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    mainView:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:40,
    },
    TopView: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
  
    JustIn:{
        height: 300,
        width: 300,
        marginRight:10,
        
    },
    JustInText:{
        position: 'absolute',
        color:'white',
        fontWeight:'bold',
        fontSize:20,
    },
    FormView:{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems: 'center',
    },

    WomenAndMen:{
        flexDirection:'row',
    },

    Women: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    WomenText:{
        position: 'absolute',
        color:'white',
        fontSize: 18,
        fontWeight:'bold',
    },
   
    ImageWomen :{
        height: 150,
        width: 150,
        marginRight: 10,
        marginTop:10,
    },
    Men: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    MenText:{
        position: 'absolute',
        color:'white',
        fontSize: 18,
        fontWeight:'bold',
        border:4,
        borderColor:'white',
    },

    ImageMen :{
        height: 150,
        width: 150,
        marginRight: 10,
        marginTop:10,
    },
    MensButton:{
        justifyContent: 'center',
        alignItems: 'center',
        position:'absolute',
       
    },
    KidsAndNewArrivals:{
        flexDirection:'row',
    },
    Kids:{
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    KidsText:{
        position: 'absolute',
        color:'white',
        fontSize: 18,
        fontWeight:'bold',
    },
    ImageKids:{
        height: 150,
        marginRight: 10,
        marginTop:10,
        width: 150,
    },
    NewArrivals:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    NewArrivalsText:{
        position: 'absolute',
        color:'white',
        fontSize: 18,      
         fontWeight:'bold',
    },
    ImageNewArrivals: {
        height: 150,
        marginRight: 10,
        marginTop:10,
        width: 150,
    },
    BottomView:{
        flexDirection:'row',
        marginTop:10,
    },
    ContactUs:{
        marginRight:10,
        width:150,
        height: 50,
        backgroundColor:'#2a2a2a',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ContactUsText:{
        color:'white',
        fontSize: 18,
        fontWeight:'bold',
    },
   
    //LogoutButton:{},
    Logout:{
        width:150,
        height: 50,
        backgroundColor:'#2a2a2a',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    LogoutText:{
        color:'white',
        fontSize: 18,
        fontWeight:'bold',
    },
})