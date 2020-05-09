import React, { Component, } from 'react'
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Linking
 } from 'react-native'

import Header  from '../../components/Header/index';
import styles from './styles';
import colors from '../../utils/colors'
import i18n from '../../utils/translation/i18n';
import { ActionCreators } from '../../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class DashboardScreen extends Component {

  constructor(props){
    super(props)
    this.state={}

  }

  render() {
    return (
      <View style={styles.dashboardContainer}>
          <Text style={{fontWeight: 'bold',fontSize:16, marginBottom:5, textAlign: 'center'}}>Details</Text>
          <FlatList
              contentContainerStyle={{paddingTop:50,paddingBottom: 50, padding:10}}
              data={this.state.responseList}
              extradata={this.state}
              showsVerticalScrollIndicator={false}
              onEndReached={this.apiCall}
              onEndReachedThreshold={0.3}
              renderItem={({item: rowData}) =>{
                return(
                  <View style={{paddingHorizontal:10}}>
                    <View style={{width:'100%', minHeight: 200, paddingVertical:10,marginBottom:20, backgroundColor: '#F0F4F8',}}>
                      <View style={{paddingHorizontal:10,  justifyContent: 'flex-start'}}>
                        <View>
                          <Text style={{fontWeight: 'bold',fontSize:16, marginBottom:5}}>Title: </Text>
                        </View>
                        <View>
                          <Text style={{fontSize:16, marginBottom:5}}>{rowData.title}</Text>
                        </View>
                      </View>

                      <View style={{paddingHorizontal:10, justifyContent: 'flex-start'}}>
                        <View>
                          <Text style={{fontWeight: 'bold',fontSize:16, marginBottom:5}}>URL: </Text>
                        </View>
                        <View>
                          <Text style={{fontSize:16, marginBottom:5}} onPress={() => Linking.openURL(rowData.url)}>{rowData.url}</Text>
                        </View>
                      </View>

                      <View style={{paddingHorizontal:10, justifyContent: 'flex-start'}}>
                        <View>
                          <Text style={{ fontWeight: 'bold',fontSize:16, marginBottom:5}}>Created At: </Text>
                        </View>
                        <View>
                          <Text style={{fontSize:16, marginBottom:5}}>{rowData.created_at}</Text>
                        </View>
                      </View>

                      <View style={{paddingHorizontal:10, justifyContent: 'flex-start'}}>
                        <View>
                          <Text style={{ fontWeight: 'bold',fontSize:16, marginBottom:5}}>Author: </Text>
                        </View>
                        <View>
                          <Text style={{fontSize:16, marginBottom:5}}>{rowData.author}</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                )
              }
            }
              keyExtractor={item => item.id}
          />

      </View>
    )
  }
}

function mapStateToProps(state){
  return {
    data: state.common.data,
    serverError: state.common.serverError,
    list: state.common.list,
    listError: state.common.listError
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(DashboardScreen);
