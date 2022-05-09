/**
 * Global screen contaners stylesheet----
 */
import {StyleSheet} from 'react-native';
import styleObj from '../../styles/commonStyles';

const styles = StyleSheet.create({
  // spalsh-----------------
  mainContainer: {
    ...styleObj.container,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashText: {
    color: 'white',
    fontSize: 20,
  },
});

export default styles;
