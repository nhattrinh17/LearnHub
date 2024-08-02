import { NativeModules, Platform } from 'react-native';
import ReactNativeBlobUtil from 'react-native-blob-util';
import { showMessage } from 'react-native-flash-message';
import { LanguageSys, messageApp } from '~/constants';

export const saveImageToLocal = async (imageUrl: string) => {
  const deviceLanguage: LanguageSys =
    Platform.OS === 'ios'
      ? NativeModules.SettingsManager.settings.AppleLocale || NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
      : NativeModules.I18nManager.localeIdentifier;

  const fileName = imageUrl
    .substring(imageUrl.lastIndexOf('/') + 1)
    .split('?')[0]
    .split('.')[0];
  //   const picturesDir = `${ReactNativeBlobUtil.fs.dirs.DocumentDir}/Pictures/ChatWave`;
  //   const filePath = `${picturesDir}/${fileName}.png`;
  //   console.log('🚀 ~ file: saveFileToStorage.ts:17 ~ saveImageToLocal ~ fileName:', filePath);
  //   const isFileExists = await ReactNativeBlobUtil.fs.exists(filePath);
  //   console.log('🚀 ~ file: saveFileToStorage.ts:21 ~ saveImageToLocal ~ isFileExists:', isFileExists);

  ReactNativeBlobUtil.config({
    fileCache: true,
  })
    .fetch('GET', imageUrl)
    .then(async res => {
      const result = await ReactNativeBlobUtil.MediaCollection.copyToMediaStore(
        {
          name: fileName, // name of the file
          parentFolder: 'ChatWave', // subdirectory in the Media Store, e.g. HawkIntech/Files to create a folder HawkIntech with a subfolder Files and save the image within this folder
          mimeType: 'image/png', // MIME type of the file
        },
        'Image', // Media Collection to store the file in ("Audio" | "Image" | "Video" | "Download")
        res.path(), // Path to the file being copied in the apps own storage
      );
      //   console.log('🚀 ~ file: saveFileToStorage.ts:32 ~ saveImageToLocal ~ result:', result);
      result && showMessage({ message: messageApp[deviceLanguage].save_image_success, type: 'info' });
    });
};
