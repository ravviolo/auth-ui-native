/* eslint-disable no-console */
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SignUpTemplate } from 'components/templates';
import { RootStackParamList } from 'navigator';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { registerUser, selectUser } from 'store/user/userSlice';

export const SignUpScreen = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleNavigate = () => {
    navigation.navigate('Login');
  };

  const handleSignUpFormSubmit = async (email: string, password: string): Promise<void> => {
    const userCredentials = {
      email,
      password,
    };

    await dispatch(registerUser(userCredentials));
  };

  const handleSignUpViaGoogle = (): void => {
    console.log('Registering user via Google');
  };

  const handleSignUpViaLinkedIn = (): void => {
    console.log('Registering user via LinkedIn');
  };

  const handleSignUpViaFacebook = (): void => {
    console.log('Registering user via Facebook');
  };

  return (
    <SignUpTemplate
      footerBtnText="Login"
      footerText="Already a user?"
      headerText="Sign Up"
      testID="signup-template-test-id"
      onPressFacebook={handleSignUpViaFacebook}
      onPressFooterBtn={handleNavigate}
      onPressGoogle={handleSignUpViaGoogle}
      onPressLinkedIn={handleSignUpViaLinkedIn}
      onSubmitSignUpForm={handleSignUpFormSubmit}
    />
  );
};
