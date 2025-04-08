import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Stack } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export const unstable_settings = {
  href: null,
};

const subscribedTopics = ['Art', 'History', 'Biology', 'Philosophy', 'Astronomy'];

export default function ManageSubs() {
	const handleRemove = (topic: string) => {
		
	};

	return (
		<>
			<Stack.Screen options={{ title: 'Manage Subscriptions' }} />
			<ScrollView contentContainerStyle={styles.container}>
				<Text style={styles.heading}>Your Subscribed Topics</Text>
				<View style={styles.topicList}>
					{subscribedTopics.map((topic) => (
						<View key={topic} style={styles.topicCard}>
							<Text style={styles.topicText}>{topic}</Text>
							<TouchableOpacity
								style={styles.removeBtn}
								onPress={() => handleRemove(topic)}
							>
								<FontAwesome name='trash-o' size={24} color='black' />
							</TouchableOpacity>
						</View>
					))}
				</View>
			</ScrollView>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 16,
		backgroundColor: '#f9f9f9',
	},
	heading: {
		fontSize: 20,
		fontWeight: '600',
		marginBottom: 16,
		color: '#333',
	},
	topicList: {
		gap: 12,
	},
	topicCard: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: '#fff',
		borderRadius: 10,
		paddingVertical: 12,
		paddingHorizontal: 16,
		shadowColor: '#000',
		shadowOpacity: 0.05,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 4,
		elevation: 2,
	},
	topicText: {
		fontSize: 16,
		color: '#333',
	},
	removeBtn: {
		borderRadius: 20,
		padding: 6,
		alignItems: 'center',
		justifyContent: 'center',
	},
});