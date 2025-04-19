import Article from "@/components/article";
import { useLocalSearchParams, useNavigation } from "expo-router";

export default function ArticleParent() {
	const { id, topic, title } = useLocalSearchParams();

	return (
		<Article
			title={(title as string)}
			topic={(topic as string)}
		/>
	)
}