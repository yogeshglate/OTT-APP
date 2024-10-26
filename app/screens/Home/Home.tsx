import { useNavigation } from 'hooks';
import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { ThemeContext } from '../../App';
import styles from './HomeStyles';

const DATA = [
  {
    id: '1',
    title: 'The Glory',
  },
  {
    id: '2',
    title: 'Oppenheimer',
  },
  {
    id: '3',
    title: 'Thor: Love and Thunder',
  },
];

const categories = ['Now Playing', 'Upcoming', 'Top Rated'];

const { height } = Dimensions.get('window');

const MovieScreen = () => {
  const navigation = useNavigation();
  const handleNavigateToDetails = (movieId: string) => {
    navigation.navigate('Detail', { id: movieId });
  };
  const { themeColors } = React.useContext(ThemeContext) || {};

  return (
    <ScrollView
      style={[
        styles.container,
        { backgroundColor: themeColors?.inputBackground },
      ]}>
      <View style={styles.header}>
        <Image
          source={require('assets/landing.png')}
          style={styles.headerImage}
        />
      </View>

      {categories.map(category => (
        <View key={category} style={styles.section}>
          <Text style={[styles.sectionTitle, { color: themeColors?.text }]}>
            {category}
          </Text>
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <Pressable
                style={styles.card}
                onPress={() => handleNavigateToDetails(item.id)}>
                <Image
                  source={require('assets/landing.png')}
                  style={styles.image}
                />
                <Text style={[styles.title, { color: themeColors?.text }]}>
                  {item.title}
                </Text>
              </Pressable>
            )}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default MovieScreen;
