import { Stack } from 'expo-router';

export const unstable_settings = {
  href: null,
};

export default function SettingsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Settings"
        }}
      />
    </Stack>
  );
}