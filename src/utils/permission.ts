import { NativeModules, Platform } from 'react-native';
import { PERMISSIONS, request } from 'react-native-permissions';
import { showMessage } from 'react-native-flash-message';
import { LanguageSys, messageApp } from '~/constants';

const deviceLanguage: LanguageSys =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale || NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
    : NativeModules.I18nManager.localeIdentifier;

export const requestAccessReadLibrary = async () => {
  if (Platform.OS === 'ios') {
    const permission = await request(PERMISSIONS.IOS.MEDIA_LIBRARY);
    console.log('🚀 ~ file: permission.ts:13 ~ requestAccessReadLibrary ~ permission:', permission);
    if (permission == 'blocked')
      showMessage({
        message: messageApp[deviceLanguage].please_accept_memory,
        description: messageApp[deviceLanguage].please_try_again,
        type: 'warning',
      });
  }
  return true;
};

export const requestAccessWriteLibrary = async () => {
  if (Platform.OS === 'ios') {
    const permission = await request(PERMISSIONS.IOS.MEDIA_LIBRARY);
    console.log('🚀 ~ file: permission.ts:24 ~ requestAccessWriteLibrary ~ permission:', permission);
    if (permission == 'blocked')
      showMessage({
        message: messageApp[deviceLanguage].please_accept_memory,
        description: messageApp[deviceLanguage].please_try_again,
        type: 'warning',
      });
  }
  return true;
};

export const requestAccessCamera = async () => {
  const permission = await request(Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA);
  if (permission == 'blocked')
    showMessage({
      message: messageApp[deviceLanguage].please_accept_camera,
      description: messageApp[deviceLanguage].please_try_again,
      type: 'warning',
    });
  else return false;
};
