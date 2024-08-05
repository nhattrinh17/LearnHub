/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Provider } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import type { PropsWithChildren } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { store } from '@redux/store';
import { navigationRef } from '@utils/index';
import Splash from '@modules/auth/screens/splash';
import Login from '@modules/auth/screens/login';
import Register from '@modules/auth/screens/register';
import FlashMessage from 'react-native-flash-message';
import { HomeScreen } from '~/modules/app/screens/home';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <View style={{ flex: 1 }}>
      <Provider store={store}>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{
              headerShown: false,
              animation: 'fade',
            }}>
            <Stack.Screen name="Splash" component={Splash} options={{ animation: 'none' }} />
            <Stack.Screen name="Login" component={Login} options={{ animation: 'fade' }} />
            <Stack.Screen name="Register" component={Register} options={{ animation: 'fade' }} />
            <Stack.Screen name="Home" component={HomeScreen} options={{ animation: 'fade' }} />
          </Stack.Navigator>
          {/* <RealmProvider schema={[HistorySearchUsers, GroupChatHistory, UserRead, User, Members, Group, Messages]}>
         
          </RealmProvider> */}
        </NavigationContainer>
      </Provider>
      <FlashMessage position="top" />
    </View>
  );
}

export default App;
