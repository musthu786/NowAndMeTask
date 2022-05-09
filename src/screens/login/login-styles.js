
/**
 * Global screen contaners stylesheet----
 */
 import { StyleSheet } from 'react-native';

 import styleObj from '../../styles/commonStyles';
 import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
  } from 'react-native-responsive-screen';
 const styles = StyleSheet.create({
   // spalsh-----------------
   mainContainer: {
	 ...styleObj.container,
	 justifyContent:'center',
	 alignItems:'center',
	 padding:10
   },
   splashText:{
	   color:'white',
	   fontSize:20
   },
   input: {
    height: hp(7),
    width: '100%',


  },
 });
 
 export default styles;