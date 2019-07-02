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
// import React from 'react';
// import { View , Text } from 'react-native';
// import Card from './Card';
// import CardSection from './CardSection';

// const AlbumDetail = (props) => {
//   /* here we will pass any element between <Card></Card> to the Card component, they are available as {props.children} */
//   return (
//     <Card>
//       <CardSection>
//         <Text>{props.album.title}</Text>
//       </CardSection>
//     </Card>
//   );
// };

// export default AlbumDetail;


// lining up elements/components side-by-side in react native 
// with separating in different View containers and flexDirection: 'row':
import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

// NOTE: to clean up the length of the props.album....
// see video 4 from folder 8 at 3:00 min


const AlbumDetail = (props) => {
  /* here we will pass any element between <Card></Card> to the Card component, they are available as {props.children} */
  return (
    <Card>
      <CardSection>
        <View>
          <Image           
            source={{ uri: props.album.thumbnail_image }} 
            style={styles.albumThumbnailStyle}
          />
        </View>
        <View style={styles.headerContentStyle}>
          <Text>{props.album.title}</Text>
          <Text>{props.album.artist}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  albumThumbnailStyle: {
    height: 50,
    width: 50
  }
}

export default AlbumDetail;
