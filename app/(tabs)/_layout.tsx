import { FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import type { BottomTabBarIconProps } from '@react-navigation/bottom-tabs';
import { lightTheme, darkTheme } from '@/constants/colors';
import { useColorScheme } from 'react-native';

export default function TabsLayout() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.tabIconSelected,
        tabBarInactiveTintColor: theme.tabIconDefault,
        tabBarStyle: {
          backgroundColor: theme.background,
          borderTopColor: '#ddd',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Your Articles of The Day',
          tabBarLabel: 'Reading List',
          tabBarIcon: ({ color, size }: BottomTabBarIconProps) => (
            <FontAwesome name="book" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color, size }: BottomTabBarIconProps) => (
            <FontAwesome name="search" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerShown: false,
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }: BottomTabBarIconProps) => (
            <FontAwesome name="cog" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}