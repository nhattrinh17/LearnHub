import { StyleSheet } from 'react-native';
import { getStateRedux } from '@redux/utilRedux';
import { colorText, fontSizesCustoms } from '~/constants';
const { mood } = getStateRedux().settingApp;

export const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: mood == 'light' ? '#ccc' : '#24252696',
  },
  container: {
    marginTop: 'auto',
    marginBottom: 'auto',
    backgroundColor: mood == 'light' ? '#fff' : '#303031',
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 16,
  },
  title: {
    fontSize: fontSizesCustoms.h2,
    color: mood == 'light' ? '#000' : '#fff',
    fontWeight: '500',
    marginBottom: 20,
  },
  content: {
    fontSize: fontSizesCustoms.h4,
    color: colorText.secondaryText,
    lineHeight: 20,
    marginBottom: 12,
  },
  bottom: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'space-between',
  },
  textCancel: {
    fontSize: fontSizesCustoms.h4,
    textTransform: 'uppercase',
    color: colorText.primaryColor,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  textConfirm: {
    fontSize: fontSizesCustoms.h4,
    color: colorText.confirmColor,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
});
