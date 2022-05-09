import {StyleSheet} from 'react-native';

import {fontFamily} from '../../../constants/uiConstants/fontFamilyConstants';

/**
 * Write down all your component styles
 */
const styles = StyleSheet.create({
  inputTextContainer: {
    marginTop: 20,
    height: 250,
    width: '100%',
    backgroundColor: '#27292D',
    borderWidth: 2,
    borderColor: '#35373B',
    borderRadius: 8,
  },
  NameText: {
    fontSize: 16,
    fontFamily: fontFamily?.InterThin,
    color: '#C5C7CA',
  },
  TimeText: {
    fontSize: 14,
    fontFamily: fontFamily?.InterThin,
    color: '#7f8084',
  },
  postText: {
    fontFamily: fontFamily?.InterThin,
    fontSize: 14,
    color: 'white',
    marginLeft: 5,
  },
  postTextMain: {
    fontFamily: fontFamily?.InterThin,
    fontSize: 14,
    color: 'white',
    marginLeft: 5,
    marginTop: 20,
  },
});
export default styles;
