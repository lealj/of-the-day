import { Modal, Pressable, StatusBar, View, Image, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useEffect } from "react";

type ImageModalProps = {
	imgSrc: string;
	visible: boolean;
	onClose: () => void;
}

export default function ImageModal({imgSrc, visible, onClose}: ImageModalProps) {

	useEffect(() => {
    StatusBar.setHidden(visible, 'fade');
    return () => {
      StatusBar.setHidden(false, 'fade');
    };
  }, [visible]);
	
	return (
		<Modal visible={visible}  transparent animationType="fade">
			<View style={s.modalOverlay}>
				<Pressable onPress={onClose} style={s.fullscreenContainer}>
					<FontAwesome name="times" size={24} color="white" style={s.xButton} />
					<Image
						source={imgSrc}
						style={s.fullscreenImage}
						resizeMode="contain"
					/>
				</Pressable>
			</View>
		</Modal>
	);
}

const s = StyleSheet.create({
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