import React from 'react';
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { ThemeContext } from '../../App';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from 'hooks';

const episodeData = [
  {
    id: '1',
    title: 'Episode 1',
    duration: '47m',
    description: 'Tormented by her high school classmates and with nowhere...',
  },
  {
    id: '2',
    title: 'Episode 2',
    duration: '52m',
    description: 'With Park Yeon-jin’s wedding on...',
  },
];

const renderEpisode = ({ item }: any) => (
  <View style={styles.episodeCard}>
    <Image style={styles.episodeImage} source={require('assets/landing.png')} />
    <View style={styles.episodeInfo}>
      <Text style={styles.episodeTitle}>{item.title}</Text>
      <Text style={styles.episodeDuration}>{item.duration}</Text>
      <Text style={styles.episodeDescription}>{item.description}</Text>
    </View>
  </View>
);

const ShowDetailScreen = () => {
  const { themeColors } = React.useContext(ThemeContext) || {};
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <View
        style={[styles.appBar, { backgroundColor: themeColors?.background }]}>
        <Pressable onPress={handleGoBack}>
          <Icon name="arrow-left" size={24} color={themeColors?.text} />
        </Pressable>
        <Text style={[styles.title, { color: themeColors?.text }]}>
          The Glory
        </Text>
      </View>

      <Image
        source={require('assets/landing.png')}
        // source={{ uri: 'https://path-to-banner-image/glory-banner.jpg' }}
        style={styles.bannerImage}
      />

      <View style={styles.detailsContainer}>
        <Text style={styles.showTitle}>The Glory</Text>
        <Text style={styles.showInfo}>2022 | 18+ | 1 Season | K-Drama</Text>
        <Text style={styles.showDescription}>
          A young woman, bullied to the point of deciding to drop out of school,
          plans the best way to get revenge. After becoming a primary school
          teacher, she takes in the son of the man who tormented her the most to
          enact her vengeance.
        </Text>
        <Text style={styles.showAdditionalInfo}>
          <Text style={styles.boldText}>Starring:</Text> Song Hye-kyo, Lee
          Do-hyun, Lim Ji-yeon
        </Text>
        <Text style={styles.showAdditionalInfo}>
          <Text style={styles.boldText}>Creators:</Text> Kim Eun-sook, An Gil-ho
        </Text>
        <Text style={styles.showAdditionalInfo}>
          <Text style={styles.boldText}>Genre:</Text> Revenge, Psychological
          Thriller
        </Text>
      </View>

      {/* Episode List */}
      <Text style={styles.episodesTitle}>Episodes</Text>
      <Text style={styles.seasonTitle}>Season 1</Text>
      <FlatList
        data={episodeData}
        renderItem={renderEpisode}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    paddingTop: 20,
  },
  header: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  bannerImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 15,
  },
  showTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  showInfo: {
    color: '#aaa',
    fontSize: 14,
    marginBottom: 10,
  },
  showDescription: {
    color: '#ddd',
    fontSize: 14,
    marginBottom: 10,
  },
  showAdditionalInfo: {
    color: '#aaa',
    fontSize: 14,
    marginBottom: 5,
  },
  boldText: {
    fontWeight: 'bold',
  },
  episodesTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
  seasonTitle: {
    color: '#aaa',
    fontSize: 16,
    marginLeft: 15,
    marginBottom: 10,
  },
  episodeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  episodeImage: {
    width: 70,
    height: 70,
    backgroundColor: '#555',
    borderRadius: 10,
  },
  episodeInfo: {
    marginLeft: 15,
    flex: 1,
  },
  episodeTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  episodeDuration: {
    color: '#aaa',
    fontSize: 12,
    marginBottom: 5,
  },
  episodeDescription: {
    color: '#ddd',
    fontSize: 14,
  },
  appBar: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderBottomColor: 'rgba(0, 0, 0, 0.25)',
    borderBottomWidth: 4,
    width: '100%',
  },

  title: {
    flex: 1,
    textAlign: 'center',
    fontWeight: '700',
    fontFamily: 'Inter-Bold',
    fontSize: 18,
  },
});

export default ShowDetailScreen;
