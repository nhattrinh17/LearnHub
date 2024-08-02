import { StyleSheet } from 'react-native';
import { colorOptions } from '~/constants';

export const stylesLogin = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 12,
    paddingBottom: 20,
  },
  boxLogin: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  textForgetPassword: {
    color: colorOptions.primaryColor,
    fontWeight: '500',
    textAlign: 'center',
  },
});
