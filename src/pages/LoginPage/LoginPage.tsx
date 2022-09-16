import { Button, StyleSheet, Text, View } from 'react-native';

interface Props {
  navigate: React.Dispatch<React.SetStateAction<'login' | 'signup'>>;
}

export const LoginPage = ({ navigate }: Props) => {
  const handleNavigate = () => {
    navigate('signup');
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
