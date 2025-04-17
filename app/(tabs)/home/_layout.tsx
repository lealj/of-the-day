import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';

export const unstable_settings = {
	href: null,
};

export default function HomeLayout() {
	return (
		<>
		<StatusBar
			backgroundColor='#fffafa'
		/>
		<Stack>
			<Stack.Screen
				name="index"
				options={{
					title: "Your Articles Of The Day",
					headerStyle: {
						backgroundColor: '#fffafa'
					}
				}}
			/>
			<Stack.Screen
				name="[id]"
			/>
		</Stack>
		</>
	);
}