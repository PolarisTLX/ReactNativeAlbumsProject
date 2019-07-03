import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

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
      return this.state.albums.map(album => 
        // <Text key={album.title}>{album.title}</Text>
        <AlbumDetail key={album.title} album={album} />
      );
    }
  }

  render() {
    console.log(this.state);   //to see how "setState() calls the render method to fire again (selectively)" 

    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
