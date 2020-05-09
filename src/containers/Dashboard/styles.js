import {
  StyleSheet ,
  Dimensions,
} from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import * as fonts from '../../utils/fontSize';
import colors from '../../utils/colors';
import { getAdjustedFontSize } from '../../utils/responsive';

export default StyleSheet.create({
  dashboardContainer:{
    flex: 1,
    marginTop:50,
    marginBottom:50,
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF'
  }
});
