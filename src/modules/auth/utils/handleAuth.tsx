import { ACCESS_TOKEN, REFRESH_TOKEN } from '~/constants';
import { apiGetUserInfo, apiLoginAccount } from './api';
import { setStorageByName } from '@utils/index';
import { dispatchRedux } from '~/redux/utilRedux';
import { setCurrentUser } from '~/redux/app/user.slice';

export const handleLogin = async (account: string, password: string): Promise<boolean> => {
  const dataToken = await apiLoginAccount(account, password);
  if (dataToken) {
    Promise.all([setStorageByName(ACCESS_TOKEN, dataToken.access_token), setStorageByName(REFRESH_TOKEN, dataToken.refresh_token)])
      .then(async data => {
        const userInfo = await apiGetUserInfo();
        dispatchRedux(setCurrentUser(userInfo));
      })
      .catch(err => {
        console.log('🚀 ~ file: handleAuth.tsx:11 ~ Promise.all ~ err:', err);
      });
    return true;
  }
  return false;
};
