// Import libraries
import React, { Component } from 'react';
import { RefreshControl, ScrollView, View, Text } from 'react-native';
import Axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

	state = {
    albums: [],
    refreshing: false,
    debugText: 'Nothing',
  };

	componentWillMount() {
		Axios.get('https://e70d9d1b.ngrok.io/api/albums')
		.then(response => this.setState({ albums: response.data }))
    .catch(function (error) {
      console.log(error);
    });
	}

  _onRefresh() {
    this.setState({
      refreshing: true,
      debugText: 'Executed onRefresh'
    });
    var parentThis = this;
    console.log('test');
    Axios.get('https://e70d9d1b.ngrok.io/api/albums')
    .then(function (response) {
      parentThis.setState({
        albums: response.data,
        debugText: 'Getting data',
      })
    })
    .catch(function (error) {
      console.log(error);
    });
    this.setState({
      refreshing: false,
      debugText: 'Finished onRefresh'
    });
  }

  renderAlbums() {
    return this.state.albums.map(album => 
      <AlbumDetail key={album.title} album={album} />
    );
  }

	render() {
		const { scrollViewStyle, textStyle } = styles;
		return (
      <View>
  			<ScrollView 
          style={scrollViewStyle}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
            />}>
  				{this.renderAlbums()}
  			</ScrollView>
      </View>
		);
	}
};

const styles = {
	scrollViewStyle: {
		marginBottom: 10
	},
};

export default AlbumList;
