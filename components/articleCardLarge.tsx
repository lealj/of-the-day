import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

type ArticleCardLargeProps = {
    title: string;
};

export default function ArticleCardLarge({title}: ArticleCardLargeProps) {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.tag}>
        <Text style={styles.tagText}>History</Text>
      </View>
      <Text style={{ color: '#333', fontWeight: 'bold' }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '96%',
    height: 200,
    backgroundColor: '#D3D3D3',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6
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
  },
});