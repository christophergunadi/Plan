import React from 'react';
import PropTypes from 'prop-types';
import {
  View, TouchableOpacity, Text
} from 'react-native';

const NavButton = (props) => {
  const { hide, style, onPress, text } = props;
  if (hide) {
    return null;
  }
  return (
      <TouchableOpacity style={style} onPress={onPress}>
					<Text>{text}</Text>
			</TouchableOpacity>
  );
};

NavButton.propTypes = {
  style: View.propTypes.style,
  hide: PropTypes.bool,
};

export default NavButton;