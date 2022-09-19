/* eslint-disable no-console */
import { SignUpTemplate } from 'components/templates';

interface Props {
  navigate: React.Dispatch<React.SetStateAction<'login' | 'signup'>>;
}

export const SignUpPage = ({ navigate }: Props) => {
  const handleNavigate = () => {
    navigate('login');
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
