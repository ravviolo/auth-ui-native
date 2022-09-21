/* eslint-disable no-console */
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SignUpTemplate } from 'components/templates';
import { RootStackParamList } from 'navigator';

type Props = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

export const SignUpScreen = ({ navigation }: Props) => {
  const handleNavigate = () => {
    navigation.navigate('Login');
  };

  const handleSignUpFormSubmit = (email: string, password: string): void => {
    const userCredentials = {
      email,
      password,
    };

    console.log('Registering user...');
    console.log(userCredentials);
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
