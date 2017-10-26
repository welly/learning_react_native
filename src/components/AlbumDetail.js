// Import libraries
import React from 'react';
import { Image, Linking, Text, View } from 'react-native';
import Button from './Button';
import Card from './Card';
import CardItem from './CardItem';

const AlbumDetail = ({ album }) => {
  const { title, field_artist, field_artist_image, field_album_image, field_link } = album;
  const { 
    headerContentStyle, 
    headerTextStyle,
    imageStyle,
    thumbnailStyle, 
    thumbnailContainerStyle 
  } = styles;
  return (
    <Card>
      <CardItem>
        <View style={thumbnailContainerStyle}>
          <Image 
            source={{ uri: field_artist_image }} 
            style={thumbnailStyle}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{field_artist}</Text>
        </View>
      </CardItem>

      <CardItem>
        <Image 
          source={{ uri: field_album_image }} 
          style={imageStyle}
        />
      </CardItem>

      <CardItem>
        <Button onPress={() => Linking.openURL(field_link)}>Buy Now</Button>
      </CardItem>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  imageStyle: {
    flex: 1, 
    height: 300,
    width: null
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  thumbnailStyle: {
    height: 60,
    width: 60
  }
};

export default AlbumDetail;
