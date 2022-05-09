import React, {memo} from 'react';
import {View} from 'react-native';
import {FormComponent} from '../../organisms';
import styles from './formComponent-style';

const FormContainer = props => {
  const {formFileds, styleInput} = props;
  return (
    <>
      <View style={styles.inputTextContainer}>
        <FormComponent formFileds={formFileds} styleInput={styleInput} />
      </View>
    </>
  );
};

export default memo(FormContainer);
