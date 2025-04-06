import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

type TopicCardProps = {
  title: string;
};

export default function TopicCard({ title }: TopicCardProps) {
  const [selected, setSelected] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => setSelected(!selected)}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 20,
        backgroundColor: selected ? '#0000FF' : '#D3D3D3',
        marginRight: 10
      }}
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