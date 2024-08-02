import { OneSignal, LogLevel } from 'react-native-onesignal';
import { APP_ID_ONESIGNAL } from '@env';
import { getUniqueId, getManufacturer } from 'react-native-device-info';
import { apiRegisterUserAndDevice } from './api';
import { Platform } from 'react-native';

export const handleRegisterOneSignal = async (userId: string) => {
  const uniqueDeviceId = await getUniqueId();
  const userDeviceId = `${uniqueDeviceId}_${userId}`;
  const registerDevice = await apiRegisterUserAndDevice(userId, userDeviceId, Platform.OS, +Platform.Version);
  if (registerDevice) {
    OneSignal.Debug.setLogLevel(LogLevel.Verbose);

    // OneSignal Initialization
    OneSignal.login(userDeviceId);
    OneSignal.initialize(APP_ID_ONESIGNAL);

    // requestPermission will show the native iOS or Android notification permission prompt.
    // We recommend removing the following code and instead using an In-App Message to prompt for notification permission
    OneSignal.Notifications.requestPermission(true);

    // Method for listening for notification clicks
    OneSignal.Notifications.addEventListener('click', event => {
      console.log('OneSignal: notification clicked:', event);
    });
    return true;
  }
  return false;
};
