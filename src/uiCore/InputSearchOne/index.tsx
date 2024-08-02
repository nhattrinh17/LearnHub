import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import { StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import { RootState } from '~/redux/store';
import { fontSizesCustoms } from '~/constants';
import { useDebounce } from 'usehooks-ts';

export function InputSearchOne(params: any) {
  const { mood } = useSelector((state: RootState) => state.settingApp);
  const [searchText, setSearchText] = useState('');
  const debouncedValue = useDebounce<string>(searchText, 500);

  const {
    //
    width,
    placeholder,
    onBlur,
    autoFocus,
    onFetch,
    navigation,
  } = params;

  const styles = StyleSheet.create({
    wrapper: {
      borderBottomWidth: 1,
      borderBottomColor: '#00000014',
      paddingHorizontal: 8,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconBack: {
      color: mood === 'light' ? '#000' : '#fff',
      marginRight: 16,
    },
    inputSearch: {
      flex: 1,
      color: mood === 'light' ? '#000' : '#fff',
      fontSize: fontSizesCustoms.h4,
      height: '100%',
    },
  });

  useEffect(() => {
    onFetch(searchText);
    // Do fetch here...
    // Triggers when "debouncedValue" changes
  }, [debouncedValue]);

  return (
    <View style={styles.wrapper}>
      <MaterialIcons name="arrow-back" size={24} style={styles.iconBack} onPress={() => navigation?.goBack()} />
      <TextInput
        autoFocus={autoFocus}
        value={searchText}
        placeholder={placeholder}
        style={styles.inputSearch}
        onChangeText={newData => {
          setSearchText(newData);
        }}
      />
      <MaterialIcons name="close" size={24} style={{ ...styles.iconBack, backgroundColor: '#000' }} onPress={() => setSearchText('')} />
    </View>
  );
}

InputSearchOne.propTypes = {
  onFetch: PropTypes.func,
  width: PropTypes.any,
  styleIcon: PropTypes.string,
  autoFocus: PropTypes.bool,
  placeholder: PropTypes.string,
  navigation: PropTypes.any,
};
