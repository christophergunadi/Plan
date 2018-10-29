import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const Input = ({ value, onChangeText, placeholder, secureTextEntry }) => {
  return (
    <TextInput
      autoCorrect={false}
      autoCapitalize="none"
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
    height: 50,
		width: 300,
		borderWidth: 2,
		borderColor: '#CDC6C6',
		borderBottomLeftRadius: 8,
	  borderBottomRightRadius: 8,
	  borderTopLeftRadius: 8,
	  borderTopRightRadius: 8,
		padding: 5,
    margin: 5,
    justifyContent: "center",
  }
})

export { Input };
