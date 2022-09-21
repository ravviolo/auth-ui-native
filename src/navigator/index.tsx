import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginPage, SignUpPage } from 'pages';

export interface RootStackParamList extends Record<string, object | undefined> {
  Login: undefined;
  SignUp: undefined;
}

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Login">
        <RootStack.Screen
          component={LoginPage}
          name="Login"
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          component={SignUpPage}
          name="SignUp"
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
