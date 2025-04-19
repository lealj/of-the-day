import { Text, TouchableOpacity, StyleSheet, View, ImageBackground } from 'react-native';
import { SAMPLE_IMAGES } from '@/constants/imageMap';
import { router } from 'expo-router';
import { ARTICLE_MAP } from '@/constants/articleMap';

type ArticleCardMedProps = {
  title: string;
  topic: string;
};

export default function ArticleCardMed({ title, topic }: ArticleCardMedProps) {
  let topicUpper = topic.charAt(0).toUpperCase() + topic.slice(1);
  let imgSrc = SAMPLE_IMAGES[topic]?.uri;
  const id = ARTICLE_MAP[topic]?.id;

  return (
    <TouchableOpacity style={styles.card} onPress={() => router.push({ pathname: "/home/[id]", params: { id, topic, title }})}>
      <ImageBackground
        style={styles.image}
        source={imgSrc}
      >
        <View style={styles.tag}>
          <Text style={styles.tagText}>{topicUpper}</Text>
        </View>
        <Text style={styles.title}>
          {title}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 180,
    backgroundColor: '#D3D3D3',
    overflow: 'hidden',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    flex: 1,
    justifyContent: 'flex-end',
    transform: [{ scale: 1.05 }]
  },
  title: {
    fontWeight: '600',
    fontSize: 14,
    color: '#FFFFFF',
    marginHorizontal: 8,
    marginVertical: 4,
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