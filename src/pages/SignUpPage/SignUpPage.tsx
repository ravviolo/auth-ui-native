/* eslint-disable no-console */
import { Button, StyleSheet, Text, View } from 'react-native';

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
    <View style={styles.container}>
      <Text>SignUpPage</Text>
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
