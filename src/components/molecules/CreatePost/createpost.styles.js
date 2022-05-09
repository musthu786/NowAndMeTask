import { StyleSheet } from 'react-native';
import { fontFamily } from '../../../constants/uiConstants/fontFamilyConstants';
/**
 * Write down all your component styles
 */
const styles = StyleSheet.create({
  inputTextContainer: {
    height:130,
	width:'100%',
	backgroundColor:'#27292D',
	borderWidth:2,
	borderColor:'#35373B',
	borderRadius:8
  },
  createPostText:{
	  color:'#C5C7CA',
	  fontSize:18,
	  fontFamily : fontFamily?.InterThin,
	  lineHeight:22,
	  marginLeft:12
  },
  postText:{
	  fontFamily: fontFamily?.InterThin,
	  fontSize:14,
	  color:'#7F8084'
  },
  submitText:{
	  color:'white',
	  fontSize:14,
	  fontFamily: fontFamily?.InterThin,
	  textAlign:'center'
  }
});
export default styles;  