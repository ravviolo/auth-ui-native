import { Pressable, Text } from 'react-native';

import { styles } from './IconButton.styles';

export interface Props {
  icon: string;
  color: string;
  testID: string;
  onPress: () => void;
}

export const IconButton = ({ onPress, color, icon, testID }: Props) => {
  return (
    <Pressable
      hitSlop={20}
      style={({ pressed }) => [pressed && styles.pressed, styles.btn, { borderColor: color }]}
      testID={testID}
      onPress={onPress}
    >
      <Text style={[styles.icon, { color }]}>{icon}</Text>
    </Pressable>
  );
};
