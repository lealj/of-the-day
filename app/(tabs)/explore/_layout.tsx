import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';

export const unstable_settings = {
	href: null,
};

export default function SettingsLayout() {
	return (
		<>
		<StatusBar
			backgroundColor='#fffafa'
		/>
		<Stack>
			<Stack.Screen
				name="index"
				options={{
					title: "Explore",
					headerStyle: {
						backgroundColor: '#fffafa'
					}
				}}
			/>
			<Stack.Screen
				name="[id]"
				options={{
					href: null
				}}
			/>
		</Stack>
		</>
	);
}