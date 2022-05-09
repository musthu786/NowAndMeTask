import React, {memo} from 'react';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import styles from './home-styles';
import * as colors from '../../constants/uiConstants/colorConstants';
import {FlatListComponent} from '../../components/atoms';
import {
  HomeComponent,
  CreatePost,
  ListPost,
  BottomAlert,
} from '../../components/molecules';
import {FormContainer, LoginComponent} from '../../components/molecules';
import {TextComponent} from '../../components/atoms';
import {Homedata} from './home-props';
import {loginProps} from '../login/login-props';
const Home = props => {
  const {
    showPopup,
    setShowPopup,
    loader = false,
    handlePopup,
  } = props;
  let DataPost = Homedata({...props});
  let loginFormData = loginProps({...props});
  return (
    <>
      <View style={styles.mainContainer}>
        <StatusBar backgroundColor={colors?.GREY} barStyle="light-content" />

        <HomeComponent
          titleFirst={'Hello jane'}
          titleSecond={`How are you doing today? Would you like to share something with the community 🤗`}
        />

        <CreatePost
          title={'Create post'}
          content={'How are you feeling today'}
          handlePopup={handlePopup}
        />

        <FlatListComponent
          removeClippedSubviews={false}
          persistentScrollbar={true}
          showsVerticalScrollIndicator={true}
          data={DataPost}
          numberOfColumns={1}
          keyExtractor={(item, index) => item?.id}
          renderItem={(item, index) => {
            return (
              <>
                <ListPost item={item} />
              </>
            );
          }}
        />
      </View>

      {showPopup && (
        <BottomAlert
          closeIcon={true}
          onClose={() => setShowPopup(false)}
          title=""
          isVisible={showPopup}>
          <View style={{height: 50}}>
            <LoginComponent
              titleFirst={'WELCOME BACK'}
              titleSecond={'Log into Your Account'}
            />
          </View>
          <View style={{height: null}}>
            <FormContainer
              formFileds={loginFormData}
              styleInput={styles.input}
            />
          </View>

          <TouchableOpacity
            style={{
              height: 30,
              width: '80%',
              backgroundColor: '#4A96FF',
              marginLeft: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white'}}>Login Now</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <TextComponent style={{fontSize: 12, color: 'white'}}>
              Not registered yet? Register
            </TextComponent>
          </TouchableOpacity>
        </BottomAlert>
      )}
    </>
  );
};

export default memo(Home);
