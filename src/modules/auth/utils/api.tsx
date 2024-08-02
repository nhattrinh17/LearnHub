import { BaseAxios } from '@utils/index';

export const apiLoginAccount = async (account: string, password: string) => {
  const baseAxios = new BaseAxios();

  const request = await baseAxios.post('/auth/login', {
    account,
    password,
  });
  if (request?.statusCode == 201) {
    return request.data;
  }
  return false;
};

export const apiGetUserInfo = async () => {
  const baseAxios = new BaseAxios();

  const request = await baseAxios.get('/auth/userInfo');
  if (request?.statusCode == 200) {
    return request.data;
  }
  return false;
};

export const apiRegisterUserAndDevice = async (user: string, deviceId: string, operatingSystem: string, deviceVersion: number) => {
  const baseAxios = new BaseAxios();

  const request = await baseAxios.post('/user-device', {
    user,
    deviceId,
    operatingSystem,
    deviceVersion,
  });
  if (request?.statusCode == 201) {
    return request.data;
  }
  return false;
};
