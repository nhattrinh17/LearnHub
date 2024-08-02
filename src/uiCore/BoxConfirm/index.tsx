import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native';
import { styles } from './styles';

export function BoxConfirm(props: any): JSX.Element {
  const { title, content, textConfirm, underlayColor, handleCancel, handleConfirm } = props;

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{content}</Text>
        <View style={styles.bottom}>
          <TouchableHighlight onPress={handleCancel} underlayColor={underlayColor || '#f0f8ff2e'}>
            <Text style={styles.textCancel}>Hủy</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={handleConfirm} underlayColor={underlayColor || '#f0f8ff2e'}>
            <Text style={styles.textConfirm}>{textConfirm}</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}

BoxConfirm.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  textConfirm: PropTypes.string.isRequired,
  underlayColor: PropTypes.string,
  handleCancel: PropTypes.func.isRequired,
  handleConfirm: PropTypes.func.isRequired,
};
