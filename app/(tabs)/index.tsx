import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ArticleCardLarge from '@/components/articleCardLarge';

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ArticleCardLarge
        title="The Battle of Vercalle"
        topic="History"
      />
      <ArticleCardLarge
        title="Joshua Commanding the Sun..."
        topic="Art"
      />
      <Text style={{marginTop: 16}}>Visit the Explore Tab to Add New Subscriptions</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  }
});