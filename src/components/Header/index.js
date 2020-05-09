import React from 'react';
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  Image,
  Alert,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import colors from '../../utils/colors';
import styles from './styles';
import i18n from '../../utils/translation/i18n';
import * as fonts from '../../utils/fontSize';
import { getAdjustedFontSize } from '../../utils/responsive';
import AsyncStorage from '@react-native-community/async-storage';

const screenHeight = Math.round(Dimensions.get('window').height);

onPress = () => {
                  AsyncStorage.removeItem('AUTH_TOKEN')
                  props.navigation.navigate('LoginScreen')
                  props.handleMenu(false)
                }


onSubmit = () => {
  Alert.alert(
 'Do you want to logout?',
 '',
 [

   {
     text: 'Cancel',
     onPress: () => console.log('Cancel Pressed'),
     style: 'cancel',
   },
   {text: 'OK', onPress: () => this.onPress()},
 ],
 {cancelable: false},
);
}


const CompanyHeader = (props) => {
  return (
    <View style={styles.headerContainer}>
      <StatusBar backgroundColor='transparent' translucent/>

      <SafeAreaView style={styles.safeView}>
        <View style={styles.mainContainer}>
          <View style={styles.viewRow}>
{/*sidebarIcon*/}

            <TouchableOpacity
              style={styles.leftArrow}
              activeOpacity={0.8}
              onPress={()=> this.onSubmit()}
            >

            </TouchableOpacity>
{/*searchbar*/}
            <View style={{width:'70%',height:40,flexDirection: 'row', paddingHorizontal:10,borderRadius:20, overflow:'hidden', backgroundColor:'#F2F2F2'}}>
              <View style={{width: '10%',height: 20,alignSelf: 'center'}}>

              </View>

              <View style={{width:'90%',height:40,}}>
                <TextInput
                  placeholder="Search by location"
                  placeholderStyle={{fontSize: getAdjustedFontSize(fonts.f16),fontWeight: 'bold',color: colors.placeholderColor}}
                  placeholderTextColor={colors.placeholderColor}
                  style={{width:'100%',height:40,paddingLeft:10}}
                  value={props.value}

                />
              </View>
            </View>
{/*notification*/}
            <View style={{width: 50,flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              style={styles.leftArrow}
              activeOpacity={0.8}
              onPress={()=> alert('clicked')}
            >

            </TouchableOpacity>
            <TouchableOpacity
              style={styles.leftArrow}
              activeOpacity={0.8}
              onPress={()=> alert('clicked')}
            >

            </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}

//Make Component Available OutSide
export default CompanyHeader;
