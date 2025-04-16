import { ARTICLE_MAP } from "@/constants/articleMap";
import { SAMPLE_IMAGES } from "@/constants/imageMap";
import { useLocalSearchParams} from "expo-router";
import { useState } from "react";
import { Text, Image, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import ImageModal from "@/components/imageModal";

export default function Article() {
	const [imageFullscreen, setImageFullscreen] = useState(false);
	const { id, topic, title } = useLocalSearchParams();
	const imgSrc = SAMPLE_IMAGES[(topic as string).toLowerCase()]?.uri;
	const content = ARTICLE_MAP[(topic as string).toLowerCase()]?.content;
	const paragraphs = content.split('\n\n');

	return (
		<>
			<ScrollView contentContainerStyle={s.container}>
				<TouchableOpacity onPress={() => setImageFullscreen(true)}>
					<Image
						source={imgSrc}
						style={s.image}
					/>
				</TouchableOpacity>
				{paragraphs.map((p, idx) => (
					<Text key={idx} style={s.content}>{p.trim()}</Text>
				))}
			</ScrollView>

			<ImageModal
        visible={imageFullscreen}
        onClose={() => setImageFullscreen(false)}
        imgSrc={imgSrc}
      />
		</>
	)
}

const s = StyleSheet.create({
	container: {
		paddingBottom: 20,
		backgroundColor: '#FFFFFF',
		width: '100%',
	},
	image: {
    width: '100%',
    height: 300,
  },
	content: {
		fontSize: 18,
		lineHeight: 28,
		paddingHorizontal: 16,
		paddingVertical: 16,
		color: '#333',
		textAlign: 'left',
		fontFamily: 'System',
		textIndent: "20",
	},
	modalOverlay: {
		flex: 1,
		backgroundColor: '#000',
		justifyContent: 'center',
		alignItems: 'center',
	},
	xButton: {
		position: 'absolute',
		top: 20,
		right: 20,
		zIndex: 1,
	}
});