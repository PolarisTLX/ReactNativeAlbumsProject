import React from 'react';
import { View, Text } from 'react-native';

// const AlbumDetail = (props) => {
  //   return (
    //     <View>                              <-------This is changed
    //       <Text>{props.album.title}</Text>
    //     </View>                             <-------This is changed
    //   )
    // };

// To pass a component another component:
// in this case we are passing this AlbumDetail to the Card component:
import Card from './Card';

const AlbumDetail = (props) => {
  return (
    <Card>
      {/* here we will pass any element between <Card></Card> to the Card component, they are available as {props.children} */}
      <Text>{props.album.title}</Text>
    </Card>
  )
};

export default AlbumDetail;