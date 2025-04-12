import { View, ScrollView, StyleSheet } from 'react-native';
import TopicPill from './topicPill'; // we'll define this next

type TopicRowProps = {
  topics: string[];
};

export default function TopicRow({ topics }: TopicRowProps) {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {topics.map((topic, index) => (
          <TopicPill key={index} title={topic} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    marginLeft: 7
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 16,
    marginBottom: 8,
  }
});