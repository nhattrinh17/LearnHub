import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { stylesRegister } from '../styles';
import LogoAppComponent from '../components/Logo';
import { BlockInputStyleTwo, UiButton } from '@uiCore/index';
import { fontSizesCustoms } from '~/constants/frontSizes.constant';
import { colorOptions } from '~/constants';

export default function Register(): JSX.Element {
  const gendersArr = ['male', 'female'];

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('male');
  const [disableButton, setDisableButton] = useState(true);

  return (
    <View style={stylesRegister.container}>
      <View style={stylesRegister.boxLogin}>
        <LogoAppComponent width="160" height="160" />
      </View>
      <View>
        <BlockInputStyleTwo placeholder={'Email'} fontSize={fontSizesCustoms.h4} line color={'#000'} backgroundColor={'#ccc'} value={email} onChange={newData => setEmail(newData)} />
        <BlockInputStyleTwo placeholder={'Username'} fontSize={fontSizesCustoms.h4} line color={'#000'} backgroundColor={'#ccc'} value={username} onChange={newData => setUsername(newData)} />
        <BlockInputStyleTwo placeholder={'Số điện thoại'} fontSize={fontSizesCustoms.h4} line color={'#000'} backgroundColor={'#ccc'} value={phone} onChange={newData => setPhone(newData)} />
        <BlockInputStyleTwo placeholder={'Mật khẩu'} fontSize={fontSizesCustoms.h4} color={'#000'} value={password} onChange={newData => setPassword(newData)} />
        {/* <BlockInputStyleTwo placeholder={'Số điện thoại hoặc email'} fontSize={fontSizesCustoms.h4} line color={'#000'} backgroundColor={'#ccc'} value={account} onChange={onChangeAccount} /> */}
        <View style={stylesRegister.boxSelectGender}>
          <Text style={stylesRegister.textGender}>Male</Text>
          <RadioButton color={colorOptions.primaryColor} value="male" status={gender === 'male' ? 'checked' : 'unchecked'} onPress={() => setGender('male')} />
        </View>
        <View style={stylesRegister.boxSelectGender}>
          <Text style={stylesRegister.textGender}>Female</Text>
          <RadioButton color={colorOptions.primaryColor} value="female" status={gender === 'female' ? 'checked' : 'unchecked'} onPress={() => setGender('female')} />
        </View>
        <UiButton content={'TẠO MỚI'} backgroundColor={colorOptions.primaryColor} textColor="#fff" paddingVertical={14} borderRadius={12} disableButton={disableButton} />
      </View>
      <Text style={stylesRegister.textForgetPassword}>ĐĂNG NHẬP</Text>
    </View>
  );
}
