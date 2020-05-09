import {
  StyleSheet,
  Dimensions,
} from 'react-native';

import * as fonts from '../../utils/fontSize';
import colors from '../../utils/colors';
import { getAdjustedFontSize } from '../../utils/responsive';

const screenWidth = Math.round(Dimensions.get('window').width);

export default StyleSheet.create({
  headerContainer:{
    height:  100,
    backgroundColor: '#FFFFFF'
  },
  safeView:{
    height: '100%',
    width: '100%',
  },
  mainContainer:{
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end'
  },
  viewRow:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    padding: 10,
  },
  leftArrow:{
    height: 20,
    width: 20,
  },
  imageStyles:{
    height: '100%',
    width: '100%',
    resizeMode: 'contain'
  },
  textStyle:{
    fontSize: getAdjustedFontSize(fonts.f16),
    fontWeight: 'bold',
    color: colors.placeholderColor,
    // fontFamily: 'SegoeUI'
  },
})
