import { ARTICLE_MAP } from "@/constants/articleMap";
import { SAMPLE_IMAGES } from "@/constants/imageMap";
import { useNavigation } from "expo-router";
import { useLayoutEffect, useState } from "react";
import { ScrollView, TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import ImageViewing from "react-native-image-viewing";

type ArticleProps = {
	title: string;
	topic: string;
}

export default function Article({title, topic}: ArticleProps) {
	const [imageFullscreen, setImageFullscreen] = useState(false);
	const text = ARTICLE_MAP[(topic as string)]?.content;
	const imgSrc = SAMPLE_IMAGES[(topic as string)]?.uri;
	const paragraphs = text.split('\n\n');

	const navigation = useNavigation();
	useLayoutEffect(() => {
		if (title) {
			navigation.setOptions({ title: String(title) });
		}
	}, [title]);

	const toggleFullscreen = () => {
		setImageFullscreen(!imageFullscreen);
	}

	return (
		<>
			<ScrollView>
				<TouchableOpacity onPress={toggleFullscreen}>
					<Image
						source={imgSrc}
						style={s.image}
					/>
				</TouchableOpacity>
				{paragraphs.map((p, idx) => (
					<Text key={idx} style={s.content}>{p.trim()}</Text>
				))}
			</ScrollView>

			<ImageViewing
				images={[imgSrc]}
				imageIndex={0}
				visible={imageFullscreen}
				onRequestClose={toggleFullscreen}
				swipeToCloseEnabled
				doubleTapToZoomEnabled
				backgroundColor="rgb(0, 0, 0)"
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
	fullscreenContainer: {
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	fullscreenImage: {
		width: '100%',
		height: '100%',
	},
	xButton: {
		position: 'absolute',
		top: 20,
		right: 20,
		zIndex: 1,
	}
})