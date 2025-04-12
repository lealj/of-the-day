import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

type TopicPillProps = {
  title: string;
};

export default function TopicPill({ title }: TopicPillProps) {
  const [selected, setSelected] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => setSelected(!selected)}
      style={[styles.container, { backgroundColor: selected ? '#121212' : '#eee' }]}
    >
      <Text style={{ color: selected ? 'white' : '#333', fontWeight: 'bold' }}>
        {title}
      </Text>
      { selected && (
        <FontAwesome
          name='check'
          size={16}
          color='white'
          style={{ marginLeft: 8 }}
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 10,
    elevation: 0,
    borderWidth: 0.5,
    borderColor: '#ccc'
  }
});