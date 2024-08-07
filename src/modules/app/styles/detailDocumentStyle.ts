import { Dimensions, StyleSheet } from 'react-native';
import { fontSizesCustoms } from '~/constants';

export const detailDocStyle = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
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
    paddingHorizontal: 8,
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
    // paddingHorizontal: 8,
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').height * 0.8,
  },
  pdf: {
    width: '100%',
    height: '100%',
  },
  description: {
    color: 'black',
  },
  googlepaybutton: {
    width: 180,
    height: 40,
    fontSize: fontSizesCustoms.h6,
  },
});
