// Import libraries
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// Make a component
const Button = ({onPress, children}) => {
	const { buttonStyle, textStyle } = styles;
	return (
		<TouchableOpacity onPress={onPress} style={buttonStyle}>
			<Text style={textStyle}>{children}</Text>
		</TouchableOpacity>
	);
};

const styles = {
	buttonStyle: {
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		flex: 1,
		marginLeft: 5,
		marginRight: 5
	},
	textStyle: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
	}
};

// Make the component available to other parts of the app
export default Button;
