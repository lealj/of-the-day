import { View, StyleSheet } from 'react-native';
import ArticleCard from './articleCardMed';

const articles = [
  { id: '1', title: "Joshua Commanding the...", tag: "art" },
  { id: '2', title: "Fossil Find of the Century...", tag: "paleontology" },
  { id: '3', title: "Beethoven's Silent Triumph", tag: "music" },
  { id: '4', title: "The Birth of Rails", tag: "software" },
  { id: '5', title: "The Rise of a Legend", tag: "cars" },
  { id: '6', title: "The Battle of Vercalle", tag: "history" },
];

export default function ArticlesSection() {
  return (
    <View>
      <View style={styles.grid}>
        {articles.map((article, index) => (
          <View key={article.id} style={styles.cardWrapper}>
            <ArticleCard title={article.title} topic={article.tag} />
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
    marginHorizontal: 8,
  },
  cardWrapper: {
    width: '49%',
    marginBottom: 8,
  },
});