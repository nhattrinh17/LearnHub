import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { stylesRegister } from '../styles';
import LogoAppComponent from '../components/Logo';
import { BlockInputStyleTwo, UiButton } from '@uiCore/index';
import { fontSizesCustoms } from '~/constants/frontSizes.constant';
import { colorOptions } from '~/constants';
import { NavigationProp } from '~/types';
import { handleRegister } from '../utils/handleRegister';

export default function Register({ navigation }: { navigation: NavigationProp }): JSX.Element {
  const gendersArr = ['male', 'female'];

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const disableButton = !name || !email || !username || !password || !phone;

  return (
    <View style={stylesRegister.container}>
      <View style={stylesRegister.boxLogin}>
        <LogoAppComponent />
      </View>
      <View>
        <BlockInputStyleTwo placeholder={'Name'} fontSize={fontSizesCustoms.h4} line color={'#000'} backgroundColor={'#ccc'} value={name} onChange={newData => setName(newData)} />
        <BlockInputStyleTwo placeholder={'Email'} fontSize={fontSizesCustoms.h4} line color={'#000'} backgroundColor={'#ccc'} value={email} onChange={newData => setEmail(newData)} />
        <BlockInputStyleTwo placeholder={'Username'} fontSize={fontSizesCustoms.h4} line color={'#000'} backgroundColor={'#ccc'} value={username} onChange={newData => setUsername(newData)} />
        <BlockInputStyleTwo placeholder={'Số điện thoại'} fontSize={fontSizesCustoms.h4} line color={'#000'} backgroundColor={'#ccc'} value={phone} onChange={newData => setPhone(newData)} />
        <BlockInputStyleTwo placeholder={'Mật khẩu'} fontSize={fontSizesCustoms.h4} line color={'#000'} backgroundColor={'#ccc'} value={password} onChange={newData => setPassword(newData)} />

        <UiButton
          handlePerss={() => {
            const data = {
              email,
              username,
              password,
              phone,
            };
            handleRegister(data, navigation);
          }}
          content={'TẠO MỚI'}
          backgroundColor={colorOptions.primaryColor}
          textColor="#fff"
          paddingVertical={14}
          borderRadius={12}
          disableButton={disableButton}
        />
      </View>
      <Text style={stylesRegister.textForgetPassword} onPress={() => navigation.navigate('Login')}>
        ĐĂNG NHẬP
      </Text>
    </View>
  );
}
