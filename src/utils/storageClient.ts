import AsyncStorage from '@react-native-async-storage/async-storage';

export const getStorageByName = async (name: string): Promise<string> => {
  const value = await AsyncStorage.getItem(name);
  if (value) return value;
  return '';
};

export const setStorageByName = async (name: string, value: string): Promise<void> => {
  return AsyncStorage.setItem(name, value);
};

export const removeStorageByName = async (name: string): Promise<void> => {
  return AsyncStorage.removeItem(name);
};
