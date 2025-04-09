import { TouchableOpacity, Text, StyleSheet, View, ImageBackground } from "react-native";
import { SAMPLE_IMAGES } from "@/constants/imageMap";

type ArticleCardLargeProps = {
  title: string;
  topic: string;
};

export default function ArticleCardLarge({title, topic}: ArticleCardLargeProps) {

  let imgSrc = null;
  if (topic === 'Art') {
    imgSrc = SAMPLE_IMAGES.art.uri;
  } else if (topic === 'History') {
    imgSrc = SAMPLE_IMAGES.history.uri;
  }

  return (
    <TouchableOpacity style={styles.card}>
      <ImageBackground
        style={styles.image}
        source={imgSrc}
      >
        <View style={styles.tag}>
          <Text style={styles.tagText}>{topic}</Text>
        </View>
        <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 6, marginBottom: 2 }}>
          {title}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  card: {
    width: '96%',
    height: 250,
    borderRadius: 12,
    overflow: 'hidden',
    marginTop: 6,
  },
  tag: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: 'rgba(51, 51, 51, 0.6)',
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