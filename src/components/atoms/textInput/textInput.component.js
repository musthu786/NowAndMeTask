/**
 * TextInput component as an atom...
 *
 */
import React from 'react';
import {TextInput} from 'react-native';
import styles from './textInput-styles';

// text input component
const TextInputComponent = props => {
  const {
    style,
    value,
    label,
    isPassword,
    onFocus,
    onBlur,
    editable,
    maxLength,
    onChangeText,
    keyboardType,
    numberonly,
    disabled,
    keyboardenabled,
    key,
    ref,
    returnKeyType,
    screen,
    autoFocus,
    ...rest
  } = props;

  return (
    <>
      <TextInput
        key={key}
        ref={ref}
        placeholderStyle={{fontSize: 50, color: 'white'}}
        style={styles.input}
        value={value}
        placeholder={label}
        placeholderTextColor={'white'}
        onChangeText={text => onChangeText && onChangeText(text)}
        onBlur={onBlur}
        keyboardType={keyboardType}
        maxLength={maxLength}
        {...rest}
        autoCorrect={false}
        returnKeyType={returnKeyType}
      />
    </>
  );
};

export default TextInputComponent;
