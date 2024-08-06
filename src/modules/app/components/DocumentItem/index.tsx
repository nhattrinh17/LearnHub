import { Image, StyleSheet, TouchableHighlight, View } from 'react-native';
import { styleDocument } from './styles';
import { Text } from 'react-native-paper';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { NavigationProp } from '~/types';

export function DocumentItem({
  //
  author,
  description,
  id,
  image,
  link,
  name,
  price,
  stars,
  navigation,
}: {
  id: number;
  name: string;
  author: string;
  description: string;
  image: string;
  stars: number;
  price: number;
  link: string;
  navigation: NavigationProp;
}): JSX.Element {
  return (
    <View style={styleDocument.wrapper}>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#dddddd24"
        onPress={() => {
          navigation.push('DetailDocument', {
            id,
          });
        }}>
        <View style={styleDocument.container}>
          <Image
            source={{
              uri: image,
            }}
            style={styleDocument.image}
          />
          <View style={styleDocument.body}>
            <Text style={styleDocument.title}>{name}</Text>
            <Text style={styleDocument.author}>{author}</Text>
            <View style={styleDocument.boxStar}>{Array.from({ length: 6 }, (v, i) => i + 1).map((i, index) => (i <= 5 ? <FontAwesomeIcon key={index} name="star" style={styleDocument.iconStar} /> : <FontAwesomeIcon key={index} name="star-o" style={styleDocument.iconStar} />))}</View>
            <Text numberOfLines={4} ellipsizeMode="tail" style={styleDocument.description}>
              {description}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
}
