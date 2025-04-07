import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function EmptyState() {
  return (
    <View style={styles.container}>
      <FontAwesome name="rss" size={48} color="#ccc" />
      <Text style={styles.title}>No Articles Yet</Text>
      <Text style={styles.subtitle}>Visit the explore page to get started!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 12,
  },
  subtitle: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
    textAlign: 'center',
  },
});