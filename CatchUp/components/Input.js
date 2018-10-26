import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  return (
    <TextInput
      autoCorrect={false}
      onChangeText={onChangeText}
      placeholder={placeholder}
      style={styles.input}
      secureTextEntry={secureTextEntry}
      value={value}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
		width: 250,
		borderWidth: 1,
		borderColor: '#CDC6C6',
		borderBottomLeftRadius: 8,
	  borderBottomRightRadius: 8,
	  borderTopLeftRadius: 8,
	  borderTopRightRadius: 8,
		padding: 5,
		margin: 5,
  }
})

export { Input };
