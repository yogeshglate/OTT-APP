import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ThemeContext } from '../../App';
import styles from './FavoritesStyles';

const Favorites = () => {
  const { themeColors } = React.useContext(ThemeContext) || {};

  const movies = [
    { id: '1', title: 'Warriors', year: '2019', downloaded: true },
    { id: '2', title: 'The Glory', year: '2022', downloaded: true },
  ];

  const renderMovieCard = ({ item }: { item: (typeof movies)[0] }) => (
    <View
      style={[
        styles.movieCard,
        { backgroundColor: themeColors?.inputBackground },
      ]}>
      <Image
        style={styles.posterIcon}
        resizeMode="cover"
        source={require('assets/landing.png')}
      />
      <View style={styles.movieInfoContainer}>
        <View style={styles.movieTitleContainer}>
          <View>
            <Text style={[styles.movieTitle, { color: themeColors?.text }]}>
              {item.title}
            </Text>
            <Text style={styles.movieYear}>{item.year}</Text>
          </View>
          <MaterialCommunityIcons
            name="dots-vertical"
            size={24}
            color={themeColors?.text}
          />
        </View>
        {item.downloaded && (
          <View style={styles.badgeWrapper}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Downloaded</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );

  return (
    <View
      style={[styles.container, { backgroundColor: themeColors?.background }]}>
      <View
        style={[styles.appBar, { backgroundColor: themeColors?.background }]}>
        <Text style={[styles.title, { color: themeColors?.text }]}>
          Favorites
        </Text>
      </View>
      <FlatList
        data={movies}
        renderItem={renderMovieCard}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default Favorites;
