import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, Image, Text } from 'react-native';
import { useState } from 'react';
import { StyleSheet } from 'react-native';

export function BlockInputStyleOne(params: any): JSX.Element {
  const { iconName, sourceImage, label, width, placeholder, borderColor, borderRadius, backgroundColor, styleIcon, type, iconColor, onBlur, textWarning, value, onChange, onClickIcon, marginBottom } = params;

  const styles = StyleSheet.create({
    blockInput: {
      position: 'relative',
      marginBottom: marginBottom !== undefined ? marginBottom : 12,
      zIndex: 100,
    },

    inputLogin: {
      backgroundColor: backgroundColor || 'transparent',
      borderWidth: 1,
      borderRadius: borderRadius || 12,
      borderColor: borderColor || '#CCC9C9',
      color: '#000',
      width: width || 300,
      fontSize: 14,
      paddingHorizontal: 17,
      paddingVertical: 8,
      alignContent: 'center',
    },

    iconInput: {
      position: 'absolute',
      right: 20,
      top: 12,
    },

    iconButton: {
      color: 'white',
    },

    textWarning: {
      color: 'red',
      marginTop: 4,
    },
  });

  const [warning, setTextWarning] = useState('');

  return (
    <View style={styles.blockInput}>
      {label && <Text>{label}</Text>}
      <TextInput
        style={styles.inputLogin}
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={'#CCC9C9'}
        secureTextEntry={type === 'password' ? true : false}
        //Validate data input
        onBlur={() => {
          if (onBlur) {
            const checkData = onBlur(value);
            checkData ? setTextWarning('') : setTextWarning(textWarning);
          }
        }}
      />

      {warning && <Text style={styles.textWarning}>{warning}</Text>}
    </View>
  );
}

BlockInputStyleOne.propTypes = {
  sourceImage: PropTypes.number,
  label: PropTypes.string,
  width: PropTypes.any,
  borderRadius: PropTypes.number,
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  styleIcon: PropTypes.string,
  iconColor: PropTypes.string,
  placeholder: PropTypes.string,
  keyboardType: PropTypes.string,
  type: PropTypes.string,
  onBlur: PropTypes.func,
  textWarning: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  onClickIcon: PropTypes.func,
  iconName: PropTypes.string,
  marginBottom: PropTypes.number,
};
