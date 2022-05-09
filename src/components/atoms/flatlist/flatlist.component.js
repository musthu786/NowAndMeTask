/**
 * Flatlist component as an atom...
 *
 */
import React from 'react';
import {FlatList} from 'react-native';

const FlatListComponent = props => (
  <FlatList
    {...props}
    initialNumToRender={10}
    bounces={false}
    pagingEnabled={false}
    keyboardShouldPersistTaps="handled"
    onEndReachedThreshold={0.5}
    persistentScrollbar={true}
  />
);

export default FlatListComponent;
