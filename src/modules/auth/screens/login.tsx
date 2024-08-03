import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { stylesLogin } from '../styles';
import LogoAppComponent from '../components/Logo';
import { BlockInputStyleTwo, UiButton } from '@uiCore/index';
import { colorOptions, fontSizesCustoms } from '@constants/index';
import { handleLogin } from '../utils/handleAuth';

export default function Login({ navigation }: any): JSX.Element {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [disableButton, setDisableButton] = useState(true);

  const onChangeAccount = (newData: string) => {
    setAccount(newData);
    if (newData && password) setDisableButton(false);
    else setDisableButton(true);
  };

  const onChangePassword = (newData: string) => {
    setPassword(newData);
    if (account && newData) setDisableButton(false);
    else setDisableButton(true);
  };

  const handleSubmit = async () => {
    if (account && password) {
      const checkLogin = await handleLogin(account, password);
      if (checkLogin) navigation.navigate('Home');
    }
  };

  return (
    <View style={stylesLogin.container}>
      <View style={stylesLogin.boxLogin}>
        <LogoAppComponent />
      </View>
      <View>
        <BlockInputStyleTwo placeholder={'Số điện thoại hoặc email'} fontSize={fontSizesCustoms.h4} line color={'#000'} backgroundColor={'#ccc'} value={account} onChange={onChangeAccount} />
        <BlockInputStyleTwo placeholder={'Mật khẩu'} fontSize={fontSizesCustoms.h4} color={'#000'} value={password} onChange={onChangePassword} type={'password'} />
        <UiButton content={'ĐĂNG NHẬP'} backgroundColor={colorOptions.primaryColor} textColor="#fff" paddingVertical={14} borderRadius={12} disableButton={disableButton} handlePerss={() => handleSubmit()} />
      </View>
      <Text onPress={() => navigation.navigate('Register')} style={stylesLogin.textNavigate}>
        Tạo tài khoản
      </Text>
      <Text style={stylesLogin.textForgetPassword}>QUÊN MẬT KHẨU ?</Text>
    </View>
  );
}
