import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';
import {AbuAbu, AbuTua, Black, Blue, HItamMuda, White} from '../utils/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ComponenContact = () => {
  return (
    <View style={styles.Container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Black} />
      <View style={styles.Content}>
        <View style={styles.HeaderView}>
          <Text style={styles.TxtHeader}>Groups</Text>
          <TouchableOpacity>
            <Icon name="plus" size={32} color={Blue} />
          </TouchableOpacity>
        </View>
        <View style={styles.HeaderContent}>
          <Text style={styles.TxtHeader2}>Contacts</Text>
        </View>
        <View style={styles.SearchBox}>
          <Image
            source={require('../assets/icons/Search.png')}
            style={styles.Image}
          />
          <TextInput
            placeholder="Search"
            placeholderTextColor={AbuAbu}
            style={styles.TxtInput}
            returnKeyType="search"
            keyboardAppearance="dark"
            onChangeText={(_text: string) => {}}
          />
        </View>
        <View style={styles.ImageProfile}>
          <Image
            source={require('../assets/image/Model2.png')}
            style={styles.Model}
          />
          <View style={styles.ContentModel}>
            <Text style={styles.txtModel}>RAfi Zimraan Arjuna W</Text>
            <Text style={styles.txtModel2}>My Profile</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ComponenContact;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Black,
  },
  Txt: {
    color: White,
  },
  Content: {
    height: 170,
    backgroundColor: HItamMuda,
  },
  HeaderView: {
    height: 44,
    marginLeft: 16,
    marginTop: 14,
    marginRight: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  TxtHeader: {
    color: Blue,
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    letterSpacing: -0.41,
    lineHeight: 22,
  },
  HeaderContent: {
    height: 40,
    marginTop: 12,
    marginLeft: 16,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  TxtHeader2: {
    top: 6,
    color: White,
    fontFamily: 'Poppins-Medium',
    fontSize: 34,
    letterSpacing: -0.41,
    lineHeight: 41,
  },
  SearchBox: {
    marginTop: 12,
    height: 37,
    marginLeft: 16,
    marginRight: 16,
    borderRadius: 10,
    flexDirection: 'row',
    alignItmes: 'center',
    justifyContent: 'flex-start',
    backgroundColor: AbuTua,
  },
  Image: {
    top: 8,
    height: 20,
    width: 17,
    marginLeft: 7,
    marginRight: 7,
  },
  TxtInput: {
    letterSpacing: -1.23,
    fontSize: 16,
    marginTop: -4,
    color: White,
  },
  ImageProfile: {
    height: 80,
    flexDirection: 'row',
  },
  Model: {
    borderRadius: 55,
    marginTop: 17,
    marginLeft: 10,
    marginBottom: 10,
    height: 100,
    width: 100,
  },
  ContentModel: {
    marginLeft: 16,
    alignItems: 'flex-start',
    justifyContent: 'center',
    top: 20,
  },
  txtModel: {
    color: White,
    fontFamily: 'Poppins-Medium',
    letterSpacing: 0.38,
    fontSize: 20,
  },
  txtModel2: {
    color: AbuAbu,
    fontFamily: 'Poppins-Medium',
    letterSpacing: 0.38,
    lineHeight: 18,
    fontSize: 14,
  },
});