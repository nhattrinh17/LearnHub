import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { ACCESS_TOKEN, LanguageSys, REFRESH_TOKEN, messageApp } from '@constants/index';
import { getStorageByName, setStorageByName } from './storageClient';
import { showMessage } from 'react-native-flash-message';
import { Platform, NativeModules } from 'react-native';
import * as RootNavigation from './RootNavigation';
import Config from "react-native-config";

export class BaseAxios {
  private request: AxiosInstance;
  private deviceLanguage: LanguageSys =
    Platform.OS === 'ios'
      ? NativeModules.SettingsManager.settings.AppleLocale || NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
      : NativeModules.I18nManager.localeIdentifier;

  private async setupAxios() {
    const token = await getStorageByName(ACCESS_TOKEN);

    this.request = axios.create({
      baseURL: Config.URL_BE,
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      timeout: 5000,
      timeoutErrorMessage: 'Đã quá thời gian chờ phản hồi',
    });
    // console.log('🚀 ~ BaseAxios ~ setupAxios ~ process.env.URL_BE:', process.env.URL_BE);

    this.request.interceptors.response.use(
      response => onResponseSuccess(response),
      error => onResponseError(error),
    );

    const onResponseSuccess = (response: AxiosResponse) => {
      return response;
    };

    const onResponseError = (error: any) => {
      console.log('🚀 ~ BaseAxios ~ onResponseError ~ error:', error);
      if (error.response?.status == 401) {
        return refreshToken(error); // gọi hàm để refresh token.
      }
      throw new Error(error.response.data?.exception?.message);
    };

    // hàm để refresh token
    const refreshToken = async (error: AxiosError) => {
      const refreshToken = await getStorageByName(REFRESH_TOKEN);
      console.log('🚀 ~ file: baseAxios.ts:50 ~ BaseAxios ~ refreshToken ~ refreshToken:', refreshToken);
      if (!refreshToken) {
        RootNavigation.navigate('Login', {});
        return;
      }
      try {
        const { data } = await this.request.post('/auth/refresh-token', { refresh_token: refreshToken });
        if (!data?.data) {
          RootNavigation.navigate('Login', {});
          return;
        }
        const { access_token, refresh_token } = data?.data;
        console.log('🚀 ~ file: baseAxios.ts:61 ~ BaseAxios ~ refreshToken ~ data?.data:', data?.data);
        await Promise.all([setStorageByName(ACCESS_TOKEN, access_token), setStorageByName(REFRESH_TOKEN, refresh_token)]);
        this.request = axios.create({
          baseURL: process.env.URL_BE,
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${access_token}`,
          },
          timeout: 5000,
          timeoutErrorMessage: 'Đã quá thời gian chờ phản hồi',
        });
        return this.request;
      } catch (error) {
        RootNavigation.navigate('Login', {});
        return;
      }
    };
  }

  async get(path: string, config = {}, showError = true) {
    try {
      if (!this.request) await this.setupAxios();
      const response = await this.request.get(path, config);
      if (response?.status === 200) {
        return response.data;
      }
    } catch (error: any) {
      console.log('🚀 ~ file: baseAxios.ts:38 ~ BaseAxios ~ get ~ error.response.data:', error.response);
      showError &&
        showMessage({
          message: messageApp[this.deviceLanguage][error.message] || messageApp[this.deviceLanguage].please_try_again,
          description: messageApp[this.deviceLanguage].please_try_again,
          type: 'danger',
        });
    }
    return false;
  }

  async post(path: string, data: any, config = {}, showError = true) {
    try {
      if (!this.request) await this.setupAxios();
      const response = await this.request.post(path, data, config);
      return response.data;
    } catch (error: any) {
      console.log('🚀 ~ file: baseAxios.ts:43 ~ BaseAxios ~ post ~ deviceLanguage:', error.message, this.deviceLanguage);
      showError &&
        showMessage({
          message: messageApp[this.deviceLanguage][error.message] || messageApp[this.deviceLanguage].please_try_again,
          description: messageApp[this.deviceLanguage].please_try_again,
          type: 'danger',
        });
    }
    return false;
  }

  async put(path: string, data: any, config = {}, showError = true) {
    try {
      if (!this.request) await this.setupAxios();
      const response = await this.request.put(path, data, config);
      if (response?.status === 200) {
        return response.data;
      }
    } catch (error: any) {
      console.log('🚀 ~ file: baseAxios.ts:38 ~ BaseAxios ~ get ~ error.response.data:', error.message);
      showError &&
        showMessage({
          message: messageApp[this.deviceLanguage][error.message] || messageApp[this.deviceLanguage].please_try_again,
          description: messageApp[this.deviceLanguage].please_try_again,
          type: 'danger',
        });
    }
    return false;
  }

  async delete(path: string, config = {}, showError = true) {
    try {
      if (!this.request) await this.setupAxios();
      const response = await this.request.delete(path, config);
      if (response?.status === 200) {
        return response.data;
      }
    } catch (error: any) {
      console.log('🚀 ~ file: baseAxios.ts:61 ~ deletee ~ error:', error.message);
      showError &&
        showMessage({
          message: messageApp[this.deviceLanguage][error.message] || messageApp[this.deviceLanguage].please_try_again,
          description: messageApp[this.deviceLanguage].please_try_again,
          type: 'danger',
        });
    }
    return false;
  }
}
