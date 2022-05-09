import React, {memo} from 'react';
import {View, Image} from 'react-native';
import styles from './listPost.styles';
import defaultImg from '../../../../assets/images/Photo.jpeg';
import {TextComponent} from '../../atoms';
const ListPost = ({item}) => {
  console.log(item, 'flatlist items');
  return (
    <>
      <View style={styles.inputTextContainer}>
        <View
          style={{
            flex: 1,
            height: '100%',
            width: '100%',
            flexDirection: 'row',
          }}>
          <View
            style={{
              height: '100%',
              width: '20%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              //   source={defaultImg}
              source={{uri: item?.item?.ImageUrl}}
              style={{
                height: 40,
                width: 40,
                resizeMode: 'contain',
                borderRadius: 20,
              }}
            />
          </View>

          <View
            style={{height: '100%', width: '40%', justifyContent: 'center'}}>
            <TextComponent style={styles.NameText}>
              {item?.item?.name}
            </TextComponent>
            <TextComponent style={styles.TimeText}>
              {item?.item?.time}
            </TextComponent>
          </View>
          <View
            style={{
              height: '100%',
              width: '40%',
              justifyContent: 'flex-start',
              alignItems: 'flex-end',
            }}>
            <TextComponent
              style={{
                color: 'white',
                FontSize: 40,
                marginRight: 30,
                marginTop: 10,
              }}>
              ...
            </TextComponent>
          </View>
        </View>
        <View
          style={{
            flex: 3,
            height: '100%',
            width: '100%',
            flexDirection: 'row',
          }}>
          <View style={{height: '100%', width: '5%'}} />
          <View
            style={{
              height: '100%',
              width: '90%',
              backgroundColor: '#191920',
              borderRadius: 8,
              flexDirection: 'row',
            }}>
            <View style={{flex: 1.5}}>
              <View
                style={{
                  height: '100%',
                  width: '100%',
                  flexDirection: 'row',
                  marginTop: 20,
                  marginLeft: 20,
                }}>
                <TextComponent>{item?.item?.emoji}</TextComponent>
              </View>
            </View>
            <View style={{flex: 8.5}}>
              <TextComponent style={styles.postTextMain}>
                {' '}
                {item?.item?.content}
              </TextComponent>
            </View>
          </View>
          <View style={{height: '100%', width: '5%'}} />
        </View>
        <View
          style={{
            flex: 1,
            height: '100%',
            width: '100%',
          }}>
          <View
            style={{
              height: '100%',
              width: '100%',
              flexDirection: 'row',
              marginTop: 10,
              marginLeft: 20,
            }}>
            <TextComponent>{`💬`}</TextComponent>
            <TextComponent style={styles.postText}>
              {item?.item?.commnets}
            </TextComponent>
          </View>
        </View>
      </View>
    </>
  );
};

export default memo(ListPost);
