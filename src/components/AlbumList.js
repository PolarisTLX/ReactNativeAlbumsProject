import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {

  componentWillMount() {
    state = { albums: [] };

    // Debuggin React Native Projects:  
    // 'CTRL+M then Remote JS Debugging, should open Chrome Browser, then in the console like usual, will see all Console Logs    

    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      // .then(response => console.log(response));
      .then(response => this.setState({ albums: response.data }));  
      
    // Axios VS Fetch:
    // https://medium.com/@thejasonfile/fetch-vs-axios-js-for-making-http-requests-2b261cdd3af5

    // // fetch(url).then(response => response.json()).then(data => console.log(data));
    // fetch('https://rallycoding.herokuapp.com/api/music_albums')
    //   .then(response => response.json())
    //   // // .then(data => console.log(data));
    //   .then(data => this.setState({ albums: data }));
  }

  renderAlbums() {
    // IMPORTANT NOTE:    "if (this.state != null)"  is needed to prevent crash!
    if (this.state != null) {
      return this.state.albums.map(album => <Text>{album.title}</Text>);
    }
  }

  render() {
    console.log(this.state);   //to see how "setState() calls the render method to fire again (selectively)" 

    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
