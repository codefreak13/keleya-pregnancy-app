import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useTheme } from '../utils/theme';

import {
  Intro,
  SignIn,
  SignUp,
  Name,
  Date,
  Workout,
  Success
} from '../screens'

export type MainStackParamList = {
  Intro: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Name: undefined;
  Date: undefined;
  Workout: undefined;
  Success: undefined;
};

const MainStack = createStackNavigator<MainStackParamList>();

export default function App() {
  const theme = useTheme();
  React.useEffect(() => {
    const bootstrapAsync = async () => {
    };
    bootstrapAsync();
  }, []);

  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="Intro"
        screenOptions={{
          headerShown: false,
          headerStyle: { elevation: 0 },
          cardStyle: { backgroundColor: theme.colors.WHITE },
        }}>
        <MainStack.Screen name="Intro" component={Intro} />
        <MainStack.Screen name="SignIn" component={SignIn} />
        <MainStack.Screen name="SignUp" component={SignUp} />
        <MainStack.Screen name="Name" component={Name} />
        <MainStack.Screen name="Date" component={Date} />
        <MainStack.Screen name="Workout" component={Workout} />
        <MainStack.Screen name="Success" component={Success} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
