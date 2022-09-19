/* eslint-disable no-console */
import { LoginTemplate } from 'components/templates';

interface Props {
  navigate: React.Dispatch<React.SetStateAction<'login' | 'signup'>>;
}

export const LoginPage = ({ navigate }: Props) => {
  const handleNavigate = () => {
    navigate('signup');
  };

  const handleLoginFormSubmit = (
    email: string,
    password: string,
    rememberPassword: boolean
  ): void => {
    const userCredentials = {
      email,
      password,
      rememberPassword,
    };

    console.log('Logging user...');
    console.log(userCredentials);
  };

  const handleLoginViaGoogle = (): void => {
    console.log('Logging user via Google');
  };

  const handleLoginViaLinkedIn = (): void => {
    console.log('Logging user via LinkedIn');
  };

  const handleLoginViaFacebook = (): void => {
    console.log('Logging user via Facebook');
  };

  const handleResetPassword = (): void => {
    console.log('Reset password');
  };

  return (
    <LoginTemplate
      footerBtnText="Sign Up"
      footerText="Need an account?"
      headerText="Login"
      testID="login-template-test-id"
      onPressFacebook={handleLoginViaFacebook}
      onPressFooterBtn={handleNavigate}
      onPressGoogle={handleLoginViaGoogle}
      onPressLinkedIn={handleLoginViaLinkedIn}
      onPressResetPassword={handleResetPassword}
      onSubmitLoginForm={handleLoginFormSubmit}
    />
  );
};
