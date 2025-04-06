import { Text, TouchableOpacity, StyleSheet } from 'react-native';

type ArticleCardProps = {
  title: string;
};

export default function ArticleCard({ title }: ArticleCardProps) {
  return (
    <TouchableOpacity style={styles.card}>
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
        padding: 10,
        marginRight: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
      width: '100%',
      height: 90,
      borderRadius: 8,
      marginBottom: 8,
    },
    title: {
      fontWeight: '600',
      fontSize: 14,
      color: '#333',
    },
});