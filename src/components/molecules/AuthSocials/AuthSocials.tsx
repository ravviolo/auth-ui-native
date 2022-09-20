import { Flex, IconButton } from 'components/atoms';
import { StyleSheet } from 'react-native';

interface Props {
  testID: string;
  onPressGoogle: () => void;
  onPressFacebook: () => void;
  onPressLinkedIn: () => void;
}

interface AuthSocial {
  name: string;
  color: string;
  icon: string;
  onPressHandler: () => void;
}

export const AuthSocials = ({ onPressFacebook, onPressGoogle, onPressLinkedIn, testID }: Props) => {
  const authSocials: AuthSocial[] = [
    {
      name: 'Google',
      color: '#DB4437',
      icon: 'G',
      onPressHandler: onPressGoogle,
    },
    {
      name: 'Facebook',
      color: '#4267B2',
      icon: 'f',
      onPressHandler: onPressFacebook,
    },
    {
      name: 'LinkedIn',
      color: '#0077B5',
      icon: 'in',
      onPressHandler: onPressLinkedIn,
    },
  ];
  return (
    <Flex direction="row" style={styles.container} testID={testID}>
      {authSocials.map(({ onPressHandler, color, icon, name }) => (
        <IconButton
          key={`icon-btn-${name}`}
          color={color}
          icon={icon}
          testID={`icon-btn-${name}-test-id`}
          onPress={onPressHandler}
        />
      ))}
    </Flex>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 55,
  },
});
