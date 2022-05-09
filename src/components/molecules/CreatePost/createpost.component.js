import React, {memo} from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './createpost.styles';
import {TextComponent} from '../../atoms';
const CreatePost = ({title, content, handlePopup}) => {
  return (
    <>
      <View style={styles.inputTextContainer}>
        <View
          style={{
            flex: 1,
            height: '100%',
            width: '100%',
            justifyContent: 'center',
          }}>
          <TextComponent style={styles.createPostText}>{title}</TextComponent>
        </View>
        <View
          style={{
            flex: 1,
            height: '100%',
            width: '100%',
            flexDirection: 'row',
          }}>
          <View style={{height: '100%', width: '5%'}}></View>
          <View
            style={{
              height: '100%',
              width: '88%',
              backgroundColor: '#191920',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <View
              style={{
                height: '100%',
                width: '20%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 30,
                  width: 50,
                  borderRadius: 17,
                  backgroundColor: '#27292D',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TextComponent>{`💬`}</TextComponent>
              </View>
            </View>
            <View
              style={{height: '100%', width: '80%', justifyContent: 'center'}}>
              <TextComponent style={styles.postText}>{content}</TextComponent>
            </View>
          </View>
          <View style={{height: '100%', width: '15%'}}></View>
        </View>
        <View
          style={{
            flex: 1,
            height: '100%',
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity
            onPress={handlePopup}
            style={{
              height: 30,
              width: 80,
              backgroundColor: '#4A96FF',
              borderRadius: 4,
              marginTop: 6,
              marginRight: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TextComponent style={styles.submitText}>Post</TextComponent>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default memo(CreatePost);
