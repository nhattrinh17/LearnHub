import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import constantsAssets from '~/assets';
import { FadeInView } from '~/uiCore';

const styles = StyleSheet.create({
  container: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
});
export function LogoAppComponent({ isLoading }: { isLoading?: boolean }): JSX.Element {
  return (
    <View style={styles.container}>
      {isLoading ? (
        <FadeInView fadeInDuration={1000} fadeOutDuration={1000}>
          <Image source={constantsAssets.logoApp} style={{ objectFit: 'contain', maxWidth: '100%' }} />
        </FadeInView>
      ) : (
        <Image source={constantsAssets.logoApp} style={{ objectFit: 'contain', maxWidth: '100%' }} />
      )}
    </View>
  );
}
export default LogoAppComponent;
