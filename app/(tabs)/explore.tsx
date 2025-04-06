import ArticleCard from "@/components/articleCard";
import Articles from "@/components/articlesSection";
import ArticleRow from "@/components/articlesSection";
import SectionTitle from "@/components/sectionTitle";
import TopicRow from "@/components/topicRow";
import { FlatList, ScrollView, Text, TextInput, View} from "react-native";

export default function Explore() {
  return (
    <ScrollView>
      <TextInput
        placeholder="Search topics"
        style={{
          height: 40,
          borderColor: '#ccc',
          borderWidth: 1,
          borderRadius: 8,
          paddingHorizontal: 12,
          marginTop: 10,
        }}
      />

      <SectionTitle title="Recommended For You" />
      <TopicRow
        topics={['History', 'Art', 'Anime', 'Software']}
      />
      <SectionTitle title="Popular Now" />
      <TopicRow
        title="Popular Now"
        topics={['History', 'Art', 'Anime', 'Software']}
      />

      <Articles />
      
    </ScrollView>
  );
}
