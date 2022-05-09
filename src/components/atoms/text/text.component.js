/**
 * Checkbox field as an molecule...
 *
 */
import React from 'react';
import {Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  label: {
    color: '#000',
  },
});

// text component
const TextComponent = props => {
  const {children, style, numberOfLines} = props;

  return (
    <Text numberOfLines={numberOfLines} style={[styles.label, style]}>
      {children}
    </Text>
  );
};

export default TextComponent;
