import {StyleSheet} from 'react-native';
import * as colors from '../../../constants/uiConstants/colorConstants';

import styleObj from '../../../styles/commonStyles';
/**
 * Write down all your component styles
 */

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },

  inputContainer: {
    ...styleObj.row,
  },

  preFixText: {
    fontSize: 16,
    color: colors.WHITE,
    margin: 5,
  },
  CloseIcon: {
    marginLeft: '-10%',
  },
});
export default styles;
