import { View, Text, StyleSheet } from 'react-native';
import ArticleCardLarge from '@/components/articleCardLarge';

export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <ArticleCardLarge
        title="The Battle of Vercalle"
        topic="History"
      />
      <ArticleCardLarge
        title="Joshua Commanding the Sun..."
        topic="Art"
      />
      <Text style={{marginTop: 16}}>Visit the Explore Tab to Add New Subscriptions</Text>
    </View>
  );
}