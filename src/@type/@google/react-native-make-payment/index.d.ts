declare module '@google/react-native-make-payment' {
  export interface PaymentMethodData {
    supportedMethods: string;
    data: object; // Chấp nhận bất kỳ cấu trúc đối tượng JSON nào
  }

  export interface PaymentDetails {
    total: {
      amount: {
        currency: string;
        value: string;
      };
    };
  }

  export class PaymentRequest {
    constructor(paymentMethods: PaymentMethodData[], paymentDetails: PaymentDetails);
    canMakePayment(): Promise<boolean>;
    show(): Promise<any>;
  }

  export const GooglePayButton: React.ComponentType<{
    style?: any;
    onPress: () => void;
    allowedPaymentMethods: any;
    theme: any;
    type: any;
    radius?: number;
  }>;

  export const GooglePayButtonConstants: {
    Themes: {
      Light: string;
      Dark: string;
    };
    Types: {
      Buy: string;
      Donate: string;
      Checkout: string;
      // Add other types if available
    };
  };
}
