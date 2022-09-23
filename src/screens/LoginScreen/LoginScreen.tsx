/* eslint-disable no-console */
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LoginTemplate } from 'components/templates';
import { RootStackParamList } from 'navigator';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { loginUser, selectUser } from 'store/user/userSlice';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export const LoginScreen = ({ navigation }: Props) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const handleNavigate = () => {
    navigation.navigate('SignUp');
  };

  const handleLoginFormSubmit = async (
    email: string,
    password: string,
    rememberPassword: boolean
  ): Promise<void> => {
    const userCredentials = {
      email,
      password,
      rememberPassword,
    };

    await dispatch(loginUser(userCredentials));
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
