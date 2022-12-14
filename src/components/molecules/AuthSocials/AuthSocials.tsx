import { Flex, IconButton } from 'components/atoms';

import { styles } from './AuthSocials.styles';

export interface Props {
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

export const AuthSocials = ({ onPressFacebook, onPressGoogle, onPressLinkedIn }: Props) => {
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
    <Flex direction="row" style={styles.container}>
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
