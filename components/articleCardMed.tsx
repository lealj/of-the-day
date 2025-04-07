import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

type ArticleCardMedProps = {
  title: string;
  tag: string;
};

export default function ArticleCardMed({ title, tag }: ArticleCardMedProps) {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.tag}>
        <Text style={styles.tagText}>{tag}</Text>
      </View>
      <Text style={{ color: '#333', fontWeight: 'bold' }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 200,
    backgroundColor: '#D3D3D3',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 90,
    borderRadius: 8
  },
  title: {
    fontWeight: '600',
    fontSize: 14,
    color: '#333',
  },
  tag: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#444',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  tagText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  }
});