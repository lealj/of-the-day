import Articles from "@/components/articlesSection";
import SectionTitle from "@/components/sectionTitle";
import TopicRow from "@/components/topicRow";
import { FontAwesome } from "@expo/vector-icons";
import { ScrollView, TextInput, StyleSheet, View} from "react-native";

export default function Explore() {
  const topics = ['History', 'Art', 'Anime', 'Software', 'Paleontology', 'Music'];
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.searchWrapper}>
        <FontAwesome
          name='search'
          style={styles.searchIcon}
        />
        <TextInput
          placeholder="Search topics"
          style={styles.textInput}
        >
        </TextInput>
      </View>

      <SectionTitle title="Recommended For You" />
      <TopicRow
        topics={topics}
      />
      <SectionTitle title="Popular Now" />
      <TopicRow
        topics={topics}
      />

      <SectionTitle title="Today's Featured Articles" />
      <Articles />
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 3,
    backgroundColor: '#FFFFFF'
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginHorizontal: 8,
    marginTop: 6,
    marginBottom: 10,
  },
  textInput: {
    flex: 1,
    height: 40,
    color: '#333',
  },
  searchIcon: {
    marginRight: 4,
  },
});
