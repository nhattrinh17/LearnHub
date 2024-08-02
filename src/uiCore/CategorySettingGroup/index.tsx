import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import EvilIconsIcon from 'react-native-vector-icons/EvilIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import OcticonsIcon from 'react-native-vector-icons/Octicons';
import SimpleLineIconsIcon from 'react-native-vector-icons/SimpleLineIcons';
import ZocialIcon from 'react-native-vector-icons/Zocial';
import { fontSizesCustoms } from '~/constants';

const typeIcon = Object.freeze({
  AntDesign: 'AntDesign',
  Entypo: 'Entypo',
  EvilIcons: 'EvilIcons',
  Feather: 'Feather',
  FontAwesome: 'FontAwesome',
  FontAwesome5: 'FontAwesome5',
  FontAwesome6: 'FontAwesome6',
  Fontisto: 'Fontisto',
  Foundation: 'Foundation',
  Ionicons: 'Ionicons',
  MaterialCommunityIcons: 'MaterialCommunityIcons',
  MaterialIcons: 'MaterialIcons',
  Octicons: 'Octicons',
  SimpleLineIcons: 'SimpleLineIcons',
  Zocial: 'Zocial',
});

type TypeIcon = typeof typeIcon;

type Values<T> = T[keyof T];

export interface ParamsCategorySettingGroup {
  isDisplay?: boolean;
  label: string;
  colorLabel: string;
  colorName: string;
  colorDesc: string;
  colorIcon: string;
  listItem: {
    isDisplay?: boolean;
    name: string;
    typeIcon?: Values<TypeIcon>;
    description?: string;
    colorIcon?: string;
    colorName?: string;
    colorDesc?: string;
    onPress?: () => void;
    image?: string;
    iconName?: string;
  }[];
}

export function CategorySettingGroup(params: ParamsCategorySettingGroup): JSX.Element {
  console.log('🚀 ~ file: index.tsx:41 ~ CategorySettingGroup ~ params:', params.label);
  const styles = StyleSheet.create({
    wrapper: {
      // marginVertical: 20,
    },
    label: {
      color: params.colorLabel,
      fontSize: fontSizesCustoms.h4,
      fontWeight: '700',
      marginBottom: 10,
    },
    itemCategory: {
      flexDirection: 'row',
      marginVertical: 6,
    },
    boxIconOrImg: {
      width: 30,
    },
    image: {
      width: 24,
      height: 24,
    },
    icon: {
      fontSize: 24,
      color: params.colorIcon,
    },
    content: {
      marginLeft: 8,
    },
    name: {
      fontSize: fontSizesCustoms.h4,
      color: params.colorName,
    },
    description: {
      color: params.colorDesc,
      fontSize: fontSizesCustoms.h6,
    },
  });

  return params.isDisplay !== false ? (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{params.label}</Text>
      <View>
        {params.listItem.map(
          (item, index) =>
            item.isDisplay !== false && (
              <TouchableHighlight key={index} onPress={item.onPress}>
                <View style={styles.itemCategory}>
                  <View style={styles.boxIconOrImg}>
                    {item.image ? (
                      <Image source={{ uri: item.image }} style={styles.image} />
                    ) : (
                      item.iconName && (
                        <>
                          {item.typeIcon === 'AntDesign' && <AntDesignIcon name={item.iconName} style={item.colorIcon ? { ...styles.icon, color: item.colorIcon } : styles.icon} />}
                          {item.typeIcon === 'Entypo' && <EntypoIcon name={item.iconName} style={item.colorIcon ? { ...styles.icon, color: item.colorIcon } : styles.icon} />}
                          {item.typeIcon === 'EvilIcons' && <EvilIconsIcon name={item.iconName} style={item.colorIcon ? { ...styles.icon, color: item.colorIcon } : styles.icon} />}
                          {item.typeIcon === 'Feather' && <FeatherIcon name={item.iconName} style={item.colorIcon ? { ...styles.icon, color: item.colorIcon } : styles.icon} />}
                          {item.typeIcon === 'FontAwesome' && <FontAwesomeIcon name={item.iconName} style={item.colorIcon ? { ...styles.icon, color: item.colorIcon } : styles.icon} />}
                          {item.typeIcon === 'FontAwesome5' && <FontAwesome5Icon name={item.iconName} style={item.colorIcon ? { ...styles.icon, color: item.colorIcon } : styles.icon} />}
                          {item.typeIcon === 'FontAwesome6' && <FontAwesome6Icon name={item.iconName} style={item.colorIcon ? { ...styles.icon, color: item.colorIcon } : styles.icon} />}
                          {item.typeIcon === 'Fontisto' && <FontistoIcon name={item.iconName} style={item.colorIcon ? { ...styles.icon, color: item.colorIcon } : styles.icon} />}
                          {item.typeIcon === 'Foundation' && <FoundationIcon name={item.iconName} style={item.colorIcon ? { ...styles.icon, color: item.colorIcon } : styles.icon} />}
                          {item.typeIcon === 'Ionicons' && <IoniconsIcon name={item.iconName} style={item.colorIcon ? { ...styles.icon, color: item.colorIcon } : styles.icon} />}
                          {item.typeIcon === 'MaterialCommunityIcons' && <MaterialCommunityIconsIcon name={item.iconName} style={item.colorIcon ? { ...styles.icon, color: item.colorIcon } : styles.icon} />}
                          {item.typeIcon === 'MaterialIcons' && <MaterialIconsIcon name={item.iconName} style={item.colorIcon ? { ...styles.icon, color: item.colorIcon } : styles.icon} />}
                          {item.typeIcon === 'Octicons' && <OcticonsIcon name={item.iconName} style={item.colorIcon ? { ...styles.icon, color: item.colorIcon } : styles.icon} />}
                          {item.typeIcon === 'SimpleLineIcons' && <SimpleLineIconsIcon name={item.iconName} style={item.colorIcon ? { ...styles.icon, color: item.colorIcon } : styles.icon} />}
                          {item.typeIcon === 'Zocial' && <ZocialIcon name={item.iconName} style={item.colorIcon ? { ...styles.icon, color: item.colorIcon } : styles.icon} />}
                        </>
                      )
                    )}
                  </View>
                  <View style={styles.content}>
                    <Text style={item.colorIcon ? { ...styles.name, color: item.colorName } : styles.name}>{item.name}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                  </View>
                </View>
              </TouchableHighlight>
            ),
        )}
      </View>
    </View>
  ) : (
    <></>
  );
}
