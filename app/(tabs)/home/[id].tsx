import { ARTICLE_MAP } from "@/constants/articleMap";
import { SAMPLE_IMAGES } from "@/constants/imageMap";
import { Stack, useLocalSearchParams, useNavigation } from "expo-router";
import { useLayoutEffect, useState } from "react";
import { Text, Image, StyleSheet, ScrollView, TouchableOpacity, Modal, View, Pressable} from "react-native";
import { StatusBar } from "expo-status-bar";
import { FontAwesome } from "@expo/vector-icons";


export default function Article() {
	const [imageFullscreen, setImageFullscreen] = useState(false);
	const { id, topic, title } = useLocalSearchParams();
	const imgSrc = SAMPLE_IMAGES[(topic as string).toLowerCase()]?.uri;
	const content = ARTICLE_MAP[(topic as string).toLowerCase()]?.content;
	const paragraphs = content.split('\n\n');

	const navigation = useNavigation();
	useLayoutEffect(() => {
		if (title) {
			navigation.setOptions({ title: String(title) });
		}
	}, [title]);

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

			<Modal
				visible={imageFullscreen}
				transparent
				animationType="fade"
				statusBarTranslucent
			>
				{imageFullscreen && (
					<>
						<StatusBar style="light" translucent backgroundColor="transparent" />
						<View style={s.modalOverlay}>
							<Pressable onPress={() => setImageFullscreen(false)} style={s.fullscreenContainer}>
								<FontAwesome name="times" size={24} color="black" style={s.xButton} />
								<Image
									source={imgSrc}
									style={s.fullscreenImage}
									resizeMode="contain"
								/>
							</Pressable>
						</View>
					</>
				)}
			</Modal>
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
});