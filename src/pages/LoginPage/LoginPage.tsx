/* eslint-disable no-console */
import { Button, StyleSheet, Text, View } from 'react-native';

interface Props {
  navigate: React.Dispatch<React.SetStateAction<'login' | 'signup'>>;
}

export const LoginPage = ({ navigate }: Props) => {
  const handleNavigate = () => {
    navigate('signup');
  };

  const handleLoginFormSubmit = (email: string, password: string): void => {
    const userCredentials = {
      email,
      password,
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
    <View style={styles.container}>
      <Text>LoginPage</Text>
      <Button title="Change page" onPress={handleNavigate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
