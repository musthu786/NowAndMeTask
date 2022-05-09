import {StyleSheet} from 'react-native';
import {fontFamily} from '../../../constants/uiConstants/fontFamilyConstants';
/**
 * Write down all your component styles
 */
const styles = StyleSheet.create({
  container: {
    height: 100,
    width: '100%',
    marginTop: 5,
    marginBottom: 5,
  },
  preFixText: {
    color: '#C5C7CA',
    fontSize: 28,
    fontFamily: fontFamily?.InterMedium,
    lineHeight: 34,
    marginBottom: 10,
  },
  preFixTextSecond: {
    color: '#7F8084',
    fontFamily: fontFamily?.InterThin,
    fontSize: 16,
  },
});
export default styles;
