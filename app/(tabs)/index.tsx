import { View, Text, StyleSheet } from 'react-native';
import ArticleCardLarge from '@/components/articleCardLarge';

export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <ArticleCardLarge title="The Start of WW2" />
      <Text style={{marginTop: 16}}>Visit the Explore Tab to Add New Subscriptions</Text>
    </View>
  );
}