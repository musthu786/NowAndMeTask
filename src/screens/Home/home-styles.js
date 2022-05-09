
/**
 * Global screen contaners stylesheet----
 */
 import { StyleSheet } from 'react-native';
 import styleObj from '../../styles/commonStyles';
 import {
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
 const styles = StyleSheet.create({
   // spalsh-----------------
   mainContainer: {
	 ...styleObj.container,
	 justifyContent:'center',
	 alignItems:'center'
   },
   splashText:{
	   color:'white',
	   fontSize:20
   },
   flatContainer: {
	paddingHorizontal: '20%',
	paddingBottom: 10,
	paddingTop: wp(5),
},
 });
 
 export default styles;