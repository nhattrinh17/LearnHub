import { Alert, Dimensions, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useAppSelector } from '~/redux/utilRedux';
import { NavigationProp } from '~/types';
import { detailDocStyle } from '../styles/detailDocumentStyle';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { Image } from 'react-native';
import { UiButton } from '~/uiCore';
import Pdf from 'react-native-pdf';
import { PaymentRequest, GooglePayButton, GooglePayButtonConstants } from '@google/react-native-make-payment';
import { useState } from 'react';

export function DetailDocument({ navigation, route }: { route: any; navigation: NavigationProp }): JSX.Element {
  const { id } = route.params;
  const { document } = useAppSelector(state => state.document);
  const documentById = document.find(i => i.id == id);
  const [scroll, setScroll] = useState(true);

  const googlePayRequest = {
    // Google Pay API JSON request object, see:
    // https://developers.google.com/pay/api/android/reference/request-objects
    environment: 'TEST', // hoặc 'PRODUCTION'
    apiVersion: 2,
    apiVersionMinor: 0,
    merchantInfo: {
      merchantName: 'Example Merchant',
    },
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
          type: 'DIRECT',
          parameters: {
            protocolVersion: 'ECv2',
            publicKey: 'BOdoXPw1EIDk...<public_key>...8MP1O7cNYd9K',
          },
        },
        merchantInfo: {
          merchantName: 'Example Merchant',
          merchantId: '12345678901234567890', // Tuỳ chọn, nếu bạn đã nhận được ID từ Google Pay
        },
        transactionInfo: {
          totalPriceStatus: 'FINAL',
          totalPriceLabel: 'Total',
          totalPrice: '14.95',
          currencyCode: 'USD',
          countryCode: 'US',
        },
      },
    ],
  };

  const paymentMethods = [
    {
      supportedMethods: 'google_pay',
      data: googlePayRequest,
    },
  ];

  const checkCanMakePayment = async () => {
    if (documentById) {
      const paymentDetails = {
        total: {
          amount: {
            currency: 'USD',
            value: documentById?.price.toString(),
          },
        },
      };
      const paymentRequest = new PaymentRequest(paymentMethods, paymentDetails);
      try {
        const canMakePayment = await paymentRequest.canMakePayment();
        if (canMakePayment) {
          const response = await paymentRequest.show();
          // Handle PSP response
          console.log(response);
        } else {
          // Google Pay unavailable
          console.log('Google Pay unavailable');
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <ScrollView scrollEnabled={scroll}>
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
              <Text style={detailDocStyle.stars}>{documentById?.stars}/6</Text>
              <Text style={detailDocStyle.boxRateAnhBuyDesc}>Đánh giá</Text>
            </View>
            <View style={detailDocStyle.boxRateAnhBuyItem}>
              <Text style={detailDocStyle.stars}>{documentById?.price}$</Text>
              <Text style={detailDocStyle.boxRateAnhBuyDesc}>Giá</Text>
            </View>
            {/* <UiButton handlePerss={() => navigation.push('PaymentScreen')} marginHorizontal={0} marginVertical={0} content="Thanh toán" backgroundColor={colorOptions.primaryColor} width={100} height={35} paddingVertical={2} /> */}
            <GooglePayButton
              //
              style={detailDocStyle.googlepaybutton}
              onPress={checkCanMakePayment}
              allowedPaymentMethods={googlePayRequest.allowedPaymentMethods}
              theme={GooglePayButtonConstants.Themes.Light}
              type={GooglePayButtonConstants.Types.Buy}
              radius={4}
            />
          </View>

          <Text style={detailDocStyle.description}>{documentById?.description}</Text>
        </View>
      </View>

      <ScrollView nestedScrollEnabled={true} onTouchStart={() => setScroll(false)} onTouchEnd={() => setScroll(true)} onTouchCancel={() => setScroll(true)}>
        <View style={detailDocStyle.pdfWrapper}>
          <Pdf
            // horizontal
            showsHorizontalScrollIndicator
            showsVerticalScrollIndicator
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
            style={{
              flex: 1,
              width: Dimensions.get('window').width,
              height: Dimensions.get('window').height,
            }}
          />
        </View>
      </ScrollView>
    </ScrollView>
  );
}
