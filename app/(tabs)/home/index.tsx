import { Text, StyleSheet, ScrollView, View } from 'react-native';
import ArticleCardLarge from '@/components/articleCardLarge';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
	return (
		<SafeAreaView style={styles.safeArea} edges={['top']}>
			<View style={styles.wrapper}>
				<ScrollView contentContainerStyle={styles.container}>
					<ArticleCardLarge
						title="The Battle of Vercalle"
						topic="History"
						id="1"
					/>
					<ArticleCardLarge
						title="Joshua Commanding the Sun..."
						topic="Art"
						id="2"
					/>
					<Text style={{ marginTop: 16 }}>
						Visit the Explore Tab to Add New Subscriptions
					</Text>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: '#FFFFFF',
	},
	wrapper: {
		flex: 1,
		backgroundColor: '#FFFFFF',
	},
	container: {
		flexGrow: 1,
		alignItems: 'center',
		justifyContent: 'flex-start',
		backgroundColor: '#FFFFFF',
		paddingBottom: 100
	},
});