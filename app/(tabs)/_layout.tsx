import { FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import type { BottomTabBarIconProps } from '@react-navigation/bottom-tabs';
import { lightTheme, darkTheme } from '@/constants/colors';
import { useColorScheme, StatusBar } from 'react-native';

export default function TabsLayout() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme
  return (
    <>
      <StatusBar
        backgroundColor='#fffafa'
      />
      <Tabs
        screenOptions={{
          headerStyle: {
            backgroundColor: '#fffafa',
            borderBottomColor: '#ddd',
            borderBottomWidth: 1,
            elevation: 0,
          },
          tabBarActiveTintColor: theme.tabIconSelected,
          tabBarInactiveTintColor: theme.tabIconDefault,
          tabBarStyle: {
            backgroundColor: '#fffafa',
            borderTopColor: '#ddd',
            elevation: 0
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            headerShown: false,
            tabBarLabel: 'Reading List',
            tabBarIcon: ({ color, size }: BottomTabBarIconProps) => (
              <FontAwesome name="book" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            headerShown: false,
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
        <Tabs.Screen
          name="index"
          options={{
            href: null
          }}
        />
        <Tabs.Screen
          name="article/[id]"
          options={{
            href: null
          }}
        />
      </Tabs>
    </>
  );
}