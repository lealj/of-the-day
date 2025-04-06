import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';
import ArticleCard from './articleCard';

const articles = [
  { id: '1', title: "Van Gogh's Final Painting" },
  { id: '2', title: "The Day T-Rex's Were Discovered" },
  { id: '3', title: "Beethoven's Stardom" },
  { id: '4', title: "How AI Paints the Future" },
  { id: '5', title: "Samurai Culture in Anime" },
  { id: '6', title: "The History of the Silk Road" },
];

export default function ArticlesSection() {
  return (
    <View>
      <Text style={styles.sectionTitle}>
        Today's Articles
      </Text>
      <View style={styles.grid}>
        {articles.map((article, index) => (
          <View key={article.id} style={styles.cardWrapper}>
            <ArticleCard title={article.title} />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    marginLeft: 4
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 16,
    marginBottom: 8,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardWrapper: {
    width: '48%',
    marginBottom: 10,
    marginLeft: 4,
    marginRight: 4
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
    marginHorizontal: 10
  },
});