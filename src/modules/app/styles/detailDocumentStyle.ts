import { Dimensions, StyleSheet } from 'react-native';
import { fontSizesCustoms } from '~/constants';

export const detailDocStyle = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
    overflow: 'scroll',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  boxContent: {
    alignItems: 'center',
    paddingVertical: 12,
  },
  imageLayer: {
    width: '35%',
    paddingTop: '50%',
    position: 'relative',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: 'cover',
    borderRadius: 12,
  },
  name: {
    fontSize: fontSizesCustoms.h3,
    color: 'black',
    paddingTop: 10,
    fontWeight: '600',
  },
  author: {
    fontSize: fontSizesCustoms.h5,
    color: 'gray',
    marginBottom: 4,
  },
  boxRateAnhBuy: {
    marginVertical: 12,
    width: '90%',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boxRateAnhBuyItem: {
    alignItems: 'center',
  },
  stars: {
    color: '#ffcb2e',
    fontWeight: 'bold',
  },
  boxRateAnhBuyDesc: {
    fontSize: fontSizesCustoms.h6,
    color: '#ccc',
  },
  pdfWrapper: {
    flex: 1,
    paddingHorizontal: 16,
    height: 10000,
  },
  pdf: {
    width: '100%',
    height: Dimensions.get('screen').height,
    // height: Dimensions.get('screen').height,
  },
});
