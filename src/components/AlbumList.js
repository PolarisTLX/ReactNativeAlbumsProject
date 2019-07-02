import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {

  componentWillMount() {
    console.log('Where does log come from in React Native?!?');    
  }

  render() {
    return (
      <View>
        <Text>Album List!!!</Text>
      </View>
    );
  }
}

export default AlbumList;
