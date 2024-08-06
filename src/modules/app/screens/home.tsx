import { FlatList, Text, View } from 'react-native';
import { styleHome } from '../styles';
import { InputSearchOne } from '~/uiCore';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useDocument } from '../utils/handleHome';
import { DocumentItem } from '../components/DocumentItem';
import { NavigationProp } from '~/types';
import { useAppDispatch } from '~/redux/utilRedux';
import { useEffect } from 'react';
import { resetDataDocument } from '~/redux/app/document.slice';

export function HomeScreen({ navigation }: { navigation: NavigationProp }): JSX.Element {
  const { data } = useDocument();
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetDataDocument());
    };
  }, []);

  return (
    <View style={styleHome.container}>
      <Text style={styleHome.title}>Top document</Text>
      <View style={styleHome.boxSearchAndSort}>
        <InputSearchOne onFetch={() => {}} placeholder={'Search document'} />
        <MaterialIcons name="sort" size={22} />
      </View>

      <View style={styleHome.wrapperDocument}>
        <FlatList
          data={data}
          renderItem={({ item }) => <DocumentItem {...item} navigation={navigation} />}
          // keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}
