import { NavigationProp } from '~/types';
import { createUser } from './api';

export const handleRegister = async (data: any, navigation: NavigationProp) => {
  console.log('🚀 ~ handleRegister ~ data:', data);
  const res = await createUser(data);
  if (res) {
    navigation.navigate('Login');
  }
};
