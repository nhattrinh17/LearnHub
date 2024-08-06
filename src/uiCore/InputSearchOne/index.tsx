import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import { StyleSheet } from 'react-native';

import FeatherIcons from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';
import { RootState } from '~/redux/store';
import { fontSizesCustoms } from '~/constants';
import { useDebounceValue } from 'usehooks-ts';

interface Params {
  width?: number;
  height?: number;
  placeholder: string;
  onBlur?: () => void;
  autoFocus?: boolean;
  onFetch: (searchText: string) => void;
  navigation?: any;
  delayTime?: number;
}
export function InputSearchOne(params: Params) {
  const {
    //
    width,
    delayTime,
    height,
    placeholder,
    onBlur,
    autoFocus,
    onFetch,
    navigation,
  } = params;

  const { mood } = useSelector((state: RootState) => state.settingApp);
  const [searchText, setSearchText] = useDebounceValue<string>('', delayTime || 1200);

  const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      paddingHorizontal: 8,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      height: height || 40,
      backgroundColor: '#f5f6fa',
    },
    iconSearch: {
      color: '#000',
    },

    inputSearch: {
      flex: 1,
      color: mood === 'light' ? '#000' : '#fff',
      fontSize: fontSizesCustoms.h4,
      height: '100%',
    },
  });

  useEffect(() => {
    console.log('fetch');
    onFetch(searchText);
    // Do fetch here...
    // Triggers when "debouncedValue" changes
  }, [searchText]);

  return (
    <View style={styles.wrapper}>
      <FeatherIcons name="search" size={20} style={styles.iconSearch} />
      <TextInput
        autoFocus={autoFocus}
        placeholder={placeholder}
        style={styles.inputSearch}
        onChangeText={newData => {
          setSearchText(newData);
        }}
      />
      {/* <MaterialIcons name="close" size={24} style={{ ...styles.iconBack, backgroundColor: '#000' }} onPress={() => setSearchText('')} /> */}
    </View>
  );
}
