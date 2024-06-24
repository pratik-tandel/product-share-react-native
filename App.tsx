/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
// import Splash from './src/screens/auth/Splash';
import Signup from './src/screens/auth/Signup';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import Config from 'react-native-config';

function App(): React.JSX.Element {
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: 'replace webClientId here', // client ID of type WEB for your server. Required to get the idToken on the user object, and for offline access.
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  }, []);

  return (
    <SafeAreaView>
      {/* <Splash /> */}
      <Signup />
    </SafeAreaView>
  );
}

export default App;
