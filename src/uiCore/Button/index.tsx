import PropTypes from 'prop-types';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './style';

export function UiButton(props: any): JSX.Element {
  const { content, width, height, borderColor, borderRadius, backgroundColor, handlePerss, textColor, disableButton, paddingHorizontal, paddingVertical } = props;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          width: width || 'auto',
          paddingHorizontal: paddingHorizontal || 8,
          paddingVertical: paddingVertical || 12,
          height: height,
          backgroundColor: disableButton ? '#f5f5f5' : backgroundColor || styles.button.backgroundColor,
          borderColor: borderColor || styles.button.borderColor,
          borderRadius: borderRadius || styles.button.borderRadius,
        },
      ]}
      onPress={handlePerss}>
      <Text style={[styles.textButton, { color: disableButton ? '#bfbfbf' : textColor || styles.textButton.color }]}>{content}</Text>
    </TouchableOpacity>
  );
}

UiButton.propTypes = {
  content: PropTypes.string.isRequired,
  iconName: PropTypes.string,
  width: PropTypes.any,
  height: PropTypes.number,
  borderRadius: PropTypes.number,
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  handlePerss: PropTypes.func,
  textColor: PropTypes.string,
  disableButton: PropTypes.bool,
  paddingVertical: PropTypes.number,
  paddingHorizontal: PropTypes.number,
};
