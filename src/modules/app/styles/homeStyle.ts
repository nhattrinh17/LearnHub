import { StyleSheet } from 'react-native';
import { fontSizesCustoms } from '~/constants';

export const styleHome = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: fontSizesCustoms.h3,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 10,
    textAlign: 'center',
  },
  boxSearchAndSort: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  wrapperDocument: {
    paddingVertical: 12,
  },
});
