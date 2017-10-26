// Import libraries
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => {
	const { textStyle, viewStyle } = styles;
	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		alignItems: 'center',
		backgroundColor: '#f8f8f8',
		elevation: 4,
		height: 60,
		justifyContent: 'center',
		paddingTop: 15,
		position: 'relative'
	},
	textStyle: {
		fontSize: 20
	}
};

// Make the component available to other parts of the app
export default Header;
