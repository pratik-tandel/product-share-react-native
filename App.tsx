/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import React, { useEffect } from 'react';
import Signin from './src/screens/auth/Signin';
// import Config from 'react-native-config';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Favorites from './src/screens/app/Favorites';
import Home from './src/screens/app/Home';
import Profile from './src/screens/app/Profile';
import Signup from './src/screens/auth/Signup';
import Splash from './src/screens/auth/Splash';
import { colors } from './src/utils/colors';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        let icon;

        if (route.name === 'Home') {
          icon = focused
            ? require('./src/assets/tabs/home_active.png')
            : require('./src/assets/tabs/home.png');
        } else if (route.name === 'Profile') {
          icon = focused
            ? require('./src/assets/tabs/profile_active.png')
            : require('./src/assets/tabs/profile.png');
        } else if (route.name === 'Favorites') {
          icon = focused
            ? require('./src/assets/tabs/bookmark_active.png')
            : require('./src/assets/tabs/bookmark.png');
        }

        // You can return any component that you like here!
        return <Image style={{ width: 24, height: 24 }} source={icon} />;
      },
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: { borderTopColor: colors.lightGrey }
    })}
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Favorites" component={Favorites} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

function App(): React.JSX.Element {
  const isSignedIn = true;

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: '524318510372-ncktjfvvohr7n2vqqaoa09fn9por3164.apps.googleusercontent.com', // client ID of type WEB for your server. Required to get the idToken on the user object, and for offline access.
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  }, []);

  const theme = {
    dark: false,
    colors: {
      primary: 'rgb(255, 45, 85)',
      background: 'rgb(242, 242, 242)',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    },
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {
            isSignedIn ? (
              <Stack.Screen name="Tabs" component={Tabs} />
            ) : (
              <>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Signin" component={Signin} />
                <Stack.Screen name="Signup" component={Signup} />
              </>
            )
          }
        </Stack.Navigator>
      </NavigationContainer >
    </SafeAreaProvider >
  );
}

export default App;
