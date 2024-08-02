import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'white',
    marginHorizontal: 2,
    marginVertical: 12,
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: 20,
    marginBottom: 12,
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
