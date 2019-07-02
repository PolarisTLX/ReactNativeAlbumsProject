// import React from 'react';
// import { View , Text } from 'react-native';

// const AlbumDetail = (props) => {
//   return (
//     <View>                              <-------This is changed
//       <Text>{props.album.title}</Text>
//     </View>                             <-------This is changed
//   )
// };

// export default AlbumDetail;


    
// in this case we are passing this AlbumDetail to the Card component:
// To pass a component another component:

// import React from 'react';
// import { View , Text } from 'react-native';
// import Card from './Card';

// const AlbumDetail = (props) => {
//   /* here we will pass any element between <Card></Card> to the Card component, they are available as {props.children} */
//   return (
//     <Card>
//       <Text>{props.album.title}</Text>
//     </Card>
//   );
//   // <Text>{props.album.title}</Text>   <---- we further wrap this below
// };

// export default AlbumDetail;



// And even further/deeper:
import React from 'react';
import { View , Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
  /* here we will pass any element between <Card></Card> to the Card component, they are available as {props.children} */
  return (
    <Card>
      <CardSection>
        <Text>{props.album.title}</Text>
      </CardSection>
    </Card>
  );
};

export default AlbumDetail;
