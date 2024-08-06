import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'white',
    flexDirection: 'row',
    alignContent: 'center',
  },
  textButton: {
    fontSize: 14,
    fontWeight: '500',
    color: 'white',
    flex: 1,
    textAlign: 'center',
  },
  iconButton: {
    color: 'white',
  },
});

export default styles;
