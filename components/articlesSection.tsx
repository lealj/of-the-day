import { View, StyleSheet } from 'react-native';
import ArticleCard from './articleCardMed';

const articles = [
  { id: '1', title: "Van Gogh's Final Painting", tag: "Art" },
  { id: '2', title: "The Day T-Rex's Were Discovered", tag: "Paleontology" },
  { id: '3', title: "Beethoven's Stardom", tag: "Music" },
  { id: '4', title: "How AI Paints the Future", tag: "Comp Sci" },
  { id: '5', title: "Samurai Culture in Anime", tag: "Anime" },
  { id: '6', title: "The History of the Silk Road", tag: "History" },
];

export default function ArticlesSection() {
  return (
    <View>
      <View style={styles.grid}>
        {articles.map((article, index) => (
          <View key={article.id} style={styles.cardWrapper}>
            <ArticleCard title={article.title} tag={article.tag} />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardWrapper: {
    width: '48%',
    marginBottom: 8,
    marginLeft: 4,
    marginRight: 4
  },
});