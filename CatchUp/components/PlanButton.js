import React from 'react';
import PropTypes from 'prop-types';
import {
  View, TouchableOpacity, Image
} from 'react-native';

const PlanButton = (props) => {
  const { hide, style, onPress } = props;
  if (hide) {
    return null;
  }
  return (
      <TouchableOpacity onPress={onPress}>
					<Image 
					  style={style}
					  source={require('./../assets/planButton.png')} 
					/>
			</TouchableOpacity>
  );
};

PlanButton.propTypes = {
  style: View.propTypes.style,
  hide: PropTypes.bool,
};

export default PlanButton;