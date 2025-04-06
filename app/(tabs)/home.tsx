import { View, Text } from 'react-native';
import EmptyState from '@/components/emptyState';

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <EmptyState />
    </View>
  );
}