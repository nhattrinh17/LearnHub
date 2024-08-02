import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export function BlockInputStyleTwo(params: any) {
  const { placeholder, fontSize, color, marginBottom, width, onChange, value, type, line, backgroundColor } = params;

  const [showPass, setShowPass] = useState(false);

  const styles = StyleSheet.create({
    wrapper: {
      marginBottom: marginBottom !== undefined ? marginBottom : 8,
      paddingHorizontal: 8,
      zIndex: 100,
    },

    blockInput: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    inputLogin: {
      borderWidth: 0,
      color: color || '#000',
      fontSize: fontSize || 14,
      paddingVertical: 6,
      alignContent: 'center',
      flex: 1,
    },

    line: {
      backgroundColor: backgroundColor || '#000',
      height: 1,
      width: width || '100%',
    },

    iconEye: {
      // paddingRight: 20,
      marginRight: 10,
    },
  });
  return (
    <View style={styles.wrapper}>
      <View style={styles.blockInput}>
        <TextInput
          style={styles.inputLogin}
          //
          onChangeText={onChange}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={'#CCC9C9'}
          secureTextEntry={type === 'password' && !showPass}
        />
        {type === 'password' && <Icon onPress={() => setShowPass(pre => !pre)} style={styles.iconEye} name={showPass ? 'eye' : 'eye-slash'} size={20} color={'#CCC9C9'} />}
      </View>
      {line && <View style={styles.line}></View>}
    </View>
  );
}

BlockInputStyleTwo.propTypes = {
  placeholder: PropTypes.string,
  fontSize: PropTypes.number,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  marginBottom: PropTypes.number,
  width: PropTypes.number,
  onChange: PropTypes.func,
  value: PropTypes.string,
  type: PropTypes.string,
  line: PropTypes.bool,
};
