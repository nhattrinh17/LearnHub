import { StyleSheet } from 'react-native';
import { colorOptions, colorText, fontSizesCustoms } from '~/constants';

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
  textNavigate: {
    color: colorOptions.primaryColor,
    textAlign: 'center',
    fontSize: fontSizesCustoms.h4,
    fontWeight: '500',
  },
  textForgetPassword: {
    color: colorText.disabledText,
    fontSize: fontSizesCustoms.h6,
    fontWeight: '500',
    textAlign: 'center',
  },
});
