import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import {fontFamily} from '../../../constants/uiConstants/fontFamilyConstants';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function BottomAlert({
  children,
  closeIcon,
  isVisible = false,
  onClose,
  title,
  onHideFirst,
}) {
  let [bottomAlert, showBottomAlert] = useState(isVisible);
  useEffect(() => {
    showBottomAlert(isVisible);
  }, [isVisible]);
  return (
    <Modal
      animationType={'slide'}
      onModalHide={() => {
        onHideFirst;
      }}
      backButtonClose={true}
      style={styles.container}
      transparent={true}
      isVisible={bottomAlert}
      onBackdropPress={onClose}
      onRequestClose={onClose}
      backdropOpacity={0.3}>
      <View style={styles.modalBody}>
        <View style={styles.modalHeader}>
          <Text style={styles.modalHeaderText}>{title}</Text>

          <TouchableOpacity onPress={onClose}>
            {closeIcon && (
              <AntDesign
                name="close"
                size={24}
                color="#878787"
                style={{marginRight: 15}}></AntDesign>
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.modalContent}>{children}</View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalBody: {
    height: 'auto',
    backgroundColor: '#27292D',
    paddingHorizontal: 5,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderWidth: 1,
    borderColor: '#969696',
  },
  modalHeader: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 18,
    borderColor: '#e0e0e0',
  },
  modalHeaderText: {
    fontFamily: fontFamily?.InterThin,
    fontSize: 16,
    marginLeft: 15,
    fontWeight: '500',
    color: '#333333',
  },
  modalContent: {
    paddingVertical: 10,
  },
});
