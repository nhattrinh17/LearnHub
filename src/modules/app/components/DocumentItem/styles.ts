import { StyleSheet } from 'react-native';
import { fontSizesCustoms } from '~/constants';

export const styleDocument = StyleSheet.create({
  wrapper: {
    paddingVertical: 6,
  },
  container: {
    flexDirection: 'row',
    gap: 12,
  },
  body: {
    flex: 1,
  },
  image: {
    width: '30%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 14,
  },
  title: {
    fontSize: fontSizesCustoms.h4,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  author: {
    fontSize: fontSizesCustoms.h6,
    color: 'gray',
    marginBottom: 4,
  },
  boxStar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  iconStar: {
    color: '#ffcb2e',
  },
  description: {
    fontSize: fontSizesCustoms.h5,
  },
});
