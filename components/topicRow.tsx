import { View, Text, ScrollView, StyleSheet } from 'react-native';
import TopicCard from './topicCard'; // we'll define this next

type TopicRowProps = {
  title: string;
  topics: string[];
};

export default function TopicRow({ topics }: TopicRowProps) {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {topics.map((topic, index) => (
          <TopicCard key={index} title={topic} />
        ))}
      </ScrollView>
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
  }
});