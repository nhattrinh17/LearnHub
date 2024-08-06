import { Text, View } from 'react-native';
import { useAppSelector } from '~/redux/utilRedux';
import { NavigationProp } from '~/types';
import { detailDocStyle } from '../styles/detailDocumentStyle';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { Image } from 'react-native';
import { UiButton } from '~/uiCore';
import { colorOptions } from '~/constants';
import Pdf from 'react-native-pdf';
import { PaymentRequest, GooglePayButton, GooglePayButtonConstants } from '@google/react-native-make-payment';

export function DetailDocument({ navigation, route }: { route: any; navigation: NavigationProp }): JSX.Element {
  const { id } = route.params;
  const { document } = useAppSelector(state => state.document);
  const documentById = document.find(i => i.id == id);

  const paymentDetails = {
    total: {
      amount: {
        currency: 'USD',
        value: '14.95',
      },
    },
  };

  const googlePayRequest = {
    // Google Pay API JSON request object, see:
    // https://developers.google.com/pay/api/android/reference/request-objects
  };

  const paymentMethods = [
    {
      supportedMethods: 'google_pay',
      data: googlePayRequest,
    },
  ];

  const paymentRequest = new PaymentRequest(paymentMethods, paymentDetails);

  paymentRequest.canMakePayment().then(canMakePayment => {
    if (canMakePayment) {
      paymentRequest.show().then(response => {
        // Handle PSP response
      });
    } else {
      // Google Pay unavailable
    }
  });

  return (
    <View style={detailDocStyle.wrapper}>
      <View style={detailDocStyle.header}>
        <SimpleLineIcons name="arrow-left" size={20} onPress={() => navigation.goBack()} />
        <SimpleLineIcons name="share" size={20} />
      </View>
      <View style={detailDocStyle.boxContent}>
        <View style={detailDocStyle.imageLayer}>
          <Image
            source={{
              uri: documentById?.image,
            }}
            style={detailDocStyle.image}
          />
        </View>

        <Text style={detailDocStyle.name}>{documentById?.name}</Text>
        <Text style={detailDocStyle.author}>{documentById?.author}</Text>

        <View style={detailDocStyle.boxRateAnhBuy}>
          <View style={detailDocStyle.boxRateAnhBuyItem}>
            <Text style={detailDocStyle.stars}>{documentById?.stars}</Text>
            <Text style={detailDocStyle.boxRateAnhBuyDesc}>Đánh giá</Text>
          </View>
          <View style={detailDocStyle.boxRateAnhBuyItem}>
            <Text style={detailDocStyle.stars}>{documentById?.price}$</Text>
            <Text style={detailDocStyle.boxRateAnhBuyDesc}>Giá</Text>
          </View>
          <UiButton handlePerss={() => navigation.push('PaymentScreen')} marginHorizontal={0} marginVertical={0} content="Thanh toán" backgroundColor={colorOptions.primaryColor} width={100} height={35} paddingVertical={2} />
        </View>
      </View>

      <View style={detailDocStyle.pdfWrapper}>
        <Pdf
          trustAllCerts={false}
          source={{
            uri: documentById?.link,
            cache: true,
          }}
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`Number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`Current page: ${page}`);
          }}
          onError={error => {
            console.log(error);
          }}
          onPressLink={uri => {
            console.log(`Link pressed: ${uri}`);
          }}
          style={detailDocStyle.pdf}
        />
      </View>
    </View>
  );
}
