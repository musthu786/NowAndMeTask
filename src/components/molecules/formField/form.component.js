import React, {useState} from 'react';
import {View} from 'react-native';
import {TextInputComponent, TextComponent} from '../../atoms';
import styles from './formField-styles';

const FormFieldComponent = props => {
  const {
    isPassword,
    key,
    ref,
    keyboardenabled,
    onFocus,
    onBlur,
    prefixVal,
    label,
    maxlength,
    numberonly,
    value,
    onChangeText,
    editable,
    setValue,
    keyboardType,
    returnKeyType,
    autoFocus,
  } = props;
  const [isShowPass, setIsShowPass] = useState(false);
  const [isFocused, setFocus] = useState(false);
  const handleFocus = id => {
    setFocus(true);
    if (onFocus) {
      onFocus(id);
    }
  };
  const handleBlur = () => {
    setFocus(false);
    if (onBlur) {
      onBlur();
    }
  };

  return (
    <>
      <View style={styles.container}>
        <TextComponent style={styles.preFixText}>{prefixVal}</TextComponent>
        <View style={{...styles.inputContainer, backgroundColor: '#ECF0FC'}}>
          <View
            style={{
              width: '100%',
              backgroundColor: '#35373B',
              borderWidth: 1,
              borderColor: '#35373B',
            }}>
            <TextInputComponent
              key={key}
              ref={ref}
              keyboardenabled={keyboardenabled}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChangeText={onChangeText}
              maxLength={maxlength}
              label={label}
              numberonly={numberonly}
              isPassword={isPassword}
              value={value}
              editable={editable}
              setValue={setValue}
              keyboardType={keyboardType}
              returnKeyType={returnKeyType}
              autoFocus={autoFocus}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default FormFieldComponent;
