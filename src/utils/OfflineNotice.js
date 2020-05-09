// import React, { Component } from 'react';
// import { View, Text, Dimensions, StyleSheet } from 'react-native';
// // import NetInfo from "@react-native-community/netinfo";
//
// import colors from '../utils/colors';
// import * as fonts from '../utils/fontSize';
// import { getAdjustedFontSize }  from '../utils/responsive';
//
// const { width } = Dimensions.get('window');
//
// function MiniOfflineSign() {
//   debugger
//   return (
//     <View style={styles.offlineContainer}>
//       <Text style={styles.offlineText}>{'Please check your internet connection.'}</Text>
//     </View>
//   );
// }
//
// export default class OfflineNotice extends Component {
//   state = {
//     isConnected: true
//   };
//
//   // componentDidMount() {
//   //   NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
//   // }
//
//   // componentWillUnmount() {
//   //   NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
//   // }
//
//   handleConnectivityChange = isConnected => {
//     if (isConnected) {
//       this.setState({ isConnected });
//     } else {
//       this.setState({ isConnected });
//     }
//   };
//
//   render() {
//     if (!this.state.isConnected) {
//       return <MiniOfflineSign />;
//     }
//     return null;
//   }
// }
//
// const styles = StyleSheet.create({
//   offlineContainer: {
//     backgroundColor: colors.red,
//     height: 75,
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexDirection: 'row',
//     width: '100%',
//     position: 'absolute',
//     top: 0
//   },
//   offlineText: {
//     color: colors.white,
//     marginTop: 15,
//     fontFamily: 'SegoeUI-SemiBold',
//     fontSize: getAdjustedFontSize(fonts.f16),
//   },
// });
