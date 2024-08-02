import React, { useEffect } from 'react';
import { View } from 'react-native';
import LogoAppComponent from '../components/Logo';
import { getStorageByName } from '~/utils';
import { ACCESS_TOKEN } from '~/constants';
import { apiGetUserInfo } from '../utils/api';
import { dispatchRedux } from '~/redux/utilRedux';
import { setCurrentUser } from '~/redux/app/userSlice';
import { handleRegisterOneSignal } from '../utils/handleSplash';

export default function Splash(props: any): JSX.Element {
  const navigation = props.navigation;

  useEffect(() => {
    async function checkData() {
      let isVerified = false;
      let userInfo = null;
      const checkToken = await getStorageByName(ACCESS_TOKEN);
      if (checkToken) {
        userInfo = await apiGetUserInfo();
        if (checkToken && userInfo) {
          const registerDevice = await handleRegisterOneSignal(userInfo._id);
          if (registerDevice) {
            dispatchRedux(setCurrentUser(userInfo));
            isVerified = true;
          }
        }
      }
      if (isVerified) {
        navigation.navigate('Home');
      } else setTimeout(() => navigation.navigate('Login'), 2000);
    }

    checkData();
  }, []);

  return (
    <View style={{ backgroundColor: 'white' }}>
      <LogoAppComponent />
    </View>
  );
}
